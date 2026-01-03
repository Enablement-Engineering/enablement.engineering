---
term: Context Engineering
shortDefinition: The practice of providing AI systems with the minimum viable context needed to make grounded decisions—not everything, the right things, at the right time.
relatedTerms:
  - Glass Box
  - Core Four Framework
  - Building Ladders
---

**Context engineering** is the discipline of ensuring AI systems have access to the right information, in the right structure, at the right time. It's the difference between an AI that hallucinates and one that reasons from evidence.

But there's a crucial insight: the goal isn't *maximum* context. It's *minimum viable* context. Every piece of information you add increases the variables an agent must reason about. Context engineering means providing exactly what's needed—no more, no less.

## Context Engineering vs. Prompt Engineering

The distinction matters:

- **Prompt engineering** focuses on *how you ask* — phrasing, persona, chain-of-thought scaffolding
- **Context engineering** focuses on *what the AI knows* — extracting, structuring, and surfacing the information needed to answer well

A perfectly crafted prompt given to a model with no relevant context will still produce confident nonsense. Context engineering addresses the information gap that prompt engineering cannot.

## Leverage Points: In-Loop vs. Out-of-Loop

In agentic systems, context flows through two distinct channels:[^1]

**In-Loop Context** (session-bound)
- System prompts and conversation history
- Ephemeral—resets to zero with each new session
- The immediate state the agent reasons over

**Out-of-Loop Context** (codebase-bound)
- Types and schemas that act as search anchors
- Folder structure that guides navigation
- Documentation that provides orientation
- Specs and plans that encode decisions
- Runtime output (stdout, test results) that surfaces reality

The out-of-loop assets are where leverage compounds. They flow *through* every agent session without consuming the context window until needed.

## The Practice

Context engineering involves:

1. **Extraction** — Pulling relevant information from source systems, documents, or environments
2. **Structuring** — Organizing that information so the AI can parse and reason over it
3. **Selection** — Determining what context is relevant for a given task (not everything, the *right* things)
4. **Grounding** — Connecting AI outputs back to source materials for verification

## Injection Timing

When context gets loaded matters as much as what gets loaded:

- **Bootstrapping** — Minimum viable orientation at session start (file tree, README)
- **Conditional** — Selective loading based on task rules (load CSV docs only when working on CSV features)
- **Artifact passing** — Context via files rather than conversation history (plans, specs)
- **Runtime** — Dynamic feedback from execution (stdout, test results, errors)

## Context Pollution: The Anti-Pattern

The opposite of good context engineering is **context pollution**—overloading the agent with information until it becomes distracted and confused. Symptoms include:

- Agent struggling to identify what matters
- Confident but irrelevant outputs
- Degraded performance despite "more information"

The solution isn't a bigger context window. It's better selection: conditional loading, focused sessions, and the discipline to exclude what isn't needed.

## Example: Alt-Text Generation

Alt-text generation is a clear example of context engineering in practice.

The naive approach—passing an image to a vision model and asking "describe this"—produces generic, often useless descriptions. The image alone lacks the context humans use to understand it.

Better alt-text requires extracting author intent from the surrounding environment: page structure, DOM hierarchy, adjacent headings, and nearby copy. The AI needs to know *what humans know* about the image—what section it appears in, what the surrounding content discusses, what the author intended it to convey.

This is context engineering: not just "use AI," but "give AI the information it needs to reason well."

See [AI-Generated Alt Text: A Contextual Approach](/writing/ai-alt-text-generation) for a detailed walkthrough.

## Why It Matters Now

The term gained traction in 2025 because the industry hit a wall. Bigger models and better prompts weren't solving the fundamental problem: AI systems that confidently state things that aren't true because they lack access to ground truth.

Context engineering is the answer. Not more parameters — more relevant information, better structured, precisely targeted.

This is the foundation of building AI systems that organizations can actually trust.

[^1]: The in-loop vs. out-of-loop framing draws from Indy Dev Dan's [Tactical Agentic Coding](https://agenticengineer.com/tactical-agentic-coding) course, which provides an excellent foundation for thinking about context leverage points in agentic development.
