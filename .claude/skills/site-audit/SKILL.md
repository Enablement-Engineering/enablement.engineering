---
name: site-audit
description: Orchestrate comprehensive website audits combining accessibility, performance, links, and visual testing. Use when you need a full site health check, pre-deployment validation, or comprehensive quality assurance.
allowed-tools: Bash(npx:*), Bash(pnpm:*), Bash(uv:*), Read, Write, Glob, Task
---

# Site Audit Orchestrator

Run comprehensive multi-domain audits on your website using specialized testing tools.

## Quick Start

Run all audits:

```bash
# Full audit suite
claude -p "Run the site-audit skill on http://localhost:4321"
```

Or run individual audits:

```bash
# Accessibility only
uv run .testing/scripts/axe-audit.py http://localhost:4321 --crawl

# Links only
uv run .testing/scripts/link-checker.py http://localhost:4321 --crawl

# Performance only
npx lighthouse http://localhost:4321 --output=json --output-path=.testing/reports/lighthouse.json
```

## Audit Domains

### 1. Accessibility (a11y-axe-core)

WCAG 2.1 AA compliance via axe-core.

```bash
uv run .testing/scripts/axe-audit.py http://localhost:4321 --crawl --fail-on serious
```

### 2. Link Validation (link-checker)

Internal and external link health.

```bash
uv run .testing/scripts/link-checker.py http://localhost:4321 --crawl
```

### 3. Performance (Lighthouse)

Core Web Vitals and performance metrics.

```bash
npx lighthouse http://localhost:4321 --preset=desktop --output=html --output-path=.testing/reports/lighthouse.html
```

### 4. Visual Regression

Component rendering across breakpoints.

```bash
# Using Playwright for screenshots
npx playwright test --project=visual-regression
```

## Orchestration Workflow

When asked to "run a full audit", execute in this order:

1. **Pre-flight checks**
   - Verify site is running (`curl -I http://localhost:4321`)
   - Check for existing reports

2. **Parallel audits** (can run simultaneously)
   - axe-core accessibility scan
   - Link validation

3. **Sequential audits** (require full page load)
   - Lighthouse performance audit

4. **Post-processing**
   - Aggregate results into summary
   - Generate combined report

## Using Site Map

Reference `.testing/site-map/*.md` for page inventory:

```yaml
pages_to_audit:
  - / (home)
  - /about
  - /writing
  - /work
  - /resources
  - /services
  - /contact
```

## Output

All reports saved to `.testing/reports/`:

```
.testing/reports/
├── axe-{timestamp}.json
├── axe-{timestamp}.md
├── links-{timestamp}.json
├── lighthouse-{timestamp}.html
└── audit-summary-{timestamp}.md
```

## Composing with Procedures

Reference detailed test procedures from `.testing/procedures/`:

- `a11y-keyboard-navigation.md` - Manual keyboard testing steps
- `a11y-heading-hierarchy.md` - Heading structure validation
- `links-internal-validation.md` - Link checking details
- `visual-responsive-breakpoints.md` - Breakpoint testing

## CI/CD Integration

```yaml
# GitHub Actions example
- name: Run site audit
  run: |
    npm run build && npm run preview &
    sleep 5
    uv run .testing/scripts/axe-audit.py http://localhost:4321 --crawl --fail-on serious
    uv run .testing/scripts/link-checker.py http://localhost:4321 --crawl --fail-on-broken
    npx lighthouse http://localhost:4321 --budget-path=lighthouse-budget.json
```

## Threshold Defaults

| Domain | Pass Threshold |
|--------|----------------|
| Accessibility | No critical/serious violations |
| Links | No broken internal links |
| Performance | Lighthouse score > 90 |
| Visual | < 1% pixel variance |
