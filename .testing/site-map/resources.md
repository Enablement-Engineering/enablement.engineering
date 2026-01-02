# Page: Resources Index

**Route**: `/resources`
**Title**: `Resources | Enablement Engineering`
**Layout**: `Layout.astro`
**Source**: `src/pages/resources/index.astro`

## Sections

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| Header | Page introduction | H1, description |
| Tab Filter | Content filtering | Tablist with 3 tabs |
| Resource Grid | Content display | Resource cards by type |
| Empty State | Edge case | Message when no results |
| CTA | Conversion | "View Services" + "Get in Touch" |

## Critical Elements

```yaml
headline: "Resources"
description: "Definitions, patterns, and tools that encode expertise into reusable knowledge..."

tabs:
  - label: "All Types"
    filter: null
  - label: "Definitions"
    filter: "definition"
  - label: "Ladders"
    filter: "ladder"

resources:
  definitions:
    - title: "Building Ladders"
      href: "/definitions/building-ladders"
      type: "Definition"
    - title: "Context Engineering"
      href: "/definitions/context-engineering"
      type: "Definition"
    - title: "Enablement Engineering"
      href: "/definitions/enablement-engineering"
      type: "Definition"
    - title: "Glass-Box"
      href: "/definitions/glass-box"
      type: "Definition"
  ladders: []  # Currently empty

empty_state:
  message: "No resources found for this filter."
  # BUG: This message appears even when resources are visible

cta:
  primary:
    text: "View Services"
    href: "/services"
  secondary:
    text: "Get in Touch"
    href: "/contact"
```

## Known Issues

### BUG: Empty State Visibility
The "No resources found for this filter." message is visible even when the "Definitions" tab shows content. This appears to be a state management issue where the Ladders empty state persists across tab switches.

**Suspected cause**: Conditional rendering not properly scoped to active tab.

## Test Cases

- [ ] Tab switching updates displayed resources
- [ ] Active tab has visual indicator
- [ ] Tab keyboard navigation (arrow keys)
- [ ] Empty state ONLY shows when genuinely empty
- [ ] Resource cards link to correct detail pages
- [ ] Type badges display correctly
