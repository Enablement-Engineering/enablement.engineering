---
description: Deep audit of a specific component across all pages and states using browser automation
allowed-tools: Read, Glob, Grep, mcp__claude-in-chrome__*, mcp__playwright__*
---

# Component Audit

Deep dive audit of a specific component across all its usages and states.

## Target Component

Component to audit: $ARGUMENTS (e.g., "navigation", "footer", "logo")

If no component specified, list available components:
- navigation
- footer
- logo
- layout

## Context

Read the component documentation:
```
.testing/components/{component}.md
```

## Audit Framework

### 1. Source Code Review

Read the component source:
```
src/components/{Component}.astro
# or
src/components/{Component}.tsx
```

Check:
- [ ] Props interface documented
- [ ] Accessibility attributes present
- [ ] Responsive classes applied
- [ ] Event handlers properly typed

### 2. Visual Consistency Across Pages

Using browser automation, check component on each page:

```yaml
pages:
  - /
  - /about
  - /writing
  - /work
  - /resources
  - /services
  - /contact
```

For each page:
1. Navigate to page
2. Capture component state
3. Compare against baseline from component doc
4. Note any inconsistencies

### 3. State Testing

Test all component states:

**Navigation states**:
- Default (no page active)
- Active page highlighted
- Mobile collapsed
- Mobile expanded
- Scroll behavior (hide/show)

**Interactive states**:
- Default
- Hover
- Focus
- Active/Pressed
- Disabled (if applicable)

### 4. Responsive Behavior

Test at each breakpoint:

```yaml
mobile: 375px
tablet: 768px
desktop: 1280px
wide: 1536px
```

Verify:
- [ ] Breakpoint transitions are smooth
- [ ] No content overflow
- [ ] Touch targets adequate on mobile
- [ ] Layout matches design intent

### 5. Accessibility Audit

Component-specific a11y checks:

**Navigation**:
- [ ] `aria-label` on nav element
- [ ] `aria-current="page"` on active item
- [ ] Mobile toggle has accessible name
- [ ] `aria-expanded` toggles correctly
- [ ] `aria-controls` links to menu
- [ ] Focus trapped in mobile menu when open

**Footer**:
- [ ] `contentinfo` landmark
- [ ] External links have indicator
- [ ] Links are keyboard accessible

**Logo**:
- [ ] Decorative handling (aria-hidden or empty alt)
- [ ] Link has accessible name via adjacent text

### 6. Performance Impact

Check component's performance footprint:

- Hydration strategy (client:load vs client:visible)
- JS bundle contribution
- CSS specificity issues
- Animation performance (will-change, transforms)

## Output Format

Create report at `.testing/reports/component-{name}-{date}.md`:

```markdown
# Component Audit: {Name}

**Date**: {date}
**Source**: {file path}

## Overview

[Component purpose and usage]

## Visual Consistency

| Page | Status | Notes |
|------|--------|-------|
| / | PASS | - |
| /about | PASS | - |
| ... | ... | ... |

## State Testing

| State | Status | Notes |
|-------|--------|-------|
| Default | PASS | - |
| Hover | PASS | - |
| Focus | FAIL | Focus ring not visible |
| ... | ... | ... |

## Responsive Behavior

| Breakpoint | Status | Notes |
|------------|--------|-------|
| Mobile | PASS | - |
| Tablet | PASS | - |
| Desktop | PASS | - |

## Accessibility

| Check | Status | WCAG |
|-------|--------|------|
| Landmark | PASS | 1.3.1 |
| Keyboard | FAIL | 2.1.1 |
| ... | ... | ... |

## Performance

- Hydration: {strategy}
- Bundle impact: {size}
- Animation: {performance notes}

## Issues Found

| ID | Description | Severity | Fix |
|----|-------------|----------|-----|
| 1 | ... | ... | ... |

## Recommendations

[Prioritized improvements]
```

## Execute

1. Identify component from argument
2. Read component documentation
3. Read source code
4. Test visual consistency across pages
5. Test all states
6. Test responsive behavior
7. Audit accessibility
8. Assess performance impact
9. Generate detailed report
