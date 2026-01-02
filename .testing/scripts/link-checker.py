# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "httpx",
#     "beautifulsoup4",
#     "rich",
# ]
# ///
"""
Link Checker Script

Crawls a website and validates all internal and external links.

Usage:
    uv run link-checker.py http://localhost:4321
    uv run link-checker.py http://localhost:4321 --crawl
    uv run link-checker.py http://localhost:4321 --internal-only
"""

import argparse
import asyncio
import json
import sys
from datetime import datetime
from pathlib import Path
from urllib.parse import urljoin, urlparse

import httpx
from bs4 import BeautifulSoup
from rich.console import Console
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich.table import Table

console = Console()


async def fetch_page(client: httpx.AsyncClient, url: str) -> tuple[str | None, int]:
    """Fetch a page and return content and status code."""
    try:
        response = await client.get(url, follow_redirects=True, timeout=10.0)
        if response.headers.get("content-type", "").startswith("text/html"):
            return response.text, response.status_code
        return None, response.status_code
    except httpx.TimeoutException:
        return None, -1  # Timeout
    except httpx.RequestError as e:
        console.print(f"[dim]Request error for {url}: {e}[/dim]")
        return None, -2  # Connection error


def extract_links(html: str, base_url: str) -> list[dict]:
    """Extract all links from HTML content."""
    soup = BeautifulSoup(html, "html.parser")
    links = []

    for anchor in soup.find_all("a", href=True):
        href = anchor["href"]

        # Skip javascript: and mailto: links
        if href.startswith(("javascript:", "mailto:", "tel:", "#")):
            continue

        # Resolve relative URLs
        full_url = urljoin(base_url, href)
        text = anchor.get_text(strip=True)[:50] or "[no text]"

        # Check for anchor
        parsed = urlparse(full_url)
        anchor_id = parsed.fragment if parsed.fragment else None

        links.append({
            "url": full_url.split("#")[0],  # URL without fragment
            "anchor": anchor_id,
            "text": text,
            "source": base_url
        })

    return links


def is_internal(url: str, base_domain: str) -> bool:
    """Check if URL is internal to the base domain."""
    parsed = urlparse(url)
    return parsed.netloc == base_domain or not parsed.netloc


async def check_anchor(client: httpx.AsyncClient, url: str, anchor: str) -> bool:
    """Check if an anchor exists on the page."""
    try:
        response = await client.get(url, timeout=10.0)
        if response.status_code != 200:
            return False
        soup = BeautifulSoup(response.text, "html.parser")
        return soup.find(id=anchor) is not None or soup.find("a", {"name": anchor}) is not None
    except Exception:
        return False


async def validate_links(
    base_url: str,
    crawl: bool = False,
    internal_only: bool = False,
    max_pages: int = 100
) -> dict:
    """Validate all links starting from base_url."""

    base_domain = urlparse(base_url).netloc
    pages_to_check = {base_url}
    checked_pages = set()
    all_links = []
    results = {
        "valid": [],
        "broken": [],
        "warnings": [],
        "errors": []
    }

    async with httpx.AsyncClient() as client:
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console
        ) as progress:
            task = progress.add_task("Checking links...", total=None)

            while pages_to_check and len(checked_pages) < max_pages:
                url = pages_to_check.pop()
                if url in checked_pages:
                    continue

                progress.update(task, description=f"Checking: {url[-50:]}")

                html, status = await fetch_page(client, url)
                checked_pages.add(url)

                if status == -1:
                    results["errors"].append({
                        "url": url,
                        "issue": "Timeout",
                        "severity": "serious"
                    })
                    continue
                elif status == -2:
                    results["errors"].append({
                        "url": url,
                        "issue": "Connection error",
                        "severity": "serious"
                    })
                    continue
                elif status >= 400:
                    results["broken"].append({
                        "url": url,
                        "status": status,
                        "severity": "critical" if status == 404 else "serious"
                    })
                    continue

                if html:
                    links = extract_links(html, url)
                    all_links.extend(links)

                    if crawl:
                        for link in links:
                            if is_internal(link["url"], base_domain):
                                if link["url"] not in checked_pages:
                                    pages_to_check.add(link["url"])

            # Now validate all discovered links
            progress.update(task, description="Validating discovered links...")

            unique_urls = {}
            for link in all_links:
                if link["url"] not in unique_urls:
                    unique_urls[link["url"]] = link

            for url, link_info in unique_urls.items():
                # Skip if already checked as a page
                if url in checked_pages:
                    results["valid"].append(link_info)
                    continue

                # Skip external if requested
                if internal_only and not is_internal(url, base_domain):
                    continue

                # Check URL
                try:
                    response = await client.head(url, follow_redirects=True, timeout=5.0)
                    if response.status_code < 400:
                        results["valid"].append({**link_info, "status": response.status_code})

                        # Check redirect chains
                        if len(response.history) > 2:
                            results["warnings"].append({
                                **link_info,
                                "issue": f"Redirect chain ({len(response.history)} hops)",
                                "severity": "moderate"
                            })
                    else:
                        results["broken"].append({
                            **link_info,
                            "status": response.status_code,
                            "severity": "critical" if response.status_code == 404 else "serious"
                        })
                except httpx.TimeoutException:
                    results["warnings"].append({
                        **link_info,
                        "issue": "Timeout (external)",
                        "severity": "minor"
                    })
                except httpx.RequestError:
                    results["warnings"].append({
                        **link_info,
                        "issue": "Connection failed",
                        "severity": "minor"
                    })

                # Check anchors
                if link_info.get("anchor"):
                    anchor_exists = await check_anchor(client, url, link_info["anchor"])
                    if not anchor_exists:
                        results["warnings"].append({
                            **link_info,
                            "issue": f"Anchor #{link_info['anchor']} not found",
                            "severity": "moderate"
                        })

    return {
        "base_url": base_url,
        "timestamp": datetime.now().isoformat(),
        "pages_checked": len(checked_pages),
        "total_links": len(all_links),
        "summary": {
            "valid": len(results["valid"]),
            "broken": len(results["broken"]),
            "warnings": len(results["warnings"]),
            "errors": len(results["errors"])
        },
        **results
    }


def print_results(results: dict):
    """Print results in a nice table."""
    console.print()
    console.print(f"[bold]Link Check Results[/bold]")
    console.print(f"Base URL: {results['base_url']}")
    console.print(f"Pages checked: {results['pages_checked']}")
    console.print(f"Total links found: {results['total_links']}")
    console.print()

    # Summary table
    table = Table(title="Summary")
    table.add_column("Status", style="bold")
    table.add_column("Count", justify="right")

    table.add_row("[green]Valid[/green]", str(results["summary"]["valid"]))
    table.add_row("[red]Broken[/red]", str(results["summary"]["broken"]))
    table.add_row("[yellow]Warnings[/yellow]", str(results["summary"]["warnings"]))
    table.add_row("[red]Errors[/red]", str(results["summary"]["errors"]))

    console.print(table)

    # Broken links detail
    if results["broken"]:
        console.print()
        console.print("[red bold]Broken Links:[/red bold]")
        for link in results["broken"]:
            console.print(f"  [red]✗[/red] {link['url']}")
            console.print(f"    Status: {link.get('status', 'N/A')}")
            if link.get("source"):
                console.print(f"    Found on: {link['source']}")
            console.print()

    # Warnings detail
    if results["warnings"]:
        console.print()
        console.print("[yellow bold]Warnings:[/yellow bold]")
        for link in results["warnings"][:10]:  # Limit output
            console.print(f"  [yellow]⚠[/yellow] {link['url']}")
            console.print(f"    Issue: {link.get('issue', 'Unknown')}")
        if len(results["warnings"]) > 10:
            console.print(f"  ... and {len(results['warnings']) - 10} more")


def main():
    parser = argparse.ArgumentParser(description="Check links on a website")
    parser.add_argument("url", help="Base URL to check")
    parser.add_argument("--crawl", action="store_true", help="Crawl entire site")
    parser.add_argument("--internal-only", action="store_true", help="Only check internal links")
    parser.add_argument("--max-pages", type=int, default=100, help="Max pages to crawl")
    parser.add_argument("--output-dir", type=Path, default=Path(".testing/reports"))
    parser.add_argument("--fail-on-broken", action="store_true", help="Exit 1 if broken links found")

    args = parser.parse_args()

    # Ensure output directory exists
    args.output_dir.mkdir(parents=True, exist_ok=True)

    # Run the check
    results = asyncio.run(validate_links(
        args.url,
        crawl=args.crawl,
        internal_only=args.internal_only,
        max_pages=args.max_pages
    ))

    # Print results
    print_results(results)

    # Save report
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    output_path = args.output_dir / f"links-{timestamp}.json"
    output_path.write_text(json.dumps(results, indent=2))
    console.print(f"\n[green]Report saved:[/green] {output_path}")

    # Exit code
    if args.fail_on_broken and results["summary"]["broken"] > 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
