# Page: Work Index

**Route**: `/work`
**Title**: `Work | Enablement Engineering`
**Layout**: `Layout.astro`
**Source**: `src/pages/work/index.astro`

## Sections

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| Header | Page introduction | H1, description |
| Featured Project | Flagship case study | Large card with metrics |
| Additional Engagements | Credibility | Simple text list |
| CTA | Conversion | "Start a Conversation" link |

## Critical Elements

```yaml
headline: "Selected Work"
description: "Projects that demonstrate enablement engineering in practice..."

featured_project:
  badge: "Featured Project"
  title: "Escaping to Semantic Freedom"
  client: "University of Illinois Chicago"
  status: "Ongoing (beta release January 2026)"
  description: "Transforming inaccessible academic PDFs into adaptive, semantic web experiences at scale."
  href: "/work/uic-equalify"
  metrics:
    - label: "Cost reduction target"
      value: "95-99% vs manual remediation"
    - label: "Output format"
      value: "Permanent, semantic MDX"
    - label: "Integration"
      value: "Canvas LMS native"
  tags: ["accessibility", "multi-agent", "ai-orchestration", "higher-education", "pdf-transformation"]

additional_engagements:
  - client: "Scribely"
    description: "Context engineering consultation for AI-powered alt-text generation"
  - client: "SRI International"
    description: "NSF Advisory Board for student-AI interaction safety research"
  - client: "CSUN 2026"
    description: "Presenting 'Escaping to Semantic Freedom' at premier accessibility conference"

cta:
  text: "Start a Conversation"
  href: "/contact"
```

## Test Cases

- [ ] Featured project card displays metrics correctly
- [ ] Tags render as styled badges
- [ ] Case study link navigates to detail page
- [ ] Additional engagements list is accessible
- [ ] CTA has proper focus/hover states
