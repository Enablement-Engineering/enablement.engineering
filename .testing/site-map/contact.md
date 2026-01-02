# Page: Contact

**Route**: `/contact`
**Title**: `Contact | Enablement Engineering`
**Layout**: `Layout.astro`
**Source**: `src/pages/contact.astro`

## Sections

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| Header | Page introduction | H1, description |
| Contact Methods | Primary action | Email link, LinkedIn link |
| Expectations | Process clarity | 4-item list |
| FAQ | Objection handling | 6 Q&A pairs |

## Critical Elements

```yaml
headline: "Start the Conversation"
subhead: "Get In Touch"

contact_methods:
  email:
    text: "hello@enablement.engineering"
    href: "mailto:hello@enablement.engineering"
  linkedin:
    text: "LinkedIn"
    href: "https://www.linkedin.com/in/dylan--isaac/"
    external: true

response_time: "I typically respond within 24 hours."

expectations:
  - "Initial conversation to understand your needs"
  - "Collaborative scoping and proposal development"
  - "Transparent timeline and milestone planning"
  - "Ongoing communication throughout the engagement"

faq:
  - q: "What size teams do you work with?"
  - q: "How long do engagements typically last?"
  - q: "Do you provide ongoing support?"
  - q: "What technologies do you specialize in?"
  - q: "Can you work with our existing tools?"
  - q: "What industries do you serve?"
```

## Design Notes

**Intentional Form Absence**: This page uses mailto instead of a form. This is a deliberate choice (per git history: "refactor(contact): replace form with mailto").

## Test Cases

- [ ] Email link opens default mail client
- [ ] LinkedIn link opens in new tab
- [ ] External link indicator present for LinkedIn
- [ ] FAQ answers visible and accessible
- [ ] Page provides sufficient context before asking for contact
- [ ] Response time expectation manages user expectations
