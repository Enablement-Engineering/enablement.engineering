# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build
npm run preview  # Preview production build
```

## Stack

Astro 5 + React + Tailwind CSS + TypeScript (strict mode)

## Architecture

### Content Collections (src/content/)
Content is managed through Astro's content collections with Zod schemas defined in `src/content/config.ts`:

- **writing/** - Essays and articles (`type: essay | case-study | prompt-lab | note`, supports `draft` and `featured`)
- **work/** - Case studies with client info and results metrics
- **ladders/** - Reusable AI patterns/procedures with capabilities lists (supports `draft` and `featured`)
- **definitions/** - Glossary terms with related terms (supports `draft`)

Each collection has typed frontmatter - check `config.ts` for required fields before creating content.

**Featured Content Policy:** Only ONE item per collection should be `featured: true` at a time. Currently featured: Alt Text Generation (ladders).

**Draft Content:** Items with `draft: true` are visible in dev mode with a yellow badge but hidden in production builds.

### Layout System
Single layout at `src/layouts/Layout.astro` wraps all pages with:
- Skip links and accessibility features
- Navigation from `src/config/navigation.ts`
- 12-column grid container (`.grid-container` class)
- Optional design grid overlay via `showGrid` prop

### Component Types
- **React (.tsx)**: Interactive components, Logo
- **Astro (.astro)**: Pages, layouts, Navigation, Footer
- **UI components**: `src/components/ui/` (button uses CVA patterns)

## Code Style

- **Imports**: Use `@/` path aliases (`@/lib/utils`, `@/components/*`)
- **Styling**: Tailwind utilities; use `cn()` from `@/lib/utils` for conditional class merging
- **Types**: Strict TypeScript; content schemas use Zod

## Brand Colors

| Name    | Value   | Usage                           |
|---------|---------|----------------------------------|
| primary | #ffd60a | Yellow - main brand color        |
| accent  | #f97316 | Orange - accents and focus rings |
| ink     | #0b0e14 | Black - primary text             |
| paper   | #f7f5f2 | Cream - background               |
| link    | #0f766e | Teal - links only                |

Custom colors defined in `tailwind.config.mjs` include WCAG AA-compliant variants (600+ shades have 4.5:1+ contrast on paper background).

## Accessibility Requirements

- Skip links included in layout
- Focus states: `ring-2 ring-accent ring-offset-2`
- Links are underlined by default (WCAG 1.4.1); navigation/buttons use `.no-underline`
- All animations respect `prefers-reduced-motion`
- Off-kilter rotation classes (`.off-kilter-1`, etc.) straighten on hover/focus

## Custom Utilities

### Grid System
- `.grid-container` - Max-width 6xl centered container with responsive padding
- `.grid-12` - 12-column grid with gap-6

### Off-Kilter Rotations
Brand-specific slight rotation classes that straighten on interaction:
- `.off-kilter-1` / `.off-kilter-neg-1` (1deg)
- `.off-kilter-0-5` / `.off-kilter-neg-0-5` (0.5deg)

### Service/Process Grids
CSS handles automatic square-to-circle morphing based on row position. Use `.service-grid` with `.service-card` and `.service-icon` classes.
