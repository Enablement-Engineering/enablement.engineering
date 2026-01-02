# Enablement Engineering

The website for [enablement.engineering](https://enablement.engineering) — Dylan Isaac's consultancy building AI systems that extend human capability without hiding their reasoning.

## About

Enablement Engineering focuses on glass-box AI: orchestration design, accessibility systems, and agentic infrastructure for organizations where compliance isn't optional.

Core philosophy:
- **Ladders, not walls** — Technology should extend what people can do, not create dependency
- **Mirrors, not slot machines** — Systems should reflect user intention, not capture attention
- **Glass box, not black box** — Reasoning should be visible and auditable

## Site Structure

```
src/
├── content/
│   ├── writing/        # Essays and articles
│   ├── work/           # Case studies
│   ├── ladders/        # Reusable AI patterns and procedures
│   └── definitions/    # Glossary of key terms
├── pages/
│   ├── index.astro     # Homepage
│   ├── about.astro     # About page
│   ├── services.astro  # Service offerings
│   ├── approach.astro  # Methodology
│   └── contact.astro   # Contact page
└── layouts/
    └── Layout.astro    # Base layout
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `localhost:4321`.

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [MDX](https://mdxjs.com) — Content authoring

## License

Content © Dylan Isaac. All rights reserved.
