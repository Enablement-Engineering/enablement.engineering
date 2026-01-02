# Prompt: Accessibility Deep Dive

Use this prompt for thorough accessibility testing beyond automated tools.

## Prompt Template

```
Perform a deep accessibility audit on http://localhost:4321

## Automated Testing

First, run axe-core:
```bash
uv run .testing/scripts/axe-audit.py http://localhost:4321 --crawl
```

## Manual Testing Procedures

After automated testing, perform these manual checks using browser automation:

### 1. Keyboard Navigation
Reference: `.testing/procedures/a11y-keyboard-navigation.md`

- Navigate to each page using Tab key only
- Verify skip link functionality
- Test mobile menu keyboard accessibility
- Check for keyboard traps

### 2. Heading Hierarchy
Reference: `.testing/procedures/a11y-heading-hierarchy.md`

For each page:
- Extract all headings (h1-h6)
- Verify single H1 per page
- Check for skipped heading levels
- Validate heading text describes content

### 3. Screen Reader Simulation

Verify these elements are properly announced:
- Navigation landmarks
- Current page indicator (aria-current="page")
- External link indicators "(opens in new tab)"
- Form labels and error messages
- Image alt text quality

### 4. Focus Indicators

For each interactive element:
- Verify visible focus indicator
- Check focus indicator contrast
- Ensure focus order matches visual order

## Component-Specific Checks

Reference component docs in `.testing/components/`:

- **Navigation**: Mobile menu ARIA states, toggle button naming
- **Footer**: External link announcements
- **Logo**: Decorative image handling

## Output

Create a detailed accessibility report including:

1. Automated findings (from axe-core)
2. Manual testing results
3. WCAG success criteria mapping
4. Prioritized remediation list
5. Code examples for fixes

Save to: `.testing/reports/a11y-deep-dive-{date}.md`
```

## When to Use

- Before major releases
- After significant UI changes
- For WCAG compliance audits
- When accessibility is a key requirement

## Time Estimate

~15-20 minutes for full audit with browser automation
