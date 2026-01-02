# Page: Services

**Route**: `/services`
**Title**: `Services | Enablement Engineering`
**Layout**: `Layout.astro`
**Source**: `src/pages/services.astro`

## Sections

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| Header | Page introduction | H1, description |
| Service Tiers | Offering details | 4 service cards |
| Not For | Qualification | 4 anti-persona cards |
| FAQ | Objection handling | 5 Q&A pairs |
| CTA | Conversion | "Start a Conversation" link |

## Critical Elements

```yaml
headline: "Ways to Work Together"
description: "From a focused diagnostic to ongoing partnership..."

service_tiers:
  - badge: "Starting Point"
    title: "Agent Discovery Sprint"
    duration: "2-Week Engagement"
    description: "Find out what your agents could do before committing to building them."
    includes:
      - "Current workflow audit"
      - "Agent architecture proposal"
      - "Working prototype of one custom agent"
      - "Documented system prompt + tool configuration"
      - "Recommendation report for next steps"
    best_for:
      - "Organizations curious about agentic systems"
      - "Teams needing to prove value before budget approval"
      - "Leaders wanting to understand what's possible"

  - badge: "Most Popular"
    title: "Custom Agent Build"
    duration: "4-6 Week Engagement"
    description: "Ship your first production agentic system..."
    # ... full details in source

  - badge: "Ongoing Partnership"
    title: "Agentic Infrastructure Partnership"
    duration: "Quarterly Retainer"
    # ... full details in source

  - badge: "Individual Focus"
    title: "Personal Automation Tailor"
    duration: "2-Week Engagement"
    # ... full details in source

not_for:
  - title: "Off-the-shelf AI tools"
  - title: "Outsourced thinking"
  - title: "24/7 enterprise support"
  - title: "The lowest-cost option"

faq:
  - q: "How do I know which service is right?"
  - q: "What makes this different from other AI consulting?"
  - q: "Do you work with accessibility specifically?"
  - q: "What happens after the engagement?"

cta:
  text: "Start a Conversation"
  href: "/contact"
```

## Test Cases

- [ ] All 4 service tiers render with consistent layout
- [ ] "Most Popular" badge visually distinct
- [ ] Include lists are accessible (proper list semantics)
- [ ] Not For section maintains readability
- [ ] FAQ answers are visible (not collapsed accordions)
- [ ] Long page: consider anchor navigation or sticky TOC
- [ ] CTA visible after scrolling entire page
