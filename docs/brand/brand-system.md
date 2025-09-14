---
title: Enablement Engineering – Brand System
---

## Brand Essence

**Enablement Engineering** empowers growth through structured progression. The ladder symbolizes methodical advancement, while the warm sun elements represent energy, optimism, and the bright outcomes of capability building.

## Visual Identity

### Color System

#### Semantic Color Tokens
- **Primary**: `#FFD60A` (Yellow) - Main brand color, primary CTAs, hero sections
- **Secondary**: `#0B0E14` (Ink) - Primary text, borders, main content
- **Accent**: `#F97316` (Orange) - Accent elements, highlights, progress indicators
- **Link**: `#0F766E` (Teal) - Links, navigation, interactive elements
- **Neutral**:
  - `#F7F5F2` (Paper) - Backgrounds, cards, secondary surfaces

#### Tailwind Integration
```
primary: { 400: '#FFD60A' }
secondary: { 900: '#0B0E14' }
accent: { 500: '#F97316' }
link: { 600: '#0F766E' }
neutral: { 50: '#F7F5F2' }
```

### Typography

#### Primary Typeface: Manrope
- **Logo/Brand**: Manrope 600 (Semi-Bold)
- **Headlines**: Manrope 700 (Bold)
- **Subheadings**: Manrope 600 (Semi-Bold)
- **Body**: Manrope 400 (Regular)
- **Captions**: Manrope 400 (Regular, smaller scale)

#### Type Scale (Tailwind Classes)
- **Display**: `text-6xl` (60px) - Hero headlines
- **H1**: `text-4xl` (36px) - Page titles
- **H2**: `text-2xl` (24px) - Section headers
- **H3**: `text-xl` (20px) - Subsection headers
- **Body**: `text-base` (16px) - Primary reading
- **Small**: `text-sm` (14px) - Captions, metadata

### Layout System

#### Grid Foundation
- **12-column fluid grid** with subtle visual indicators
- **Container max-width**: `max-w-6xl` (1152px)
- **Breakpoints**: Tailwind defaults (sm, md, lg, xl, 2xl)
- **Gutter**: `gap-6` (24px) standard, `gap-4` (16px) compact

#### "Off-Kilter" Principle
- **Subtle rotation**: `rotate-1` (1°) on alternating content rows
- **Organic variation**: `rotate-[-0.5deg]` for counterbalance
- **Constraint**: Never exceed `rotate-2` (2°) for readability
- **Application**: Hero sections, feature cards, testimonial blocks

### Logo System

#### Primary Logo
- **Ladder + Sun iconography** with "Enablement Engineering" wordmark
- **Minimum size**: 120px width for horizontal layout
- **Clear space**: 2x the height of the ladder element on all sides
- **Formats**: SVG primary, PNG fallback

#### Logo Variations
- **Horizontal**: Full logo with text (primary usage)
- **Stacked**: Logo above text (square applications)
- **Icon only**: Ladder symbol (favicons, app icons)
- **Monochrome**: Single color versions for limited color contexts

### Component Guidelines (shadcn/ui Integration)

#### Button Hierarchy
- **Primary**: `bg-primary-400 text-secondary-900` - Main actions (Yellow background, black text)
- **Secondary**: `bg-secondary-900 text-neutral-50` - Supporting actions (Black background, light text)
- **Accent**: `bg-accent-500 text-white` - Highlights/CTAs (Orange background, white text)
- **Outline**: `border border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-neutral-50` - Outline buttons
- **Link**: `text-link underline hover:underline` - Teal for inline text links only

#### Card Components
- **Base**: `bg-neutral-50 border border-neutral-200 rounded-lg`
- **Elevated**: Add `shadow-md` for prominence
- **Interactive**: `hover:shadow-lg transition-shadow`
- **Off-kilter**: Randomly apply `rotate-1` or `rotate-[-1deg]` to 30% of cards

#### Form Elements
- **Inputs**: Paper background, ink text, orange focus ring
- **Focus states**: `focus:ring-2 focus:ring-accent-500`
- **Error states**: Use semantic red, not brand colors
- **Success states**: `bg-primary-50 border-primary-400`

### Motion & Interaction
- **Easing**: `ease-in-out` for all transitions
- **Duration**: `duration-200` for micro-interactions, `duration-300` for layout changes
- **Hover states**: Subtle scale `hover:scale-105` on cards/buttons
- **Focus rings**: Always visible, `ring-2 ring-accent-500`
- **Reduced motion**: Respect `prefers-reduced-motion: reduce`

#### Animation Patterns
- **Card entrance**: `animate-fade-in-up` with stagger
- **Button interactions**: Scale + shadow combination
- **Off-kilter reveal**: Gentle rotation on scroll into view
- **Loading states**: Subtle pulse, no spinners

### Iconography & Imagery

#### Icon Style
- **Line style**: 2px stroke weight, rounded caps
- **Filled variants**: Use sparingly for active states
- **Size system**: 16px, 20px, 24px, 32px (Tailwind: w-4, w-5, w-6, w-8)
- **Color**: Inherit text color, orange for interactive states

#### Ladder Motif Integration
- **Navigation breadcrumbs**: Ladder rungs as separators
- **Progress indicators**: Climbing metaphor
- **Step-by-step processes**: Vertical ladder visualization
- **Achievement badges**: Sun elements for completion

#### Photography & Illustration
- **Style**: Clean, bright, human-centered
- **Color treatment**: Warm overlay filter aligning with orange/yellow palette
- **Composition**: Off-kilter crops maintaining 1-2° rotation principle

### Brand Voice & Messaging

#### Tone of Voice
- **Professional yet approachable**: Expert guidance without intimidation
- **Empowering**: Focus on capability building and growth
- **Clear and direct**: No jargon, actionable language
- **Optimistic**: Progress-oriented, solution-focused

#### Key Messaging Themes
- **Structured Growth**: "Methodical advancement through proven systems"
- **Enablement Focus**: "Building capabilities, not just delivering solutions"
- **Human-Centered**: "Technology that amplifies human potential"
- **Results-Oriented**: "Measurable progress through strategic implementation"

### Implementation Guidelines

#### shadcn/ui Component Customization
```typescript
// Example theme configuration
const theme = {
  colors: {
    primary: { DEFAULT: '#FFD60A', foreground: '#0B0E14' },
    secondary: { DEFAULT: '#0B0E14', foreground: '#F7F5F2' },
    accent: { DEFAULT: '#F97316', foreground: '#0B0E14' },
    link: { DEFAULT: '#0F766E', foreground: '#F7F5F2' },
    destructive: { DEFAULT: '#ef4444', foreground: '#ffffff' },
    muted: { DEFAULT: '#F7F5F2', foreground: '#6b7280' },
    background: '#F7F5F2',
    foreground: '#0B0E14',
  }
}
```

#### Layout Patterns
- **Hero sections**: Large typography, subtle off-kilter background elements
- **Feature grids**: 3-column on desktop, alternating rotation on cards
- **Content sections**: Consistent max-width containers with proper spacing
- **Navigation**: Clean, minimal, teal for links and active states

#### Responsive Behavior
- **Mobile**: Maintain rotation effects but reduce intensity
- **Typography scaling**: Fluid between breakpoints using clamp()
- **Grid adaptation**: 12-col → 6-col → 4-col → 1-col progression
- **Touch targets**: Minimum 44px for interactive elements

## Accessibility

- Targets: WCAG 2.2 AA; Contrast theme for AAA
- Keyboard-first; skip links; landmarks; visible focus
- Links not color-only; underline on hover/focus

### Contrast Matrix

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
