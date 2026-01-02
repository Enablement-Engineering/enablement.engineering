# Page: Writing Index

**Route**: `/writing`
**Title**: `Writing | Enablement Engineering`
**Layout**: `Layout.astro`
**Source**: `src/pages/writing/index.astro`

## Sections

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| Header | Page introduction | H1, description |
| Essays | Long-form content | Article cards with tags and dates |
| Prompt Lab | Technical demonstrations | Prompt demonstration cards |
| Newsletter | List building | CTA (currently placeholder) |

## Critical Elements

```yaml
headline: "Writing"
description: "Essays exploring enablement philosophy, case studies demonstrating the approach, and prompt demonstrations..."

essays:
  - title: "What is Enablement Engineering?"
    href: "/writing/what-is-enablement-engineering"
    tags: ["enablement-engineering", "philosophy", "agentic-systems"]
    date: "December 22, 2024"
  - title: "Reframing Accessibility: AI as an Epistemological Translator"
    href: "/writing/epistemological-translator"
    tags: ["accessibility", "epistemology"]
    date: "August 31, 2024"
  - title: "Building Ladders: Extending Human Agency with AI"
    href: "/writing/building-ladders"
    tags: ["philosophy", "enablement"]
    date: "August 14, 2024"

prompt_lab:
  - title: "Context Engineering for Alt-Text: An Annotated Prompt"
    href: "/writing/alt-text-context-engineering"
    type: "Prompt Demonstration"
    date: "October 14, 2024"

newsletter:
  status: "coming_soon"
  fallback_cta:
    text: "reach out directly"
    href: "/contact"
```

## Test Cases

- [ ] Articles sorted by date (newest first)
- [ ] All article links resolve
- [ ] Tags display consistently
- [ ] Date format consistent across articles
- [ ] Prompt Lab section visually distinct from Essays
- [ ] Newsletter placeholder gracefully degrades
