# Page: Home

**Route**: `/`
**Title**: `Enablement Engineering | Dylan Isaac`
**Layout**: `Layout.astro`
**Source**: `src/pages/index.astro`

## Sections

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| Hero | Value proposition | H1 headline, CTA link to `/approach` |
| Client Logo | Social proof | UIC logo image |
| Services Preview | Capability overview | 3 service cards with inline definition links |
| Featured Work | Portfolio highlight | Link to `/work/uic-equalify` case study |
| Latest Writing | Content discovery | 2 article cards, "View all" link |
| CTA | Conversion | "Book a discovery call" + "View services" |

## Critical Elements

```yaml
hero:
  headline: "AI systems that extend human capability."
  cta:
    text: "Our Approach"
    href: "/approach"

client_logo:
  alt: "University of Illinois Chicago"

inline_definitions:
  - text: "glass-box"
    href: "/definitions/glass-box"

featured_work:
  title: "Escaping to Semantic Freedom"
  href: "/work/uic-equalify"

latest_writing:
  - href: "/writing/what-is-enablement-engineering"
  - href: "/writing/alt-text-context-engineering"

cta_section:
  primary:
    text: "Book a discovery call"
    href: "/contact"
  secondary:
    text: "View services"
    href: "/services"
```

## Test Cases

- [ ] Hero headline renders above fold
- [ ] All internal links resolve (no 404)
- [ ] Client logo has proper alt text
- [ ] Definition link opens definition page
- [ ] Featured work card links to case study
- [ ] CTA buttons have proper focus states
