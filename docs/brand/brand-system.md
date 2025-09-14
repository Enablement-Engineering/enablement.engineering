---
title: Enablement Engineering – Brand System (Catalyst v1)
---

## Visual Identity

- Typography: Option A
  - Headline/Display: Oswald
  - Text/UI: Inter
  - Code: IBM Plex Mono

- Color (Catalyst palette)
  - Ink: #0B0E14
  - Paper: #F7F5F2
  - Teal: #0F766E
  - Orange (Primary Accent): #F97316
  - Link: #2563EB
  - Focus: #FFD60A

- Grid
  - 12-column fluid grid (always visible, subtle)
  - Column lines via CSS overlay: linear-gradient, 1px lines, 8% opacity

- Motion
  - Subtle only, respect prefers-reduced-motion
  - No parallax; focus-visible rings only

## Accessibility

- Targets: WCAG 2.2 AA; Contrast theme for AAA
- Keyboard-first; skip links; landmarks; visible focus
- Links not color-only; underline on hover/focus

### Contrast Matrix (Catalyst v1)

These use your measured values. Use only the PASS pairings for body/small text; reserve risky pairs for large display or non-text UI.

#### Ink #0B0E14 as text over…
| Foreground | Background | Ratio | Small Text | Large Text |
|---|---|---:|---|---|
| #0B0E14 | #F7F5F2 (Paper) | 17.75 | AAA | AAA |
| #0B0E14 | #0F766E (Teal) | 3.53 | Fail | Fail |
| #0B0E14 | #F97316 (Orange) | 6.89 | Fail | AAA |
| #0B0E14 | #2563EB (Blue) | 3.74 | Fail | Fail |
| #0B0E14 | #FFD60A (Yellow) | 13.68 | AAA | AAA |

#### Paper #F7F5F2 as text over…
| Foreground | Background | Ratio | Small Text | Large Text |
|---|---|---:|---|---|
| #F7F5F2 | #0B0E14 (Ink) | 17.75 | AAA | AAA |
| #F7F5F2 | #0F766E (Teal) | 5.03 | Fail | AAA |
| #F7F5F2 | #F97316 (Orange) | 2.58 | Fail | Fail |
| #F7F5F2 | #2563EB (Blue) | 4.75 | Fail | AAA |
| #F7F5F2 | #FFD60A (Yellow) | 1.3 | Fail | Fail |

#### Teal #0F766E against…
| Foreground | Background | Ratio | Small Text | Large Text |
|---|---|---:|---|---|
| #0F766E | #F7F5F2 (Paper) | 5.03 | Fail | AAA |
| #F7F5F2 (Paper) | #0F766E | 5.03 | Fail | AAA |

#### Orange #F97316 against…
| Foreground | Background | Ratio | Small Text | Large Text |
|---|---|---:|---|---|
| #F97316 | #0B0E14 (Ink) | 6.89 | Fail | AAA |
| #0B0E14 (Ink) | #F97316 | 6.89 | Fail | AAA |
| #F97316 | #F7F5F2 (Paper) | 2.58 | Fail | Fail |

#### Blue #2563EB against…
| Foreground | Background | Ratio | Small Text | Large Text |
|---|---|---:|---|---|
| #2563EB | #F7F5F2 (Paper) | 4.75 | Fail | AAA |
| #F7F5F2 (Paper) | #2563EB | 4.75 | Fail | AAA |

#### Yellow #FFD60A against…
| Foreground | Background | Ratio | Small Text | Large Text |
|---|---|---:|---|---|
| #FFD60A | #0B0E14 (Ink) | 13.68 | AAA | AAA |
| #0B0E14 (Ink) | #FFD60A | 13.68 | AAA | AAA |

Notes:
- Use Blue for links but prefer a darker variant for body AA.
- Reserve Orange primarily for borders, underlines, icons, or large-text CTAs.
- Focus ring Yellow works on both Paper and Ink.

## Token Model (CSS variables)

```
:root[data-theme="catalyst"] {
  --color-ink:#0B0E14;
  --color-paper:#F7F5F2;
  --color-accent:#F97316;
  --color-teal:#0F766E;
  --color-link:#1D4ED8; /* Blue-700 for stronger AA */
  --color-focus:#FFD60A;
  --surface-0:var(--color-paper);
  --surface-1:#F2F0EC;
  --text:var(--color-ink);
  --border: #E5E7EB;
}
```

## Semantic Token Roles

Avoid raw colors in components. Use roles that can remap per theme:

| Role | Token |
|---|---|
| text-primary | var(--text) |
| text-secondary | var(--muted) |
| bg-primary | var(--surface-0) |
| bg-secondary | var(--surface-1) |
| link | var(--color-link) |
| focus-ring | var(--color-focus) |
| border | var(--border) |
| cta-bg (AA safe) | var(--color-teal) |
| cta-text | #F7F5F2 |
| accent-ornament | var(--color-accent) |
| gridline | rgba(11,14,20,0.06) |

Guidance:
- Links use role `link`, not raw hex; underline on hover/focus.
- `cta-bg/text` guarantees AA without relying on Orange.
- Orange is reserved for ornamentation, indicators, large display text.

## Dark Mode (preview roles)

- Invert surfaces; keep `text-primary` high contrast.
- Link: lighten to #60A5FA for AA on dark.
- Gridline: use rgba(247,245,242,0.06).
- Keep focus ring Yellow.

## Usage Notes

- Headings use Oswald; body uses Inter; code uses IBM Plex Mono
- Orange used for CTAs and accents; ensure text contrast ≥ 4.5:1
- Grid overlay is decorative; ensure it does not reduce contrast below AA

## TODO (next)

- Grant/Dark/Contrast themes
- Shadcn UI primitives (Button, Card, Badge) bridged into Astro via React
- Duotone/Halftone media presets


