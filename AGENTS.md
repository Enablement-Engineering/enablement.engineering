# AGENTS.md

This document provides guidelines for AI coding agents working in this codebase.

## Build Commands

```bash
npm run dev      # Start development server (http://localhost:4321)
npm run build    # Production build (output to dist/)
npm run preview  # Preview production build locally
```

**Note:** No test framework is currently configured. If tests are added, document single-test commands here.

## Stack

- **Framework**: Astro 5 with static site generation
- **UI**: React 18 (for interactive components)
- **Styling**: Tailwind CSS 3 with @tailwindcss/typography
- **Type System**: TypeScript in strict mode (extends `astro/tsconfigs/strict`)
- **UI Components**: shadcn/ui pattern with class-variance-authority (cva)
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/       # Astro (.astro) and React (.tsx) components
│   └── ui/          # shadcn/ui-style components (button, etc.)
├── config/          # App configuration (navigation.ts)
├── content/         # Astro Content Collections (work, writing, definitions, ladders)
├── layouts/         # Page layouts (Layout.astro)
├── lib/             # Utilities (utils.ts, navigation.ts)
├── pages/           # File-based routing
├── styles/          # Global CSS (globals.css)
└── themes/          # Shiki themes for syntax highlighting
```

## Code Style

### Imports
- Use `@/` path aliases for all src imports:
  ```typescript
  import { cn } from "@/lib/utils";
  import { Button } from "@/components/ui/button";
  import Layout from "@/layouts/Layout.astro";
  ```
- Path aliases configured in `tsconfig.json`: `@/*`, `@/components/*`, `@/lib/*`, `@/styles/*`

### Components
- **Astro components** (`.astro`): Pages, layouts, static components
- **React components** (`.tsx`): Interactive UI, client-side behavior
- Use `client:load` directive for React components that need hydration
- Naming: PascalCase for component files and exports

### TypeScript
- Strict mode enabled - no `any` types without justification
- Define interfaces for component props:
  ```typescript
  interface Props {
    title: string;
    description?: string;
  }
  ```
- Content schemas defined in `src/content/config.ts` using Zod

### Styling
- Use Tailwind utility classes as primary styling method
- Use `cn()` utility from `@/lib/utils` for conditional class merging:
  ```typescript
  import { cn } from "@/lib/utils";
  cn("base-class", condition && "conditional-class", className)
  ```
- Custom colors defined in `tailwind.config.mjs` - prefer semantic names
- CSS custom properties available in `globals.css` for runtime theming

### Naming Conventions
- **Components**: PascalCase (`Logo.tsx`, `Navigation.astro`)
- **Utilities/functions**: camelCase (`getCollection`, `initNavigation`)
- **CSS classes**: kebab-case (`grid-container`, `off-kilter-1`)
- **Files**: kebab-case for pages/content, PascalCase for components

### Error Handling
- Use TypeScript's strict null checks
- Guard against null DOM elements in client-side code:
  ```typescript
  const element = document.getElementById('id');
  if (!element) return;
  ```
- Content collection queries can return empty arrays - handle gracefully

## Brand System

### Colors
| Name    | Hex       | Usage                      |
|---------|-----------|----------------------------|
| Primary | `#ffd60a` | Yellow - main brand color  |
| Accent  | `#f97316` | Orange - CTAs, highlights  |
| Ink     | `#0b0e14` | Black - text, content      |
| Paper   | `#f7f5f2` | Cream - backgrounds        |
| Link    | `#0f766e` | Teal - links only          |

Use Tailwind classes: `bg-primary-400`, `text-accent-500`, `bg-paper`, `text-ink`, `text-link-600`

### Typography
- Font family: Manrope (loaded via Google Fonts in globals.css)
- Use `font-sans` (Manrope) or `font-display` (also Manrope)

### Brand Elements
- **Off-kilter rotations**: `off-kilter-1`, `off-kilter-neg-1`, `off-kilter-0-5`, `off-kilter-neg-0-5`
- **Grid container**: `grid-container` class for consistent max-width and padding
- **Logo components**: `Logo`, `LogoWide`, `LogoSquare`, `SloppySun` in `src/components/Logo.tsx`

## Accessibility Requirements

### Required
- Skip links in layouts (already in Layout.astro)
- Proper heading hierarchy (h1 -> h2 -> h3, no skipping)
- Focus states: `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`
- `prefers-reduced-motion` support for all animations
- Screen reader text: `<span class="sr-only">` for icon-only buttons
- External links: `rel="noopener noreferrer"` and indicate new tab

### Link Styling
- Links are underlined by default for WCAG 1.4.1 compliance
- Use `no-underline` class for navigation/card links
- Ensure 4.5:1 color contrast ratio for text

### ARIA
- Navigation landmarks with `aria-label`
- Mobile menu: `aria-expanded`, `aria-controls`, `aria-hidden`
- Current page: `aria-current="page"`

## Content Collections

Schemas defined in `src/content/config.ts`:

### `work` (Case Studies)
```typescript
{ title, client, description, engagement, duration, status?, featured, publishedAt, modifiedAt?, tags, results? }
```

### `writing` (Articles)
```typescript
{ title, description, publishedAt, modifiedAt?, type, featured, tags, external, externalUrl? }
```

### `definitions` (Glossary)
```typescript
{ term, shortDefinition, relatedTerms }
```

### `ladders` (Tools/Patterns)
```typescript
{ title, description, capabilities, featured, tags, publishedAt, modifiedAt? }
```

## UI Component Patterns

### Button Component
Located at `src/components/ui/button.tsx`. Uses cva for variants:
- Variants: `default`, `secondary`, `accent`, `destructive`, `outline`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `xl`, `icon`

```tsx
import { Button } from "@/components/ui/button";
<Button variant="accent" size="lg">Click me</Button>
```

### Common Tailwind Classes
```css
.grid-container    /* max-w-6xl mx-auto px-6 lg:px-8 */
.card-base         /* rounded-lg border bg-card shadow-sm */
.btn-base          /* inline-flex items-center justify-center... */
.input-base        /* flex h-10 w-full rounded-md border... */
```

## Common Patterns

### Astro Page with Content Collection
```astro
---
import Layout from '@/layouts/Layout.astro';
import { getCollection } from 'astro:content';

const posts = await getCollection('writing');
const sorted = posts.sort((a, b) => 
  b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
);
---
<Layout title="Writing">
  {sorted.map(post => (
    <a href={`/writing/${post.slug}`}>{post.data.title}</a>
  ))}
</Layout>
```

### React Component with Client Hydration
```astro
---
import { MyComponent } from '@/components/MyComponent';
---
<MyComponent prop="value" client:load />
```

### Conditional Styling
```tsx
<div className={cn(
  "base-styles",
  isActive && "active-styles",
  className
)}>
```

## Don'ts

- Don't use inline styles - use Tailwind classes
- Don't skip heading levels for styling purposes
- Don't use color alone to convey information
- Don't add animations without `prefers-reduced-motion` fallbacks
- Don't hardcode colors - use Tailwind semantic classes
- Don't import from `react` in `.astro` files - use `client:` directives
