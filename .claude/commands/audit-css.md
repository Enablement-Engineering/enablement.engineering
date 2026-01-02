---
description: Audit visual design system for brand consistency, color contrast, typography, and CSS best practices
allowed-tools: Read, Glob, Grep, Bash(uv:*), mcp__claude-in-chrome__*, mcp__playwright__*
---

# CSS & Visual Design Audit

You are a Senior CSS Specialist auditing the visual design system for consistency, brand adherence, and modern CSS best practices.

## Context Files

Read these files first:
- `.testing/components/*.md` - Component specifications
- `src/styles/globals.css` - Global CSS
- `AGENTS.md` - Brand colors and design tokens

## Brand Reference

```yaml
colors:
  primary: "#ffd60a"      # Yellow
  accent: "#f97316"       # Orange
  ink: "#0b0e14"          # Black
  paper: "#f7f5f2"        # Cream
  link: "#0f766e"         # Teal

typography:
  family: "Manrope"

contrast_requirements:
  normal_text: "4.5:1 (WCAG AA)"
  large_text: "3:1 (WCAG AA)"
```

## Audit Checklist

### 1. Brand Token Verification

Using browser tools, verify on $ARGUMENTS (default: http://localhost:4321):

```
- Navigate to site
- Inspect computed styles on key elements
- Verify colors match brand tokens
- Check font-family is Manrope
```

### 2. Color Contrast Analysis

Check these critical combinations:
- Body text (ink) on background (paper)
- Links (teal) on background (paper)
- Primary buttons (ink on yellow)
- Active nav items (ink on yellow)

Use browser DevTools contrast checker or:
```bash
# Check specific elements via JavaScript
document.querySelectorAll('a').forEach(a => {
  const styles = getComputedStyle(a);
  console.log(a.textContent, styles.color, styles.backgroundColor);
});
```

### 3. Typography Scale

Verify responsive typography:
- H1: text-4xl → text-5xl → text-6xl
- H2: text-2xl → text-3xl → text-4xl
- Body: readable at all sizes (min 16px)

### 4. Spacing & Grid

Check `grid-container` consistency:
- max-width: 6xl (1152px)
- Padding: px-6 lg:px-8
- Section spacing rhythm

### 5. Animation & Motion

Verify in globals.css:
- [ ] `prefers-reduced-motion` support on all animations
- [ ] `will-change` used appropriately (not overused)
- [ ] Transition timing feels on-brand (cubic-bezier curves)

Test off-kilter transforms:
- Hover/focus straightens rotation
- No jank or repaints

### 6. Component-Specific Checks

**Navigation**:
- Backdrop blur performance
- Active state rotation (1.5deg)
- Mobile/desktop transition at md breakpoint

**Cards**:
- Consistent border-radius
- Shadow consistency
- Hover states

## Browser Testing Steps

1. Navigate to each page
2. Take accessibility snapshot
3. Check computed styles on:
   - Primary heading
   - Body text
   - Links
   - Buttons
   - Navigation

## Output Format

Create report at `.testing/reports/css-audit-{date}.md`:

```markdown
# CSS & Visual Design Audit Report

**Date**: {date}
**URL**: {url}

## Summary
- Brand Compliance: PASS/FAIL
- Contrast Issues: {count}
- Typography Issues: {count}
- Animation Issues: {count}

## Findings

### Critical
[List any contrast failures or brand violations]

### Recommendations
[Specific CSS changes with code examples]
```

## Execute

1. Read context files
2. Navigate to site with browser tools
3. Systematically check each area
4. Document findings with specific selectors
5. Provide CSS fix snippets
