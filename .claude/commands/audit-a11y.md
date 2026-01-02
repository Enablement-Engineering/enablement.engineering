---
description: Comprehensive WCAG 2.1 AA accessibility audit combining axe-core automation with manual keyboard and screen reader testing
allowed-tools: Read, Glob, Bash(uv:*), Bash(npx:*), mcp__claude-in-chrome__*, mcp__playwright__*
---

# Accessibility Audit (WCAG 2.1 AA)

You are an Accessibility Auditor conducting comprehensive WCAG 2.1 AA compliance testing.

## Context Files

Read these first:
- `.testing/site-map/*.md` - Page structure and expected elements
- `.testing/components/*.md` - Component accessibility requirements
- `.testing/procedures/a11y-*.md` - Detailed testing procedures
- `.claude/skills/a11y-axe-core/COMMON-FIXES.md` - Remediation patterns

## Phase 1: Automated Testing

Run axe-core on the target site ($ARGUMENTS or http://localhost:4321):

```bash
uv run .testing/scripts/axe-audit.py $URL --crawl
```

Capture the output and note all violations by severity.

## Phase 2: Manual Keyboard Testing

Reference: `.testing/procedures/a11y-keyboard-navigation.md`

Using browser automation:

### Skip Link Test
```yaml
1. Navigate to homepage
2. Press Tab once
3. Verify: Skip link becomes visible
4. Press Enter
5. Verify: Focus moves to #main-content
```

### Navigation Test
```yaml
1. Continue Tab through navigation
2. Expected order: Logo → Writing → Projects → Resources → About
3. Verify: Each item has visible focus indicator
4. Verify: aria-current="page" on active item
```

### Mobile Menu Test (resize to 375px width)
```yaml
1. Tab to hamburger button
2. Verify: aria-expanded="false"
3. Press Enter
4. Verify: Menu opens, aria-expanded="true"
5. Tab through menu items
6. Press Escape
7. Verify: Menu closes, focus returns to toggle
```

## Phase 3: Heading Hierarchy

Reference: `.testing/procedures/a11y-heading-hierarchy.md`

For each page, extract headings via browser:

```javascript
Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
  .map(h => `${h.tagName}: ${h.textContent.trim()}`)
```

Validate:
- [ ] Single H1 per page
- [ ] No skipped levels (H1 → H3)
- [ ] Logical nesting structure

## Phase 4: Screen Reader Simulation

Check these announce correctly:

### Landmarks
```yaml
- header/banner: Main navigation
- main: Primary content
- footer/contentinfo: Footer navigation
```

### Interactive Elements
```yaml
- External links: "(opens in new tab)" announced
- Current page: "current page" or similar announced
- Buttons: Purpose announced (e.g., "Toggle navigation menu")
```

### Images
```yaml
- Logo: Decorative or has alt text
- Author photo: Descriptive alt text
- Client logos: Company name in alt
```

## Phase 5: Focus Indicators

For each interactive element type:

```yaml
links:
  check: "ring-2 ring-accent visible on :focus-visible"

buttons:
  check: "ring-2 ring-accent visible on :focus-visible"

inputs:
  check: "ring-2 ring-accent visible on :focus-visible"
```

## Known Issues to Investigate

From initial audit, check these specifically:

1. **Resources page**: "No resources found" message visible when content exists
2. **Duplicate navigation**: Both desktop and mobile nav in DOM simultaneously
3. **Mobile menu aria-hidden**: Properly toggled with visibility?

## Output Format

Create comprehensive report at `.testing/reports/a11y-audit-{date}.md`:

```markdown
# Accessibility Audit Report

**Date**: {date}
**Standard**: WCAG 2.1 Level AA
**URL**: {url}

## Executive Summary
- Automated violations: {count by severity}
- Manual testing issues: {count}
- Overall compliance: PASS/FAIL

## Automated Findings (axe-core)

### Critical
[List with WCAG criteria, element, fix]

### Serious
[List with WCAG criteria, element, fix]

## Manual Testing Findings

### Keyboard Navigation
[Results of keyboard testing]

### Heading Hierarchy
[Outline for each page]

### Screen Reader
[Announcement issues]

## Remediation Priority

| Issue | WCAG | Severity | Effort | Fix |
|-------|------|----------|--------|-----|
| ... | ... | ... | ... | ... |

## Code Fixes

[Specific code changes for each issue]
```

## Execute

1. Run automated axe-core scan
2. Perform manual keyboard tests via browser
3. Validate heading hierarchy
4. Check screen reader announcements
5. Verify focus indicators
6. Compile comprehensive report with fixes
