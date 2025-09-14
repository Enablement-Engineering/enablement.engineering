---
title: Enablement Engineering – Design Specification
version: 1.0
---

# Design Specification

## Design Philosophy

**"Structured Progress with Human Touch"**

Our design system embodies the concept of enablement through structured, grid-based layouts that occasionally break free—representing the balance between systematic approaches and creative problem-solving.

## Visual Hierarchy & Grid System

### Base Grid
- **12-column fluid grid** (max-width: 1200px)
- **Gutter**: 24px (desktop) / 16px (mobile)
- **Margins**: 48px (desktop) / 24px (mobile)
- **Baseline grid**: 24px for vertical rhythm

### Off-Kilter System
Strategic rotation creates visual interest while maintaining accessibility:

```css
.off-kilter-subtle { transform: rotate(-0.5deg); }
.off-kilter-mild { transform: rotate(1deg); }
.off-kilter-bold { transform: rotate(-1.5deg); }
```

**Usage Rules:**
- Apply to content sections, not navigation/critical UI
- Maximum 1-2 rotated elements per viewport
- Always maintain readability (no rotation on body text)
- Use `transform-origin: center` for balanced rotation

### Layout Patterns

#### Standard Section
```
[-------- 12 columns --------]
[  content with padding       ]
```

#### Hero Section (Off-kilter)
```
[-- 8 cols --][-- 4 cols --]
[   content   ][   accent   ] ← rotate(-0.5deg)
```

#### Three-Column Services
```
[-- 4 --][-- 4 --][-- 4 --]
[ serv1 ][ serv2 ][ serv3 ] ← middle column rotate(1deg)
```

## Typography System

### Typeface Hierarchy
- **Primary**: Manrope (headings, logo, UI)
- **Secondary**: System stack for body text
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  ```

### Type Scale (1.25 ratio)
```css
--type-xs: 0.8rem;    /* 12.8px */
--type-sm: 1rem;      /* 16px - body */
--type-base: 1rem;    /* 16px */
--type-lg: 1.25rem;   /* 20px */
--type-xl: 1.563rem;  /* 25px */
--type-2xl: 1.953rem; /* 31.25px */
--type-3xl: 2.441rem; /* 39px */
--type-4xl: 3.052rem; /* 48.8px - hero */
```

### Typography Rules
- **Line height**: 1.6 (body), 1.2 (headings)
- **Letter spacing**: -0.025em (headings), normal (body)
- **Font weights**: 400 (regular), 500 (medium), 700 (bold)

## Color Application

### Primary Combinations (WCAG AAA)
- **Main**: Ink (#0B0E14) on Yellow (#FFD60A)
- **Secondary**: Yellow (#FFD60A) on Ink (#0B0E14)
- **Neutral**: Ink (#0B0E14) on Paper (#F7F5F2)

### Usage Guidelines
- **Yellow (#FFD60A)**: Primary backgrounds, main brand elements, hero sections
- **Ink (#0B0E14)**: Primary text, borders, main content areas
- **Orange (#F97316)**: Accent elements, CTA buttons, progress indicators, highlights
- **Teal (#0F766E)**: Links and interactive elements only
- **Paper (#F7F5F2)**: Neutral backgrounds, cards, secondary surfaces

## Spacing System

Based on 8px unit system:
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## Component Specifications

### Logo Usage
- **Minimum size**: 120px width
- **Clear space**: Equal to height of the "E"
- **Positioning**: Yellow circle aligns with x-height of text
- **Variations**: Full logo, logomark (ladder + circle), text only

### Buttons
```css
.button-primary {
  background: var(--yellow);
  color: var(--ink);
  padding: var(--space-4) var(--space-6);
  border-radius: 8px;
  font-weight: 500;
  transform: rotate(-0.25deg); /* subtle tilt */
}

.button-accent {
  background: var(--orange);
  color: var(--ink);
  padding: var(--space-4) var(--space-6);
  border-radius: 8px;
  font-weight: 500;
  /* no rotation for accent actions */
}

.button-secondary {
  background: transparent;
  color: var(--ink);
  border: 2px solid var(--ink);
  /* no rotation for secondary actions */
}
```

### Cards
- **Default**: White background, subtle shadow
- **Accent**: Off-kilter rotation (-0.5deg to 1deg)
- **Padding**: 24px (desktop) / 16px (mobile)
- **Border-radius**: 12px
- **Shadow**: `0 4px 12px rgba(11, 14, 20, 0.1)`

## Animation & Motion

### Easing Functions
```css
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
--bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Transition Durations
- **Micro-interactions**: 150ms
- **Component changes**: 250ms
- **Page transitions**: 400ms

### Motion Principles
- **Respect `prefers-reduced-motion`**
- **No parallax scrolling**
- **Subtle rotation on hover** (0.5deg max)
- **Focus indicators**: Orange outline with 3px blur

## Responsive Breakpoints

```css
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1200px;
```

### Grid Adaptations
- **Mobile**: Single column, no off-kilter
- **Tablet**: 2-column, minimal rotation (0.25deg)
- **Desktop**: Full 12-column, standard rotations
- **Wide**: Same as desktop, wider max-width

## Accessibility Standards

### Focus Management
- **Visible focus rings**: Orange (#F97316) with 3px outline
- **Skip links**: First interactive element
- **Logical tab order**: Respect visual hierarchy

### Content Guidelines
- **Heading hierarchy**: Proper H1-H6 nesting
- **Alt text**: Descriptive for all images
- **Link text**: Descriptive, not "click here"
- **Color contrast**: Follow contrast matrix in brand system

### Motion Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  .off-kilter-subtle,
  .off-kilter-mild,
  .off-kilter-bold {
    transform: none;
  }

  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

## Implementation Notes

### CSS Custom Properties Structure
```css
:root {
  /* Colors */
  --ink: #0B0E14;
  --paper: #F7F5F2;
  --teal: #0F766E;
  --orange: #F97316;
  --blue: #2563EB;
  --yellow: #FFD60A;

  /* Typography */
  --font-primary: 'Manrope', sans-serif;
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Spacing & Layout */
  [spacing variables from above]

  /* Motion */
  [easing and duration variables from above]
}
```

### Off-Kilter Implementation Best Practices
1. **Container queries** for responsive rotations
2. **Transform origin** management for proper rotation
3. **Intersection Observer** for scroll-triggered animations
4. **CSS Grid** subgrid for maintaining alignment

---

*This specification should be reviewed quarterly and updated based on user feedback and accessibility audits.*