# Component: Navigation

**Source**: `src/components/Navigation.astro`
**Type**: Astro Component
**Hydration**: Client-side JS for mobile menu toggle

## Props

```typescript
interface Props {
  currentPage?: string;  // URL pathname for active state
}
```

## Dependencies

- `src/components/Logo.tsx` (React, `client:load`)
- `src/config/navigation.ts` (nav items array)
- `src/lib/navigation.ts` (client-side behavior)

## Structure

```
<nav aria-label="Main navigation">
  ├── Desktop Navigation (hidden md:flex)
  │   ├── Logo Link (/)
  │   └── Nav Items (Writing, Projects, Resources, About)
  │
  └── Mobile Navigation (md:hidden)
      ├── Logo Link (/)
      ├── Toggle Button (aria-expanded, aria-controls)
      └── Mobile Menu (#mobile-menu, aria-hidden)
          └── Nav Items
```

## Navigation Items

```yaml
items:
  - href: "/writing"
    label: "Writing"
  - href: "/work"
    label: "Projects"
  - href: "/resources"
    label: "Resources"
  - href: "/about"
    label: "About"
```

## Behaviors

### Scroll Behavior
- Fixed position with `backdrop-blur-sm`
- Gradient fade below nav for content transition
- Hide on scroll down, show on scroll up (via `src/lib/navigation.ts`)

### Active State
- Desktop: Yellow background, rotated 1.5deg, bold text
- Mobile: Bottom border underline, bold text
- Uses `aria-current="page"` for accessibility

### Mobile Menu
- Toggle button with hamburger icon
- Menu slides in below header
- `aria-expanded` and `aria-hidden` managed via JS

## Styling

```css
/* Fixed positioning */
position: fixed;
top: 0;
z-index: 40;
background: rgba(background, 0.95);
backdrop-filter: blur(4px);

/* Active state (desktop) */
.active {
  background: var(--color-primary-400);
  color: var(--color-secondary-900);
  transform: rotate(1.5deg);
  font-weight: 800;
}
```

## Test Cases

### Functional
- [ ] Logo click navigates to home
- [ ] All nav links navigate correctly
- [ ] Active state shows on current page
- [ ] Mobile menu opens/closes on toggle

### Accessibility
- [ ] Skip link targets `#main-content`
- [ ] Tab order: Skip link → Logo → Nav items
- [ ] Mobile toggle has accessible name
- [ ] `aria-expanded` updates on toggle
- [ ] `aria-hidden` syncs with visibility

### Visual
- [ ] Backdrop blur doesn't cause jank
- [ ] Active state rotation is subtle
- [ ] Mobile breakpoint transition is smooth

### Edge Cases
- [ ] Very long page names don't break layout
- [ ] Navigation works without JavaScript (links still work)
