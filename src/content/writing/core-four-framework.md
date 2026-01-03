---
title: "The Core Four Framework"
description: "Context, Model, Prompt, and Tools—the four elements of every agentic system. Tools are where trust lives."
publishedAt: 2026-01-02
type: "essay"
featured: false
tags: ["enablement-engineering", "agentic-systems", "methodology", "tools"]
---

[What is Enablement Engineering?](/writing/what-is-enablement-engineering) defined the philosophy. This article defines the physics.

Every agentic system—every AI that can reason *and* act—comes down to four elements: Context, Model, Prompt, and Tools.[^1] These are the leverage points within every agent session, the variables you can actually control.

[^1]: The "Core Four" framing is popularized by Indy Dev Dan's [Tactical Agentic Coding](https://agenticengineer.com/tactical-agentic-coding) course. This article extends it by treating tools as the primary trust boundary.

But here's what most frameworks miss: these four elements aren't equally important for trust. One of them is special.

## The Four Elements

**Context** is what the agent knows. Files, documentation, conversation history, organizational constraints. Models are stateless at inference time—context is the memory we inject at runtime. Without rich, well-scoped context, even the most capable model produces generic outputs.

**Model** is the reasoning engine. Which LLM, what capabilities, what trade-offs between speed and depth. For many workflows, the model is increasingly interchangeable; orchestration, constraints, and integration are where durable advantage lives. A well-orchestrated system with a modest model beats a poorly orchestrated system with a frontier model.

**Prompt** is the instructions. System prompts that define behavior, few-shot examples that demonstrate patterns, constraints that bound outputs. Prompts encode expertise and guardrails. They can be composed—one prompt triggering others, building complex workflows from simple pieces.

**Tools** are the actions the agent can take. Bash commands, file operations, API calls, database queries, procedure invocations. Tools transform reasoning into results—and reasoning into *consequences*.

## How They Work Together

The four elements form a loop:

**Context loads → Prompt instructs → Model reasons → Tool executes → Output becomes new Context**

Each cycle, the agent sees its situation (context), receives instructions (prompt), thinks through the problem (model), and takes action (tool). The result of that action—success, failure, new information—feeds back as context for the next cycle.

This loop is where agentic systems differ from chatbots. A chatbot reasons and responds. An agent reasons, acts, observes the result, and adapts. The loop continues until the task is complete or the agent reaches a checkpoint requiring human review.

Understanding this loop matters because trust must be designed into each stage:
- **Context**: Where did this information come from? Is it current? Is it scoped appropriately?
- **Prompt**: What guardrails constrain the agent's behavior? What escalation triggers exist?
- **Model**: What are the failure modes? Where might it hallucinate?
- **Tools**: What actions are permitted? What gets logged? Who can review?

## Why Tools Are Different

Here's the insight that changes everything: **tools are where trust lives.**

When an agent calls a tool, something important happens. Fuzzy natural language gets quantized into a discrete, auditable operation. The infinite possibility space of "figure something out" collapses into a specific, logged action with defined inputs and outputs.

Tools are where reasoning becomes consequences. Without them, you mostly have advice. With them, you can build systems that act—and can be audited.

Trust emerges when tool calls are:
- **Typed**: Structured and validated inputs/outputs (schemas), not free-form text
- **Policy-bounded**: Permissions and sandboxing constrain what's possible
- **Observable**: Logs, traces, and evaluation hooks detect failure and drift

This is why the Core Four framework matters for enablement engineering specifically. Glass box AI isn't just about transparency in reasoning—it's about auditability in action. And action happens through tools.

## Procedures, Not Just Functions

Most people think of tools as API calls. Functions that do things. Enablement engineering thinks of tools as **procedures**—encoded expertise bundled with flexible prompts.

Let me define terms:
- **Tool**: A callable action boundary. The interface an agent uses to do something.
- **Procedure**: A tool wrapped with contracts, tests, documentation, and governance. The full package that makes a tool trustworthy.
- **Skill**: A reusable procedure in the organizational catalog. What teams actually build and maintain.

A procedure is more than a function. It's:
- **Contracted I/O**: Schemas and invariants that define valid inputs and outputs
- **Policy-bounded execution**: Permissions and sandboxing that constrain behavior
- **Observable behavior**: Logs, traces, and eval hooks that surface what happened
- **Documented and testable**: Examples, edge cases, and ownership that enable maintenance

The deterministic parts (schemas, validation, logging) create auditability. The flexible parts (prompts, context adaptation) create adaptability. Together, they create procedures that are both powerful and trustworthy.

## A Worked Example

Consider an accessibility remediation workflow—the same example from [the philosophy piece](/writing/what-is-enablement-engineering), now through the Core Four lens.

**Context loaded:**
- The PDF document (extracted text and structure)
- WCAG 2.1 guidelines (the compliance standard)
- Organization style guide (voice, terminology preferences)
- Previous remediation decisions (what patterns have been approved before)

**Prompt instructs:**
- "Analyze this document for accessibility issues"
- "For each heading, determine the appropriate level based on visual hierarchy and document structure"
- "Generate alt text following the organization's guidelines"
- "Flag any decisions with confidence below 0.8 for human review"

**Model reasons:**
- Identifies a large bold phrase as likely H2 based on visual weight
- Notes surrounding context suggests it introduces a new section
- Considers document outline—previous H2s follow similar pattern
- Confidence: 0.91

**Tool executes:**
```
classify_heading_level
├── input: { snippet: "Benefits Overview", style: { bold: true, size: 18pt }, surrounding_context: [...] }
├── output: { level: "H2", evidence: ["visual_weight", "section_introduction", "outline_consistency"], confidence: 0.91 }
└── logged: { timestamp, user_session, document_id, decision_id }
```

The key: every decision becomes a discrete, logged operation. When a reviewer asks "why is this an H2?", the system can show the evidence array. When they disagree, their override gets logged too—feeding back into organizational learning.

When signals conflict or confidence drops, the procedure escalates to human review instead of guessing.

This is what glass box looks like in practice. Not "the AI decided"—but "here's the procedure that ran, with these inputs, producing this output, based on this evidence."

---

The Core Four framework isn't just a way to think about AI systems. It's a way to think about trust.

Context, Model, and Prompt determine what an agent knows, how it thinks, and what it's told to do. But Tools determine what it *does*—and what it does is what you can audit, review, and trust.

Design your tools as procedures. Make them typed, bounded, and observable. That's how glass box systems get built.

---

*This article is part of the enablement engineering series. See [What is Enablement Engineering?](/writing/what-is-enablement-engineering) for the foundational philosophy.*
