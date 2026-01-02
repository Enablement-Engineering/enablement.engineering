---
name: link-checker
description: Validate internal and external links across your website. Use when checking for broken links, validating href targets, verifying anchor links, or auditing link health before deployment.
allowed-tools: Bash(npx:*), Bash(pnpm:*), Bash(uv:*), Read, Write, Glob
---

# Link Checker

Crawl your site and validate all links for broken references, redirects, and accessibility.

## Quick Start

Using npx (no install):

```bash
npx linkinator http://localhost:4321 --recurse
```

Using the Python script (more detailed output):

```bash
uv run .testing/scripts/link-checker.py http://localhost:4321
```

## Options

### npx linkinator

```bash
# Basic crawl
npx linkinator http://localhost:4321 --recurse

# With markdown output
npx linkinator http://localhost:4321 --recurse --format markdown

# Skip external links (faster)
npx linkinator http://localhost:4321 --recurse --skip-external

# Specific path patterns to skip
npx linkinator http://localhost:4321 --recurse --skip "linkedin.com|github.com"
```

### Python Script

```bash
# Full crawl with anchor validation
uv run .testing/scripts/link-checker.py http://localhost:4321 --crawl

# Check only internal links
uv run .testing/scripts/link-checker.py http://localhost:4321 --internal-only

# Validate against site map
uv run .testing/scripts/link-checker.py http://localhost:4321 --use-sitemap
```

## What Gets Checked

| Check | Description | Severity |
|-------|-------------|----------|
| 404 Not Found | Target page doesn't exist | Critical |
| 500 Server Error | Server error on target | Critical |
| Timeout | Target unreachable | Serious |
| Redirect Chain | Multiple redirects (>2) | Moderate |
| Anchor Missing | #fragment doesn't exist | Moderate |
| External Down | Third-party link broken | Minor |

## Integration with Site Map

Reference expected links from `.testing/site-map/*.md` files:

```bash
uv run .testing/scripts/link-checker.py http://localhost:4321 --use-sitemap
```

This validates that all documented links exist and discovers undocumented links.

## CI Usage

```bash
# Fail build on any broken internal links
npx linkinator http://localhost:4321 --recurse --skip-external || exit 1
```

## Output

Reports saved to `.testing/reports/links-{timestamp}.json`

```json
{
  "total": 47,
  "valid": 45,
  "broken": 2,
  "warnings": 3,
  "broken_links": [...]
}
```
