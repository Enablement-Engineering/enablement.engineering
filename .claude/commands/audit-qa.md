---
description: Functional QA audit covering user flows, link validation, responsive behavior, and edge case testing
allowed-tools: Read, Glob, Bash(uv:*), Bash(npx:*), mcp__claude-in-chrome__*, mcp__playwright__*
---

# Functional QA Audit

You are a Functional QA Engineer testing user flows, navigation, interactivity, and edge cases.

## Context Files

Read these first:
- `.testing/site-map/*.md` - Expected page structure and links
- `.testing/components/*.md` - Component behavior specs
- `.testing/procedures/links-*.md` - Link validation procedures
- `.testing/procedures/visual-*.md` - Responsive testing procedures

## Phase 1: Link Validation

Run link checker on target ($ARGUMENTS or http://localhost:4321):

```bash
uv run .testing/scripts/link-checker.py $URL --crawl
```

Or quick check via npx:
```bash
npx linkinator $URL --recurse
```

### Expected Links (from site-map)

```yaml
navigation:
  - / → Home
  - /writing → Writing
  - /work → Projects
  - /resources → Resources
  - /about → About

home_page_links:
  - /approach
  - /definitions/glass-box
  - /work/uic-equalify
  - /writing/what-is-enablement-engineering
  - /writing/alt-text-context-engineering
  - /contact
  - /services

external_links:
  - linkedin.com/in/dylan--isaac/
  - github.com/dylan-isaac
```

## Phase 2: User Flow Testing

Using browser automation, test these critical paths:

### Flow 1: Discovery Journey
```yaml
steps:
  1. Navigate to /
  2. Click "Writing" in nav
  3. Click first article
  4. Verify article loads
  5. Click browser back
  6. Verify returns to /writing
  7. Click logo
  8. Verify returns to /

assertions:
  - Each page loads without error
  - Navigation state updates correctly
  - Back button works as expected
```

### Flow 2: Services Inquiry
```yaml
steps:
  1. Navigate to /
  2. Scroll to "How I Can Help"
  3. Click "View services" CTA
  4. Verify /services loads
  5. Scroll to "Agent Discovery Sprint"
  6. Click "Book a discovery call"
  7. Verify /contact loads
  8. Click email link
  9. Verify mailto: opens

assertions:
  - CTAs are clickable
  - Pages load correctly
  - Email link triggers mail client
```

### Flow 3: Portfolio Deep Dive
```yaml
steps:
  1. Navigate to /work
  2. Click featured project card
  3. Verify case study loads
  4. Click "Start a Conversation"
  5. Verify /contact loads

assertions:
  - Project detail page exists
  - Internal links work
```

### Flow 4: Resource Exploration
```yaml
steps:
  1. Navigate to /resources
  2. Click "Definitions" tab
  3. Verify only definitions shown
  4. Click "Ladders" tab
  5. Verify appropriate content (or empty state)
  6. Click "All Types" tab
  7. Verify all resources shown
  8. Click a definition card
  9. Verify definition page loads

assertions:
  - Tab switching works
  - Filters apply correctly
  - Empty state displays appropriately
```

## Phase 3: Responsive Testing

Reference: `.testing/procedures/visual-responsive-breakpoints.md`

Test at these viewports:

### Mobile (375 × 667)
```yaml
resize_to: 375x667
check:
  - Navigation: Hamburger visible, desktop nav hidden
  - Content: Single column layout
  - Touch targets: >= 44x44px
  - No horizontal scroll
```

### Tablet (768 × 1024)
```yaml
resize_to: 768x1024
check:
  - Navigation: Desktop nav visible
  - Content: 2-column where appropriate
  - Cards: Proper grid layout
```

### Desktop (1280 × 800)
```yaml
resize_to: 1280x800
check:
  - Navigation: Full desktop layout
  - Content: Max-width container centered
  - Grid: 12-column active
```

## Phase 4: Interactive Component Testing

### Mobile Menu
```yaml
viewport: 375x667
steps:
  1. Click hamburger button
  2. Verify menu opens with animation
  3. Click a menu item
  4. Verify: Menu closes AND page navigates
  5. Re-open menu
  6. Click outside menu
  7. Verify menu closes
```

### Resources Tab Filter
```yaml
steps:
  1. Navigate to /resources
  2. Note initial state (All Types active)
  3. Click "Definitions"
  4. Verify: Tab becomes active, content filters
  5. Click "Ladders"
  6. Verify: Tab becomes active, content filters (or empty state)
  7. Verify: "No resources found" ONLY shows when genuinely empty
```

### Navigation Active State
```yaml
pages_to_check:
  - /writing → "Writing" should be active
  - /work → "Projects" should be active
  - /resources → "Resources" should be active
  - /about → "About" should be active
```

## Phase 5: Edge Cases

### Empty States
- What if no articles exist? (Writing page)
- What if no projects exist? (Work page)
- What if filter has no results? (Resources page)

### Long Content
- Very long article titles
- Long definition descriptions
- Extended service descriptions

### Error States
- Navigate to /nonexistent-page
- Verify 404 page displays
- Verify navigation still works on 404

### External Links
- LinkedIn opens in new tab
- GitHub opens in new tab
- Email link opens mail client

## Output Format

Create report at `.testing/reports/qa-audit-{date}.md`:

```markdown
# Functional QA Audit Report

**Date**: {date}
**URL**: {url}
**Viewports Tested**: Mobile, Tablet, Desktop

## Summary

| Category | Tests | Pass | Fail |
|----------|-------|------|------|
| Links | {n} | {n} | {n} |
| User Flows | {n} | {n} | {n} |
| Responsive | {n} | {n} | {n} |
| Interactive | {n} | {n} | {n} |
| Edge Cases | {n} | {n} | {n} |

## Link Validation Results

[Output from link checker]

## User Flow Results

### Flow 1: Discovery Journey
- Status: PASS/FAIL
- Issues: [if any]

[Continue for each flow]

## Issues Found

| ID | Description | Steps to Reproduce | Severity | Screenshot |
|----|-------------|-------------------|----------|------------|
| 1 | ... | ... | Critical/Major/Minor | [link] |

## Recommendations

[Prioritized fixes]
```

## Execute

1. Run automated link validation
2. Test each user flow via browser
3. Check responsive behavior at breakpoints
4. Test interactive components
5. Verify edge cases
6. Compile issues with reproduction steps
