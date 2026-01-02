---
term: Context Engineering
shortDefinition: The practice of systematically extracting, structuring, and providing relevant context to AI systems so they can make grounded, accurate decisions.
relatedTerms:
  - Glass Box
  - Epistemological Translation
  - Building Ladders
---

**Context engineering** is the discipline of ensuring AI systems have access to the right information, in the right structure, at the right time. It's the difference between an AI that hallucinates and one that reasons from evidence.

## Context Engineering vs. Prompt Engineering

The distinction matters:

- **Prompt engineering** focuses on *how you ask* — phrasing, persona, chain-of-thought scaffolding
- **Context engineering** focuses on *what the AI knows* — extracting, structuring, and surfacing the information needed to answer well

A perfectly crafted prompt given to a model with no relevant context will still produce confident nonsense. Context engineering addresses the information gap that prompt engineering cannot.

## The Practice

Context engineering involves:

1. **Extraction** — Pulling relevant information from source systems, documents, or environments
2. **Structuring** — Organizing that information so the AI can parse and reason over it
3. **Selection** — Determining what context is relevant for a given task (not everything, the *right* things)
4. **Grounding** — Connecting AI outputs back to source materials for verification

## Prior Art: Alt-Text Generation

Before "context engineering" became a term in 2025 — before Tobi Lütke's tweets, before Karpathy's threads — this was already the core of my approach to AI implementation.

My work on alt-text generation demonstrates the practice: extracting author intent from page structure, DOM hierarchy, surrounding headings, and adjacent text to give AI systems the context they need to generate accurate, meaningful image descriptions.

The insight wasn't "use AI to write alt text." It was: **the AI needs to know what humans know about the image's context** — what section it appears in, what the surrounding copy discusses, what the author intended it to convey.

That's context engineering. I was doing it before we had the name.

## Why It Matters Now

The term gained traction in 2025 because the industry hit a wall. Bigger models and better prompts weren't solving the fundamental problem: AI systems that confidently state things that aren't true because they lack access to ground truth.

Context engineering is the answer. Not more parameters — more relevant information, better structured, precisely targeted.

This is the foundation of building AI systems that organizations can actually trust.
