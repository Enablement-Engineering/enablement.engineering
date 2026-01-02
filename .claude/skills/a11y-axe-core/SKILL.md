---
name: a11y-axe-core
description: Run axe-core accessibility audits on local or production websites. Use when checking WCAG compliance, finding accessibility violations, validating A11y fixes, or generating accessibility reports. Supports single page or full site crawl.
allowed-tools: Bash(uv:*), Read, Write, Glob
---

# Accessibility Audits with axe-core

Run comprehensive WCAG 2.1 accessibility audits using the industry-standard axe-core engine.

## Quick Start

Audit a single page:

```bash
uv run .testing/scripts/axe-audit.py http://localhost:4321
```

Audit entire site (crawl all pages):

```bash
uv run .testing/scripts/axe-audit.py http://localhost:4321 --crawl
```

## What Gets Checked

axe-core tests for 90+ accessibility rules including:

- **Color contrast** (WCAG 2.1 Level AA)
- **Missing alt text** on images
- **Unlabeled form fields**
- **Keyboard accessibility** issues
- **ARIA attribute** errors
- **Heading hierarchy** violations
- **Link purpose** clarity
- **Focus management** problems

## Severity Levels

| Level | Meaning | Action |
|-------|---------|--------|
| Critical | Blocks users with disabilities | Fix immediately |
| Serious | Significantly impacts accessibility | Fix before release |
| Moderate | Some users unable to access content | Fix soon |
| Minor | Best practice violation | Fix when convenient |

## Output

The script generates:

1. **Console summary** - Quick overview of violations
2. **JSON report** - Machine-readable at `.testing/reports/axe-{timestamp}.json`
3. **Markdown report** - Human-readable at `.testing/reports/axe-{timestamp}.md`

## Configuration Options

```bash
# Only check critical and serious issues
uv run .testing/scripts/axe-audit.py <URL> --min-severity serious

# Output only (no recommendations)
uv run .testing/scripts/axe-audit.py <URL> --quiet

# Specific WCAG level
uv run .testing/scripts/axe-audit.py <URL> --wcag-level aa
```

## Common Violations & Fixes

See [COMMON-FIXES.md](COMMON-FIXES.md) for remediation patterns for the most frequent issues.

## Integration with Site Map

The audit automatically references `.testing/site-map/*.md` for page inventory when using `--crawl` mode.

## CI/CD Usage

```bash
# Fail if any critical or serious violations
uv run .testing/scripts/axe-audit.py <URL> --fail-on serious

# Exit code: 0 = pass, 1 = violations found
```
