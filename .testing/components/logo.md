# Component: Logo

**Source**: `src/components/Logo.tsx`
**Type**: React Component
**Hydration**: `client:load` (immediate)

## Exports

```typescript
export function LogoSquare({ className }: { className?: string }): JSX.Element
```

## Usage

```astro
---
import { LogoSquare } from './Logo';
---

<LogoSquare className="w-8 h-8" client:load />
```

## Design

The logo is a stylized sun/starburst shape representing:
- Enablement (radiating capability)
- Clarity (sun = visibility)
- Energy (dynamic, not static)

## Hydration Strategy

Uses `client:load` for immediate hydration. Consider:
- Is interactivity needed? (hover effects?)
- Could this be pure SVG in Astro instead?
- Impact on LCP if logo is above fold

## Styling

```css
/* Default sizing in Navigation */
.w-8.h-8 /* 32x32px */

/* Hover behavior */
group-hover:scale-105
transition-transform
```

## Test Cases

### Visual
- [ ] Logo renders at correct size
- [ ] Colors match brand (yellow primary)
- [ ] Hover animation is smooth

### Performance
- [ ] Hydration doesn't cause layout shift
- [ ] SVG is optimized (no unnecessary paths)

### Accessibility
- [ ] Logo link has accessible name (via adjacent text)
- [ ] Decorative image doesn't need alt (role="presentation" or aria-hidden)

## Performance Consideration

**Question**: Does this need to be a React component?

If the logo is purely decorative with CSS-only hover effects, it could be:
1. Inline SVG in Astro (zero JS)
2. Static image with CSS hover

Current `client:load` means React hydrates immediately, adding to JS bundle.
