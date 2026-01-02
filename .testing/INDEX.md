# Testing Infrastructure Index

Quick reference for all testing assets.

## Structure

```
.testing/
├── README.md                 # Overview and philosophy
├── INDEX.md                  # This file
│
├── site-map/                 # Page documentation
│   ├── home.md
│   ├── about.md
│   ├── writing.md
│   ├── work.md
│   ├── resources.md
│   ├── services.md
│   └── contact.md
│
├── components/               # Component documentation
│   ├── navigation.md
│   ├── footer.md
│   ├── logo.md
│   └── layout.md
│
├── procedures/               # Test procedures
│   ├── a11y-keyboard-navigation.md
│   ├── a11y-heading-hierarchy.md
│   ├── links-internal-validation.md
│   └── visual-responsive-breakpoints.md
│
├── prompts/                  # Claude prompts
│   ├── full-site-audit.md
│   ├── a11y-deep-dive.md
│   └── pre-deploy-check.md
│
├── scripts/                  # UV single-file scripts
│   ├── axe-audit.py         # Accessibility testing
│   ├── link-checker.py      # Link validation
│   └── lighthouse-audit.py  # Performance testing
│
├── agents/                   # Agent configurations
│   ├── a11y-auditor.md
│   └── qa-engineer.md
│
└── reports/                  # Generated reports (gitignored)
    └── *.json, *.md, *.html
```

## Quick Commands

### Accessibility

```bash
# Full axe-core audit
uv run .testing/scripts/axe-audit.py http://localhost:4321 --crawl

# Single page
uv run .testing/scripts/axe-audit.py http://localhost:4321/about
```

### Links

```bash
# Full link check
uv run .testing/scripts/link-checker.py http://localhost:4321 --crawl

# Quick internal only (via npx)
npx linkinator http://localhost:4321 --recurse --skip-external
```

### Performance

```bash
# Lighthouse audit
uv run .testing/scripts/lighthouse-audit.py http://localhost:4321

# Direct npx
npx lighthouse http://localhost:4321 --view
```

## Claude Skills

Located in `.claude/skills/`:

| Skill | Command | Purpose |
|-------|---------|---------|
| `a11y-axe-core` | "Run accessibility audit" | WCAG testing via axe-core |
| `link-checker` | "Check for broken links" | Link validation |
| `site-audit` | "Run full site audit" | Orchestrated multi-domain testing |

## Prompts

Use these prompts for comprehensive testing:

```bash
# Full audit
claude -p "$(cat .testing/prompts/full-site-audit.md)"

# Accessibility deep dive
claude -p "$(cat .testing/prompts/a11y-deep-dive.md)"

# Pre-deploy quick check
claude -p "$(cat .testing/prompts/pre-deploy-check.md)"
```

## Composability

### Example: Custom Audit

```bash
# 1. Read site map for context
claude -p "Read .testing/site-map/home.md and .testing/components/navigation.md"

# 2. Run specific procedure
claude -p "Execute the procedure in .testing/procedures/a11y-keyboard-navigation.md on http://localhost:4321"

# 3. Generate report
claude -p "Create an audit report based on findings"
```

### Example: CI Pipeline

```yaml
steps:
  - run: uv run .testing/scripts/axe-audit.py $URL --crawl --fail-on serious
  - run: uv run .testing/scripts/link-checker.py $URL --crawl --fail-on-broken
  - run: uv run .testing/scripts/lighthouse-audit.py $URL --fail-under 90
```

## Reports

All scripts output to `.testing/reports/`:

- `axe-{timestamp}.json` - Raw axe-core results
- `axe-{timestamp}.md` - Formatted accessibility report
- `links-{timestamp}.json` - Link validation results
- `lighthouse-{timestamp}.html` - Lighthouse HTML report
- `audit-summary-{timestamp}.md` - Aggregated summary

## Extending

### Add New Page

1. Create `.testing/site-map/{page}.md`
2. Document sections, elements, test cases
3. Reference in `.testing/INDEX.md`

### Add New Component

1. Create `.testing/components/{component}.md`
2. Document props, structure, test cases
3. Reference in related page docs

### Add New Procedure

1. Create `.testing/procedures/{domain}-{action}.md`
2. Define steps, assertions, output format
3. Reference in relevant prompts

### Add New Script

1. Create `.testing/scripts/{name}.py` with UV header
2. Add to skill or create new skill in `.claude/skills/`
3. Document in INDEX.md
