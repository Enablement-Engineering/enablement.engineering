# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "rich",
# ]
# ///
"""
Lighthouse Audit Wrapper

Runs Lighthouse via npx and parses results for quick summary.

Usage:
    uv run lighthouse-audit.py http://localhost:4321
    uv run lighthouse-audit.py http://localhost:4321 --preset mobile
    uv run lighthouse-audit.py http://localhost:4321 --threshold 90
"""

import argparse
import json
import subprocess
import sys
from datetime import datetime
from pathlib import Path

from rich.console import Console
from rich.panel import Panel
from rich.table import Table

console = Console()


def run_lighthouse(url: str, preset: str = "desktop", output_dir: Path = None) -> dict:
    """Run Lighthouse audit and return results."""

    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    output_dir = output_dir or Path(".testing/reports")
    output_dir.mkdir(parents=True, exist_ok=True)

    json_path = output_dir / f"lighthouse-{timestamp}.json"
    html_path = output_dir / f"lighthouse-{timestamp}.html"

    console.print(f"[blue]Running Lighthouse audit...[/blue]")
    console.print(f"URL: {url}")
    console.print(f"Preset: {preset}")
    console.print()

    cmd = [
        "npx", "lighthouse", url,
        f"--preset={preset}",
        "--output=json,html",
        f"--output-path={output_dir}/lighthouse-{timestamp}",
        "--chrome-flags=--headless --no-sandbox",
        "--quiet"
    ]

    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=120
        )

        if result.returncode != 0:
            console.print(f"[red]Lighthouse error:[/red] {result.stderr}")
            return None

    except subprocess.TimeoutExpired:
        console.print("[red]Lighthouse timed out after 120 seconds[/red]")
        return None
    except FileNotFoundError:
        console.print("[red]npx not found. Please install Node.js.[/red]")
        return None

    # Parse JSON results
    if json_path.exists():
        with open(json_path) as f:
            return json.load(f)

    return None


def format_score(score: float | None) -> str:
    """Format a Lighthouse score with color."""
    if score is None:
        return "[dim]N/A[/dim]"

    score_pct = int(score * 100)

    if score_pct >= 90:
        return f"[green]{score_pct}[/green]"
    elif score_pct >= 50:
        return f"[yellow]{score_pct}[/yellow]"
    else:
        return f"[red]{score_pct}[/red]"


def print_results(results: dict, threshold: int = 90):
    """Print Lighthouse results summary."""

    categories = results.get("categories", {})

    # Score table
    table = Table(title="Lighthouse Scores")
    table.add_column("Category", style="bold")
    table.add_column("Score", justify="center")
    table.add_column("Status", justify="center")

    all_passing = True
    for cat_id, cat_data in categories.items():
        score = cat_data.get("score")
        score_pct = int(score * 100) if score else 0

        status = "[green]PASS[/green]" if score_pct >= threshold else "[red]FAIL[/red]"
        if score_pct < threshold:
            all_passing = False

        table.add_row(
            cat_data.get("title", cat_id),
            format_score(score),
            status
        )

    console.print(table)

    # Core Web Vitals
    audits = results.get("audits", {})
    cwv_metrics = {
        "first-contentful-paint": "First Contentful Paint",
        "largest-contentful-paint": "Largest Contentful Paint",
        "total-blocking-time": "Total Blocking Time",
        "cumulative-layout-shift": "Cumulative Layout Shift",
        "speed-index": "Speed Index"
    }

    console.print()
    console.print("[bold]Core Web Vitals:[/bold]")

    for audit_id, display_name in cwv_metrics.items():
        audit = audits.get(audit_id, {})
        display_value = audit.get("displayValue", "N/A")
        score = audit.get("score")

        score_indicator = format_score(score)
        console.print(f"  {display_name}: {display_value} ({score_indicator})")

    return all_passing


def print_opportunities(results: dict, limit: int = 5):
    """Print top improvement opportunities."""

    audits = results.get("audits", {})

    # Find opportunities (audits with savings)
    opportunities = []
    for audit_id, audit in audits.items():
        if audit.get("details", {}).get("type") == "opportunity":
            savings = audit.get("details", {}).get("overallSavingsMs", 0)
            if savings > 0:
                opportunities.append({
                    "id": audit_id,
                    "title": audit.get("title"),
                    "savings": savings,
                    "description": audit.get("description", "")[:100]
                })

    opportunities.sort(key=lambda x: x["savings"], reverse=True)

    if opportunities:
        console.print()
        console.print("[bold]Top Opportunities:[/bold]")

        for opp in opportunities[:limit]:
            savings_sec = opp["savings"] / 1000
            console.print(f"  [yellow]•[/yellow] {opp['title']}")
            console.print(f"    Potential savings: {savings_sec:.1f}s")


def main():
    parser = argparse.ArgumentParser(description="Run Lighthouse audit")
    parser.add_argument("url", help="URL to audit")
    parser.add_argument("--preset", choices=["desktop", "mobile"], default="desktop",
                        help="Device preset")
    parser.add_argument("--threshold", type=int, default=90,
                        help="Minimum passing score (0-100)")
    parser.add_argument("--output-dir", type=Path, default=Path(".testing/reports"),
                        help="Output directory")
    parser.add_argument("--fail-under", type=int,
                        help="Exit 1 if any score below this threshold")

    args = parser.parse_args()

    results = run_lighthouse(args.url, args.preset, args.output_dir)

    if not results:
        console.print("[red]Failed to get Lighthouse results[/red]")
        sys.exit(1)

    console.print()
    all_passing = print_results(results, args.threshold)
    print_opportunities(results)

    # Report location
    console.print()
    console.print(f"[green]Reports saved to:[/green] {args.output_dir}")

    # Exit code
    if args.fail_under:
        categories = results.get("categories", {})
        for cat_data in categories.values():
            score = cat_data.get("score", 0)
            if score and int(score * 100) < args.fail_under:
                console.print(f"[red]FAIL: Score below {args.fail_under}[/red]")
                sys.exit(1)

    if not all_passing:
        sys.exit(1)


if __name__ == "__main__":
    main()
