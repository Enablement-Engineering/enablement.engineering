---
term: Multidimensional Conversations
shortDefinition: The understanding that user interfaces are parallel conversations happening simultaneously—the same component tells different stories depending on user journey, modality, and goal state.
draft: true
relatedTerms:
  - Building Ladders
  - Epistemological Translation
  - Polysemous Components
---

**Multidimensional Conversations** is a framework for understanding user interfaces not as static arrangements of components, but as dynamic dialogues happening in parallel across multiple dimensions simultaneously.

Every interface element participates in multiple conversations at once. The interface designer isn't creating a single user experience—they're conducting parallel conversations with every possible user modality and goal state, all through the same shared vocabulary of components.

## The Core Insight

Consider a "Submit Order" button on a checkout page.

For a **browsing user**, it signals "this is where the transaction happens"—an action available but not yet taken.

For a **completing user**, it represents a commitment point—the moment where browsing becomes buying.

For a **screen reader user**, it's a landmark in document structure—a way to orient and navigate.

For a **keyboard user**, it's a focusable target in the tab order—reachable or not, visible focus state or not.

Same component. Different conversations. All happening simultaneously.

## Why This Matters

Traditional interface design often optimizes for one primary conversation—usually the visual, mouse-using, completing-a-task user. Other conversations become afterthoughts: "Oh, we should add ARIA labels" or "Don't forget keyboard navigation."

The multidimensional framing inverts this. All conversations are primary. The question isn't "how do we make this accessible?" but "what is this component saying in each conversation it participates in?"

This shift has profound implications:

**Design becomes translation.** The designer's job is ensuring the component says coherent, useful things across all its simultaneous conversations.

**Accessibility becomes coherence.** An accessible interface is one where all the parallel conversations tell consistent, complementary stories.

**Testing becomes conversation auditing.** Does this component say what we intend in each dimension? Are any conversations contradictory or confusing?

## Visual vs. Sequential Information Architecture

Visual interfaces **present relationships in parallel**—like pre-computed joins rendered spatially.

A button's meaning emerges from the intersection of its position (in a form, near related fields), visual weight (size, color, contrast), state indicators (hover, focus), and textual label. All perceived simultaneously as gestalt. High bandwidth supports receiving multiple relationship types in parallel.

Screen reader interfaces **require explicit relationship encoding**—elements encountered through navigation that users piece together into understanding. The user builds the relational model through exploration: "this is a button, it's inside a form, the form is for checkout, so this button probably submits the order."

The relationships that visual users perceive spatially must be encoded explicitly through semantic HTML and ARIA attributes.

This reframes accessible markup not as "adding labels for compliance" but as **explicitly encoding relationships that visual presentation encodes implicitly**.

## Implicit Visual Relationships

Visual design encodes relationships that designers often don't consciously realize they're communicating:

| Visual Pattern | Implied Relationship |
|---------------|---------------------|
| Proximity | Association |
| Alignment | Grouping |
| Color consistency | Category membership |
| Visual weight | Hierarchy |
| Animation timing | State change |
| Whitespace | Separation |

These implicit joins need to become explicit schema for lower-bandwidth perception channels.

`aria-describedby` is writing out foreign keys. Heading hierarchy is an explicit relationship table. Landmark regions are the joins that let someone reconstruct the 3NF view from 1NF input.

## An Important Nuance

The 1NF traversal isn't strictly worse—just different.

Sometimes the linearized, sequential form surfaces structure that visual scanning glosses over. Screen reader users may have more accurate mental models of document outline than visual skimmers who never noticed the heading hierarchy.

Each conversation dimension has strengths. The goal isn't to make all dimensions identical, but to ensure each tells a coherent story appropriate to its strengths.

---

*Multidimensional Conversations provides the conceptual foundation for thinking about interfaces as dialogue. For the component-level view, see [Polysemous Components](/definitions/polysemous-components). For the broader philosophy of translation between ways of knowing, see [Epistemological Translation](/writing/epistemological-translator).*
