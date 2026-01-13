---
title: "UIs as Multidimensional Conversations"
description: "User interfaces aren't static layouts—they're parallel dialogues happening simultaneously. The same component tells different stories to different users. Accessibility is coherence across conversations."
publishedAt: 2026-01-06
type: "essay"
draft: true
featured: true
tags: ["accessibility", "design", "enablement-engineering", "interfaces"]
---

A button is never just a button.

To a visual user scanning a checkout page, a "Place Order" button is a spatial landmark—positioned prominently, colored to stand out, clearly the culmination of the form above it.

To someone completing a transaction, it's a commitment point—the threshold between browsing and buying, weighted with the gravity of an irreversible action.

To a screen reader user navigating by landmarks, it's an orientation marker—a way to understand where they are in the page structure.

To a keyboard user tabbing through the interface, it's a focusable target—reachable or unreachable, with visible focus indication or without.

Same element. Different conversations. All happening at the same time.

## The Multidimensional Insight

User interfaces are not single conversations. They are **parallel conversations happening simultaneously** across multiple dimensions.

Every component participates in multiple dialogues at once:
- The visual conversation (spatial relationships, color, typography)
- The semantic conversation (meaning, structure, relationships)
- The interactive conversation (what can be clicked, tapped, activated)
- The navigational conversation (how to move through the interface)
- The assistive conversation (what gets announced, how it's described)

The interface designer isn't crafting one experience. They're conducting parallel conversations with every possible user modality and goal state, all through the same shared vocabulary of components.

This is a different way of thinking about interfaces. Not "design it, then make it accessible." Instead: "design means ensuring coherence across all simultaneous conversations."

## Visual vs. Sequential Information Architecture

Here's a precise way to understand what's happening:

**Visual interfaces present relationships in parallel**—like pre-computed joins rendered spatially.

When you look at a button, its meaning emerges from the intersection of multiple relationships perceived simultaneously:
- Position (in a form? near related fields? at the bottom of a flow?)
- Visual weight (size, color, contrast with surroundings)
- State indicators (hover effects, focus rings, disabled styling)
- Textual label (what it says)
- Surrounding context (what's near it, what came before)

You perceive these as gestalt—a unified meaning constructed from parallel data streams. The bandwidth of vision supports receiving multiple relationship types simultaneously.

**Screen reader interfaces require explicit relationship encoding**—presenting a tree structure that users navigate and piece together.

The screen reader user might hear: "Button. Place Order. In checkout form. Main region."

But they're building understanding through navigation—moving through headings, landmarks, and form controls, constructing a mental model of the page structure as they go. Modern screen readers expose rich context (parent containers, heading levels, landmark regions), but the user must actively navigate to discover these relationships.

The relationships that visual users perceive spatially must be encoded explicitly through semantic HTML and ARIA attributes—not because screen reader users get less information, but because they receive it through a different channel that requires explicit structure.

## The Critical Reframe

This reframes what "accessible markup" actually is.

It's not "adding labels for compliance."

It's **explicitly encoding relationships that visual presentation encodes implicitly**.

| Visual Encoding | What It Communicates | Explicit Equivalent |
|-----------------|---------------------|-------------------|
| Proximity | Association | `aria-describedby` |
| Alignment | Grouping | Fieldsets, `role="group"` |
| Color consistency | Category membership | Consistent naming, ARIA |
| Visual weight | Hierarchy | Heading levels |
| Animation | State change | `aria-live` regions |
| Whitespace | Separation | Landmarks, sections |

Visual designers communicate relationships all the time without realizing it. The space between elements says "these are separate." The alignment says "these belong together." The color says "these are the same category."

These implicit visual relationships are *semantic* relationships—they carry meaning. Screen reader users need that same meaning, but they can't perceive the visual encoding.

Accessible markup is the explicit schema for lower-bandwidth perception channels.

## What Designers Don't Know They're Communicating

This is the uncomfortable truth: visual design encodes relationships that designers often don't consciously realize they're encoding.

When a designer puts a help icon next to a form field, they're communicating "this information explains that field" through proximity. They might not think of it as a relationship—it's just "obvious" where it should go.

But obviousness is itself a form of implicit encoding. The screen reader user doesn't get obviousness. They get a sequence of elements with no spatial information.

If the help icon isn't explicitly associated with its field (`aria-describedby`), the relationship that was "obvious" in the visual conversation is silent in the assistive conversation.

The designer communicated something. They just communicated it in a channel that only some users can perceive.

## Coherence, Not Equivalence

The goal isn't making all conversations *identical*. It's making them *coherent*.

Visual and sequential interfaces have different strengths:

**Visual strengths:**
- Parallel perception (see everything at once)
- Spatial memory (remember where things are)
- Pattern recognition (spot inconsistencies quickly)

**Sequential strengths:**
- Forced linearity (encounter everything, miss nothing)
- Explicit structure (heading hierarchy is unambiguous)
- Reduced distraction (focus on content, not decoration)

Screen reader users may actually have more accurate mental models of document structure than visual users who never noticed the heading hierarchy. The sequential conversation surfaces structure that the visual conversation obscures.

Each conversation dimension should tell a story appropriate to its strengths, not a degraded version of the visual story.

## Components as Polysemous Elements

In linguistics, polysemy describes words with multiple related meanings—"bank" as riverbank or financial institution.

UI components are inherently polysemous. A navigation menu means:
- **To visual scanners:** Spatial map of site structure
- **To task-focused users:** Shortest path to goal
- **To screen readers:** Landmark for orientation
- **To keyboards:** Tab sequence to navigate
- **To search engines:** Site architecture signal
- **To AI agents:** Structured data about available paths

All true simultaneously. The component doesn't change meaning—it has multiple meanings, each active in a different conversation.

Designing with polysemy in mind means asking: "What should this component mean in each conversation? Are all those meanings coherent?"

## The Translation Challenge

When conversations diverge, you have a translation problem.

Consider the subtitle pattern: a smaller text appearing below a headline, clarifying or extending it. Visually, its meaning is clear—proximity and typographic hierarchy signal "this belongs to that headline."

Semantically, what is it? An `<h2>`? A `<p>`? A `<span>` inside the `<h1>`?

The content author operates in **semantic intention space**: "This clarifies the headline but isn't a new section."

The developer operates in **structural implementation space**: "What tag do I use that won't break the outline?"

These are different epistemological frameworks—different ways of knowing what the element *is*. Neither is wrong. They're different projections of the same meaning onto different coordinate systems.

The translation work is bridging these frameworks: understanding the author's semantic intention, the developer's structural constraints, and the user's comprehension needs—then finding the implementation that maintains coherence across all three.

This is what [epistemological translation](/writing/epistemological-translator) means in practice.

## Designing for Multidimensional Coherence

If interfaces are multidimensional conversations, design becomes the art of conducting parallel dialogues.

**Start with meanings, not appearances.** Before visual design, enumerate the conversations this component participates in and what it should communicate in each.

**Make implicit relationships explicit.** If proximity means association, add `aria-describedby`. If color means category, add consistent naming. Don't rely on channels that some users can't perceive.

**Test each conversation.** Navigate with screen reader. Navigate with keyboard only. Use without color perception. Each is a different conversation—test each for coherence.

**Document intended meanings.** "In the visual conversation, this means X. In the assistive conversation, this means Y." Make the parallel meanings explicit so developers can implement them correctly.

**Look for conversation conflicts.** Where different conversations tell contradictory stories, you have a design problem—not an accessibility problem.

## The Deeper Pattern

The multidimensional conversations framework connects to something deeper: **the same content, perceived through different epistemological frameworks, should yield coherent meaning**.

This is the accessibility version of the alignment problem. How do you ensure that the intent you're communicating survives transformation across different perceptual channels? How do you preserve meaning when the medium of perception changes?

Visual designers have been solving this problem—encoding meaning in spatial and chromatic relationships—for centuries. The challenge now is making those encodings work for perceivers with different sensory channels.

The answer isn't "add accessibility on top." It's designing from the start for multiple simultaneous conversations, each coherent in itself, all coherent with each other.

Interfaces that do this aren't just accessible. They're better for everyone—clearer, more structured, more predictable. The discipline of serving multiple conversations forces cleaner thinking about what you're actually trying to communicate.

---

*The multidimensional conversations framework provides the conceptual foundation for thinking about interfaces as dialogue. For the element-level view, see [Polysemous Components](/definitions/polysemous-components). For the underlying philosophy, see [Accessibility as Alignment Work](/writing/accessibility-as-alignment-work).*
