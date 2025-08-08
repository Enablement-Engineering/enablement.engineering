# MVP Architecture

## Overview

The enablement.engineering MVP is a minimal, accessible blog that demonstrates AI as a translation layer between human intention and computational capability.

## Core Architecture

### Tech Stack
- **Framework**: Astro 5.x
- **Styling**: TBD - Exploring the tension between vanilla CSS and utility-first
- **Content**: Markdown with frontmatter
- **Build**: Static site generation
- **Deployment**: Netlify/Vercel (zero-config)

### Project Structure

```
enablement.engineering/
├── src/
│   ├── components/
│   │   ├── BaseHead.astro      # Meta tags, fonts, theme setup
│   │   ├── Header.astro        # Site header with nav
│   │   ├── Footer.astro        # Minimal footer
│   │   ├── ThemeToggle.astro   # Light/dark mode switch
│   │   └── PostCard.astro      # Post preview component
│   ├── content/
│   │   ├── config.ts           # Content collection schema
│   │   └── posts/              # Markdown blog posts
│   │       └── *.md
│   ├── layouts/
│   │   ├── Base.astro          # Base HTML structure
│   │   └── Post.astro          # Blog post layout
│   ├── pages/
│   │   ├── index.astro         # Homepage with recent posts
│   │   ├── posts/
│   │   │   └── [...slug].astro # Dynamic post routes
│   │   └── about.astro         # About page
│   └── styles/
│       └── global.css          # Global styles & theme
├── public/
│   └── favicon.svg             # Accessible favicon
└── astro.config.mjs            # Astro configuration

```

## MVP Features

### Phase 1: Foundation
- [ ] Project setup with Astro
- [ ] Semantic HTML structure that works without CSS
- [ ] Exploration: CSS approach (vanilla vs Tailwind vs CSS-in-JS)
- [ ] Basic theming system (light/dark/user)
- [ ] Core pages: home, post, about

### Phase 2: Content & Philosophy
- [ ] Content collection setup
- [ ] Initial posts exploring core themes:
  - AI as translation layer
  - The tension between tools and principles
  - What "accessible" really means in 2024
- [ ] Experiment: Can content be truly presentation-agnostic?

### Phase 3: Enhancement & Experimentation
- [ ] Accessibility beyond compliance
- [ ] Performance as accessibility
- [ ] Exploration: User-customizable themes?
- [ ] Meta: Document the building process as content

## Design Philosophy

### The Styling Question

We're exploring a fundamental tension:
- **Vanilla CSS**: Full understanding, no dependencies, but more work
- **Tailwind**: AI-friendly, consistent, but adds complexity
- **Hybrid**: Modern CSS with utility helpers for common patterns

The decision itself becomes content - exploring how tool choice reflects values.

### Semantic First

Regardless of styling approach:
1. HTML must work without CSS
2. Meaning encoded in structure, not class names
3. Progressive enhancement from a solid foundation

## Accessibility Requirements

Going beyond compliance to true enablement:
- Works for everyone, not just passes tests
- Performance as an accessibility feature
- Respects user preferences deeply
- Clear mental models

## Content as Exploration

The blog becomes a laboratory for its own ideas:
- Document the building process
- Explore tensions between ideals and pragmatism
- Test theories about AI-assisted development
- Question our own assumptions

## Success Metrics

Less specific, more philosophical:
- Does it enable understanding?
- Can others learn from the approach?
- Does it practice what it preaches?
- Is it truly minimal or just simple?

## Open Questions

1. **Styling**: How do we balance developer experience with user experience?
2. **Theming**: Could users bring their own styles entirely?
3. **Content**: How separate can content and presentation really be?
4. **Process**: Should the development process be transparent/documented?

## Philosophy in Practice

Every technical decision becomes an opportunity to explore:
- Why do we default to certain tools?
- What does "accessibility" mean beyond compliance?
- How can AI help without compromising understanding?
- What would true user agency look like?