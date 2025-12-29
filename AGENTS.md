# AGENTS.md

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build

## Stack
Astro 5 + React + Tailwind CSS + TypeScript (strict mode)

## Code Style
- **Imports**: Use `@/` path aliases (e.g., `@/lib/utils`, `@/components/*`)
- **Components**: React components in `.tsx`, Astro pages/layouts in `.astro`
- **Styling**: Tailwind utility classes; custom colors defined in `tailwind.config.mjs`
- **Types**: Strict TypeScript; content schemas in `src/content/config.ts` using Zod
- **Naming**: PascalCase for components, camelCase for functions/variables
- **CSS**: Use `cn()` utility from `@/lib/utils` for conditional class merging

## Brand Colors
Primary: yellow (#ffd60a), Accent: orange (#f97316), Ink: black (#0b0e14), Paper: cream (#f7f5f2), Links: teal (#0f766e)

## Accessibility
Always include skip links, proper focus states, and `prefers-reduced-motion` support for animations.
