# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "playwright",
#     "rich",
#     "httpx",
# ]
# ///
"""
axe-core Accessibility Audit Script

Runs axe-core accessibility tests on web pages using Playwright.

Usage:
    uv run axe-audit.py http://localhost:4321
    uv run axe-audit.py http://localhost:4321 --crawl
    uv run axe-audit.py http://localhost:4321 --min-severity serious
"""

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path
from urllib.parse import urljoin, urlparse

from playwright.sync_api import sync_playwright
from rich.console import Console
from rich.table import Table

console = Console()

# axe-core CDN URL
AXE_CORE_URL = "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.8.4/axe.min.js"

SEVERITY_ORDER = ["critical", "serious", "moderate", "minor"]


def inject_axe_core(page):
    """Inject axe-core library into the page."""
    page.evaluate(f"""
        () => new Promise((resolve, reject) => {{
            if (window.axe) {{
                resolve();
                return;
            }}
            const script = document.createElement('script');
            script.src = '{AXE_CORE_URL}';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        }});
    """)


def run_axe(page, options=None):
    """Run axe-core analysis on the page."""
    options = options or {}
    return page.evaluate(f"""
        async () => {{
            const options = {json.dumps(options)};
            const results = await axe.run(document, options);
            return results;
        }}
    """)


def extract_links(page, base_url):
    """Extract internal links from the page."""
    links = page.evaluate("""
        () => Array.from(document.querySelectorAll('a[href]'))
            .map(a => a.href)
            .filter(href => href && !href.startsWith('mailto:') && !href.startsWith('tel:'))
    """)

    internal_links = set()
    base_domain = urlparse(base_url).netloc

    for link in links:
        parsed = urlparse(link)
        if parsed.netloc == base_domain or not parsed.netloc:
            # Normalize the URL
            clean_url = urljoin(base_url, parsed.path)
            if not clean_url.endswith(('.pdf', '.jpg', '.png', '.svg', '.gif')):
                internal_links.add(clean_url)

    return internal_links


def format_violation(violation):
    """Format a violation for display."""
    return {
        "id": violation["id"],
        "impact": violation["impact"],
        "description": violation["description"],
        "help": violation["help"],
        "helpUrl": violation["helpUrl"],
        "nodes": len(violation["nodes"]),
        "elements": [
            {
                "html": node["html"][:100],
                "target": node["target"],
                "failureSummary": node.get("failureSummary", "")
            }
            for node in violation["nodes"][:5]  # Limit to first 5 nodes
        ]
    }


def audit_page(page, url, options=None):
    """Audit a single page and return results."""
    console.print(f"[blue]Auditing:[/blue] {url}")

    try:
        page.goto(url, wait_until="networkidle", timeout=30000)
        inject_axe_core(page)
        results = run_axe(page, options)

        violations = [format_violation(v) for v in results.get("violations", [])]

        return {
            "url": url,
            "timestamp": datetime.now().isoformat(),
            "violations": violations,
            "passes": len(results.get("passes", [])),
            "incomplete": len(results.get("incomplete", [])),
            "inapplicable": len(results.get("inapplicable", []))
        }

    except Exception as e:
        console.print(f"[red]Error auditing {url}:[/red] {e}")
        return {
            "url": url,
            "error": str(e),
            "violations": []
        }


def print_summary(results, min_severity="minor"):
    """Print a summary table of results."""
    table = Table(title="Accessibility Audit Summary")
    table.add_column("Page", style="cyan")
    table.add_column("Critical", style="red")
    table.add_column("Serious", style="yellow")
    table.add_column("Moderate", style="blue")
    table.add_column("Minor", style="dim")
    table.add_column("Total", style="bold")

    severity_threshold = SEVERITY_ORDER.index(min_severity)

    for result in results:
        if "error" in result:
            table.add_row(result["url"], "ERROR", "-", "-", "-", "-")
            continue

        counts = {"critical": 0, "serious": 0, "moderate": 0, "minor": 0}
        for v in result["violations"]:
            impact = v.get("impact", "minor")
            counts[impact] = counts.get(impact, 0) + 1

        # Filter by minimum severity
        relevant_count = sum(
            counts[sev] for sev in SEVERITY_ORDER[:severity_threshold + 1]
        )

        table.add_row(
            result["url"][-50:],  # Truncate long URLs
            str(counts["critical"]) if counts["critical"] else "-",
            str(counts["serious"]) if counts["serious"] else "-",
            str(counts["moderate"]) if counts["moderate"] else "-",
            str(counts["minor"]) if counts["minor"] else "-",
            str(relevant_count)
        )

    console.print(table)


def generate_markdown_report(results, output_path):
    """Generate a Markdown report."""
    lines = [
        "# Accessibility Audit Report",
        "",
        f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        f"**Pages audited:** {len(results)}",
        "",
        "## Summary",
        ""
    ]

    total_violations = {"critical": 0, "serious": 0, "moderate": 0, "minor": 0}
    for result in results:
        for v in result.get("violations", []):
            impact = v.get("impact", "minor")
            total_violations[impact] += 1

    lines.append(f"- **Critical:** {total_violations['critical']}")
    lines.append(f"- **Serious:** {total_violations['serious']}")
    lines.append(f"- **Moderate:** {total_violations['moderate']}")
    lines.append(f"- **Minor:** {total_violations['minor']}")
    lines.append("")

    for result in results:
        lines.append(f"## {result['url']}")
        lines.append("")

        if "error" in result:
            lines.append(f"**Error:** {result['error']}")
            lines.append("")
            continue

        if not result["violations"]:
            lines.append("No violations found.")
            lines.append("")
            continue

        for v in result["violations"]:
            lines.append(f"### {v['id']} ({v['impact']})")
            lines.append("")
            lines.append(f"**Description:** {v['description']}")
            lines.append("")
            lines.append(f"**Help:** {v['help']}")
            lines.append("")
            lines.append(f"**More info:** {v['helpUrl']}")
            lines.append("")
            lines.append(f"**Affected elements:** {v['nodes']}")
            lines.append("")

            if v["elements"]:
                lines.append("**Examples:**")
                lines.append("")
                for elem in v["elements"][:3]:
                    lines.append(f"```html")
                    lines.append(elem["html"])
                    lines.append("```")
                    if elem.get("failureSummary"):
                        lines.append(f"> {elem['failureSummary']}")
                    lines.append("")

    output_path.write_text("\n".join(lines))
    console.print(f"[green]Markdown report saved:[/green] {output_path}")


def main():
    parser = argparse.ArgumentParser(description="Run axe-core accessibility audits")
    parser.add_argument("url", help="URL to audit")
    parser.add_argument("--crawl", action="store_true", help="Crawl and audit all internal pages")
    parser.add_argument("--min-severity", choices=SEVERITY_ORDER, default="minor",
                        help="Minimum severity to report")
    parser.add_argument("--fail-on", choices=SEVERITY_ORDER,
                        help="Exit with error if violations at this level or higher")
    parser.add_argument("--quiet", action="store_true", help="Minimal output")
    parser.add_argument("--output-dir", type=Path, default=Path(".testing/reports"),
                        help="Output directory for reports")

    args = parser.parse_args()

    # Ensure output directory exists
    args.output_dir.mkdir(parents=True, exist_ok=True)

    console.print(f"[bold]axe-core Accessibility Audit[/bold]")
    console.print(f"Target: {args.url}")
    console.print()

    results = []

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        if args.crawl:
            # Crawl mode: discover and audit all pages
            pages_to_audit = {args.url}
            audited = set()

            while pages_to_audit:
                url = pages_to_audit.pop()
                if url in audited:
                    continue

                result = audit_page(page, url)
                results.append(result)
                audited.add(url)

                # Extract new links if no error
                if "error" not in result:
                    new_links = extract_links(page, args.url)
                    pages_to_audit.update(new_links - audited)

        else:
            # Single page mode
            result = audit_page(page, args.url)
            results.append(result)

        browser.close()

    # Print summary
    if not args.quiet:
        print_summary(results, args.min_severity)

    # Save reports
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    json_path = args.output_dir / f"axe-{timestamp}.json"
    md_path = args.output_dir / f"axe-{timestamp}.md"

    json_path.write_text(json.dumps(results, indent=2))
    console.print(f"[green]JSON report saved:[/green] {json_path}")

    generate_markdown_report(results, md_path)

    # Check fail condition
    if args.fail_on:
        threshold = SEVERITY_ORDER.index(args.fail_on)
        for result in results:
            for v in result.get("violations", []):
                if SEVERITY_ORDER.index(v.get("impact", "minor")) <= threshold:
                    console.print(f"[red]FAIL:[/red] Found {v['impact']} violation: {v['id']}")
                    sys.exit(1)

    # Summary stats
    total_violations = sum(len(r.get("violations", [])) for r in results)
    if total_violations == 0:
        console.print("[green]All pages passed accessibility checks.[/green]")
    else:
        console.print(f"[yellow]Found {total_violations} total violations across {len(results)} pages.[/yellow]")


if __name__ == "__main__":
    main()
