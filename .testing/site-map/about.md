# Page: About

**Route**: `/about`
**Title**: `About | Enablement Engineering`
**Layout**: `Layout.astro`
**Source**: `src/pages/about.astro`

## Sections

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| Header | Introduction | Author photo, name, tagline |
| Background | Professional credibility | Deque experience, expertise areas |
| Philosophy | Brand principles | 3 principle cards (Ladders, Mirrors, Glass box) |
| Personal | Human connection | Location, personal details |
| CTA | Conversion | "Start a Conversation" link |

## Critical Elements

```yaml
author_photo:
  alt: "Dylan Isaac"

headline: "About"

background:
  employer_link:
    text: "Lead AI Engineer at Deque Systems"
    # Note: Check if this should be a link

philosophy_principles:
  - title: "Ladders, not walls."
    description: "Technology should extend what people can do, not create dependency."
  - title: "Mirrors, not slot machines."
    description: "Systems should reflect user intention, not capture attention."
  - title: "Glass box, not black box."
    description: "Reasoning should be visible and auditable, especially when compliance matters."

personal:
  location: "Buffalo, NY"
  partner: "Kaitlin"
  pets: ["dog Basil", "kitten Corni"]
  hobby: "bonsai"

cta:
  text: "Start a Conversation"
  href: "/contact"
```

## Test Cases

- [ ] Author photo loads with proper dimensions
- [ ] Heading hierarchy: H1 > H2 > H3 (no skips)
- [ ] Philosophy cards maintain visual alignment
- [ ] CTA link navigates to contact page
- [ ] Personal section humanizes without oversharing
