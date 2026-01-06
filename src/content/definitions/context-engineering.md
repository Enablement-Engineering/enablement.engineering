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
- The **Core Four**: Context, Model, Prompt, Tools

**Out-of-Loop Context** (codebase-bound)
- Types and schemas that act as search anchors
- Folder structure that guides navigation
- Documentation that provides orientation
- Specs and plans that encode decisions
- Runtime output (stdout, test results) that surfaces reality
- The **Through-Agent Eight**: Standard Out, Types, Documentation, Tests, Architecture, Plans, Templates, [ADWs](/definitions/adw) (AI Developer Workflows)

The out-of-loop assets are where leverage compounds. They flow *through* every agent session without consuming the context window until needed. This separation enables **fresh agent instances**—launching new sessions for each task—because the through-agent assets preserve organizational knowledge across sessions.

## The Practice

Context engineering involves:

1. **Extraction** — Pulling relevant information from source systems, documents, or environments
2. **Structuring** — Organizing that information so the AI can parse and reason over it
3. **Selection** — Determining what context is relevant for a given task (not everything, the *right* things)
4. **Grounding** — Connecting AI outputs back to source materials for verification

## Injection Timing

When context gets loaded matters as much as what gets loaded:

- **Bootstrapping** — Minimum viable orientation at session start (file tree, README)
- **Conditional** — Selective loading based on task rules (load CSV docs only when working on CSV features)[^2]
- **Artifact passing** — Context via files rather than conversation history (plans, specs)
- **Runtime** — Dynamic feedback from execution (stdout, test results, errors)

Conditional loading is particularly powerful: instead of loading all documentation (the "God Model" approach), agents load only what's relevant to the current task. An agent working on authentication loads auth patterns, not CSV formatting guides. This prevents context pollution while ensuring the agent has what it needs.

## Context Pollution: The Anti-Pattern

The opposite of good context engineering is **context pollution**—overloading the agent with information until it becomes distracted and confused. This is the mechanism by which the "God Model Fallacy" fails: the belief that one super agent with access to everything will work better than specialized agents with focused context.

Symptoms include:

- Agent struggling to identify what matters
- Confident but irrelevant outputs
- Degraded performance despite "more information"
- Increased hallucination as signal drowns in noise

The solution isn't a bigger context window. It's better selection: conditional loading, focused sessions, fresh agent instances for distinct tasks, and the discipline to exclude what isn't needed.

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

## Fresh Agent Instances: The Practice

Context engineering isn't just about what context to load—it's also about when to reset it. **Fresh agent instances** means launching a completely new session for each distinct task or phase of work, rather than maintaining one long conversation thread.

This matters for three reasons:

1. **Context window optimization** — Every token is dedicated to the current mission, not conversational overhead from previous tasks
2. **Forced isolation** — New sessions can't rely on chat history, so you build self-contained artifacts (plans, specs) that are robust and reusable
3. **Autonomous operation** — Agents running on servers (cron jobs, webhooks) can't access your chat history; fresh instances prepare workflows for this reality

The Two-Phase Workflow exemplifies this: one fresh agent plans the work and writes a spec file. That agent terminates. A second fresh agent reads the spec and implements it. No shared memory—just well-structured context artifacts flowing through the system.

---

*Context engineering establishes what information to load. For how to load it at variable resolution based on task focus, see [Information Foveated Rendering](/definitions/information-foveated-rendering). For why AI reliability varies across domains, see [Semantic Density](/definitions/semantic-density). For practical implementation patterns, see [Context Foveation Patterns](/ladders/context-foveation-patterns).*

[^1]: The in-loop vs. out-of-loop framing draws from Indy Dev Dan's [Tactical Agentic Coding](https://agenticengineer.com/tactical-agentic-coding) course, which provides an excellent foundation for thinking about context leverage points in agentic development. The framework identifies 12 leverage points: 4 in-agent (Context, Model, Prompt, Tools) and 8 through-agent (Standard Out, Types, Documentation, Tests, Architecture, Plans, Templates, [ADWs](/definitions/adw)).

[^2]: Conditional documentation is a key pattern from tactical AI coding: instead of loading all docs, define rules like "if task mentions authentication, load auth-patterns.md." This prevents the God Model Fallacy—the mistaken belief that one agent with access to everything performs better than specialized agents with focused context.
