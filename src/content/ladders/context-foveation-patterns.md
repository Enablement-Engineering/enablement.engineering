---
title: Context Foveation Patterns
description: Practical patterns for implementing Information Foveated Rendering in AI systems—variable resolution context loading based on task focus.
capabilities:
  - Focal/peripheral/ambient context loading strategies
  - Orchestrator-delegate architecture implementation
  - Conditional context cascading rules
  - Resolution summaries for context compression
  - Dynamic focus shifting patterns
featured: false
draft: true
tags:
  - context-engineering
  - agentic-systems
  - methodology
publishedAt: 2026-01-06
---

This ladder encodes [Information Foveated Rendering](/definitions/information-foveated-rendering) into practical patterns you can implement in AI systems. The core insight: context windows are finite, so load information at variable resolution based on task focus—high detail where you're working, lower resolution for surrounding systems, ambient awareness of constraints.

## Quick Start

**Start here with these three patterns to get 70% of the benefit:**

1. **Pattern 2: Resolution Summaries** - Create interface summaries for modules you're not actively working on
2. **Pattern 6: Prompt Templates** - Explicitly label focal/peripheral/ambient context in your prompts  
3. **Pattern 4: Conditional Loading** - Add 2-3 simple rules for common scenarios (e.g., "if auth task, load security docs")

Once these are working, add orchestrator patterns and budget tracking.

## The Three Resolution Zones

Every piece of context falls into one of three zones:

| Zone | Resolution | Content Type | Example |
|------|-----------|--------------|---------|
| **Focal** | High | Full implementation, complete code, detailed requirements | The function being debugged |
| **Peripheral** | Medium | Interfaces, type signatures, API contracts | Modules that function calls |
| **Ambient** | Low | Architecture overview, constraints, standards | Security requirements |

The key insight: **most information doesn't need focal resolution**. Peripheral and ambient context guides work without consuming precious context window space with implementation details you're not actively reasoning about.

## Pattern 1: Resolution-Tagged Context Loading

Structure your context files to support different resolution levels:

**Text description:** This directory tree shows a project organized by resolution level. At the root, ARCHITECTURE.md and CONSTRAINTS.md serve as ambient context. Within module-a, README.md, types.ts, and index.ts provide peripheral context about interfaces and public APIs, while implementation.ts contains focal-level detail loaded only when actively working on that module. Module-b follows the same pattern.

```
/project
├── ARCHITECTURE.md          # Ambient: project overview
├── CONSTRAINTS.md           # Ambient: invariants that must hold
│
├── /module-a
│   ├── README.md            # Peripheral: module purpose and interface
│   ├── types.ts             # Peripheral: type definitions
│   ├── index.ts             # Peripheral: public API
│   └── implementation.ts    # Focal: only when working here
│
└── /module-b
    ├── README.md            # Peripheral when working on module-a
    └── ...
```

**Loading strategy:**
- Always load ambient files (they're small by design)
- Load peripheral files for adjacent modules
- Load focal files only for the active work area

## Pattern 2: Resolution Summaries

When context must drop from focal to peripheral, generate summaries that preserve interface information:

```markdown
## Module Summary: PaymentProcessor

**Purpose:** Handles payment transaction lifecycle

**Exports:**
- `processPayment(order: Order): Promise<Receipt>`
- `refundPayment(transactionId: string): Promise<RefundResult>`

**Dependencies:** StripeClient, OrderValidator, TransactionLogger

**Side Effects:**
- Creates transaction record in database
- Sends confirmation email on success
- Logs all operations to audit trail

**Error Conditions:**
- `PaymentError`: Card declined, insufficient funds
- `ValidationError`: Invalid order data
- `NetworkError`: Stripe API unreachable

**Constraints:**
- Must complete within 30 seconds
- Requires idempotency key for retries
```

This summary contains everything needed for peripheral awareness without the 500+ lines of implementation.

## Pattern 3: Orchestrator-Delegate Architecture

The orchestrator maintains only ambient and peripheral context. It never loads implementation details directly. This is the practical implementation of **fresh agent instances**—each delegate is a new session with focused context that terminates when its task completes.

**Text description:** This architecture diagram shows an orchestrator agent at the top that maintains only high-level context (project architecture, module interfaces, task goals). It delegates work to three specialized sub-agents (Delegate A, B, and C). Each delegate receives focused context: Delegate A works on payment.ts with related types, Delegate B on cart.ts, and Delegate C on tests. Each delegate produces a result, which flows back to the orchestrator. The orchestrator aggregates these results into a summary rather than storing raw outputs, keeping its context lean.

```
┌─────────────────────────────────────────────────┐
│                  ORCHESTRATOR                    │
│                                                 │
│  Context: Ambient + Peripheral only             │
│  - Project architecture                         │
│  - Module interfaces (not implementations)      │
│  - Current task goal and constraints            │
│                                                 │
│  Actions:                                       │
│  - Decompose tasks                              │
│  - Delegate to specialized agents               │
│  - Aggregate results                            │
│  - Track progress                               │
└─────────────────────────────────────────────────┘
         │                    │                    │
         ▼                    ▼                    ▼
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│  DELEGATE A │      │  DELEGATE B │      │  DELEGATE C │
│             │      │             │      │             │
│ Focal:      │      │ Focal:      │      │ Focal:      │
│ payment.ts  │      │ cart.ts     │      │ tests/*.ts  │
│             │      │             │      │             │
│ Peripheral: │      │ Peripheral: │      │ Peripheral: │
│ types,      │      │ types,      │      │ src/*,      │
│ interfaces  │      │ interfaces  │      │ interfaces  │
└─────────────┘      └─────────────┘      └─────────────┘
         │                    │                    │
         ▼                    ▼                    ▼
    [Result A]           [Result B]           [Result C]
         │                    │                    │
         └────────────────────┼────────────────────┘
                              │
                              ▼
                    [Aggregated Summary]
                    (Not raw outputs)
```

**Why this works:**
- Delegate context dies with the delegate (no accumulation)
- Orchestrator stays lean (can run indefinitely)
- Each task gets fresh, focused attention
- Results aggregate as summaries, not full outputs

**Connection to Tactical AI Coding:**
This pattern implements the "One Agent One Prompt One Purpose" principle. The orchestrator is a coordination agent; delegates are execution agents. By keeping these roles separate and using fresh instances for each delegate, you avoid the God Model Fallacy—trying to build one super agent that does everything. In tactical AI coding, [ADWs](/definitions/adw) (AI Developer Workflows) encode this pattern as reusable Python scripts.

**Error Handling:**

When delegates fail (timeout, error, low confidence):

```
Orchestrator receives:
{
  "status": "failed",
  "delegate": "payment-validator",
  "error": "timeout after 30s",
  "partial_result": {...}
}

Orchestrator options:
1. Retry with same context (transient error)
2. Retry with expanded context (missing information)
3. Retry with different delegate (capability mismatch)
4. Escalate to human review (unresolvable)
5. Mark task as blocked, continue with others
```

The orchestrator tracks failure patterns and adjusts delegation strategy accordingly.

## Pattern 4: Conditional Context Cascading

Define rules that trigger context injection based on task characteristics. This implements **conditional documentation** from tactical AI coding—loading docs only when task criteria match, preventing context pollution.

```yaml
# context-rules.yaml

rules:
  - condition: "task mentions 'authentication' OR 'login' OR 'session'"
    load:
      - path: "docs/security/auth-patterns.md"
        resolution: peripheral
      - path: "src/auth/types.ts"
        resolution: peripheral

  - condition: "task crosses frontend/backend boundary"
    load:
      - path: "api/contracts/"
        resolution: peripheral
      - path: "docs/api-conventions.md"
        resolution: ambient

  - condition: "task involves database"
    load:
      - path: "prisma/schema.prisma"
        resolution: peripheral
      - path: "docs/database-conventions.md"
        resolution: ambient

  - condition: "task involves accessibility"
    load:
      - path: "docs/wcag-requirements.md"
        resolution: ambient
      - path: "src/components/a11y/"
        resolution: peripheral

  - condition: "confidence < 0.7"
    escalate: true
    load_additional:
      - path: "docs/troubleshooting/"
        resolution: focal
```

These rules encode organizational knowledge: "When working on X, you usually need Y." In tactical AI coding terms, this is a **through-agent leverage point**—the rules file lives in your codebase and flows through every agent session, guiding context selection without manual intervention.

**Real-world application:**
Store these rules in a `context-rules.yaml` or `.ai/conditional-docs.md` file at your repo root. Reference this file in your agent's system prompt: "Before loading documentation, check context-rules.yaml to determine what's relevant for the current task."

## Pattern 5: Focus Shifting Protocol

When task focus shifts, context must shift with it:

**Text description:** This process diagram shows context transitioning as work moves from frontend to backend. Initially, PaymentForm.tsx is focal (full detail), payment-client.ts is peripheral (interface only), and architecture docs are ambient. When discovering the bug is actually in backend validation, focus shifts: payment-validation.ts becomes focal, PaymentForm.tsx drops to peripheral (now interface only), payment-client.ts stays peripheral, and ambient context remains constant throughout.

```
Initial Focus: Frontend payment form bug
─────────────────────────────────────────
Focal:      src/components/PaymentForm.tsx
Peripheral: src/api/payment-client.ts (interface only)
            src/types/payment.d.ts
Ambient:    ARCHITECTURE.md, CONSTRAINTS.md

Discovery: Bug is in backend validation
─────────────────────────────────────────
Action: Shift focus

New Focus: Backend payment validation
─────────────────────────────────────────
Focal:      src/api/payment-validation.ts
Peripheral: src/api/payment-client.ts (still relevant)
            src/components/PaymentForm.tsx (now interface only)
            src/types/payment.d.ts
Ambient:    ARCHITECTURE.md, CONSTRAINTS.md

Note: PaymentForm.tsx dropped from focal, summarized to peripheral
```

**Implementation:**
1. Detect focus shift (new file, different module, escalation)
2. Generate summary of current focal context
3. Load new focal context
4. Update peripheral context for new focus area
5. Ambient stays constant (by design)

## Pattern 6: Prompt Templates for Resolution

Be explicit about resolution in prompts:

````markdown
# Task: Fix payment validation bug

## AMBIENT CONTEXT (constraints that must hold)
- All payment operations must be idempotent
- PCI compliance: no card numbers in logs
- 30 second timeout for all payment operations

## PERIPHERAL CONTEXT (interfaces only, reference as needed)

### PaymentForm Component
- Submits: { amount, cardToken, orderId }
- Expects: { success: boolean, transactionId?: string, error?: string }
- Error display: inline validation + toast for server errors

### Payment Types
```typescript
interface PaymentRequest { amount: number; cardToken: string; orderId: string; }
interface PaymentResponse { success: boolean; transactionId?: string; error?: string; }
```

## FOCAL CONTEXT (reason about in detail)
[Full implementation of payment-validation.ts here]

## TASK
The validation is rejecting valid orders with error "Invalid amount format".
Identify the bug and propose a fix.
````

This tells the model explicitly how to weight different information.

## Pattern 7: Context Budget Tracking

Track context usage across resolution zones:

**Text description:** This budget tracking table shows a 100,000 token context window divided across four zones. Ambient zone: allocated 5,000 tokens, using 3,200, with 1,800 remaining. Peripheral zone: allocated 25,000, using 18,500, with 6,500 remaining. Focal zone: allocated 50,000, using 42,000, with 8,000 remaining (84% capacity, approaching limit). Response zone: allocated 20,000, not yet used, all 20,000 available. A warning indicates the focal zone is at 84% capacity and suggests summarizing older focal content.

```
Context Budget: 100,000 tokens
─────────────────────────────
Zone       │ Allocated │ Used   │ Remaining
───────────┼───────────┼────────┼──────────
Ambient    │ 5,000     │ 3,200  │ 1,800
Peripheral │ 25,000    │ 18,500 │ 6,500  
Focal      │ 50,000    │ 42,000 │ 8,000
Response   │ 20,000    │ -      │ 20,000
───────────┴───────────┴────────┴──────────

Warning: Focal zone at 84% capacity
Action: Consider summarizing older focal content
```

**Budget guidelines** (ensure total ≤ 100%):
- Ambient: 5-10% (small but always present)
- Peripheral: 20-25% (interfaces and summaries)
- Focal: 40-50% (the actual work)
- Response: 20-25% (room for output)

Example allocation for 100k token window:
- Ambient: 8k tokens (8%)
- Peripheral: 22k tokens (22%)
- Focal: 45k tokens (45%)
- Response: 25k tokens (25%)

## Anti-Patterns to Avoid

**The God Model Fallacy:** Trying to build one super agent with access to everything
- Symptom: Degraded performance despite "more information"
- Root cause: Context pollution—too many variables, signal drowns in noise
- Fix: Use specialized agents (orchestrator-delegate), fresh instances for distinct tasks

**Context pollution:** Loading everything "just in case"
- Symptom: Model struggles to identify what matters
- Fix: Use conditional loading rules, not kitchen-sink context

**Resolution mismatch:** Full implementation where summary would suffice
- Symptom: Context budget exhausted quickly
- Fix: Generate resolution summaries for non-focal modules

**Static context:** Same context regardless of task
- Symptom: Irrelevant information crowds out relevant
- Fix: Implement conditional cascading and focus shifting

**Orchestrator creep:** Orchestrator accumulates delegate outputs
- Symptom: Performance degrades over time
- Fix: Delegates return summaries, not raw outputs; orchestrator doesn't store history

**Long-running sessions:** One agent planning, coding, testing, reviewing
- Symptom: Context window fills with conversational overhead
- Fix: Use fresh agent instances—one agent plans, terminates; new agent implements from plan file

---

## Why This Is a Ladder

These patterns make expert-level context management accessible to anyone building AI systems.

You don't need to intuit what context matters—the resolution zones provide a framework. You don't need to manually track context budgets—the patterns handle allocation. You don't need to figure out orchestration architecture from scratch—the orchestrator-delegate pattern provides a template.

The expertise is encoded in the patterns. Apply them, and your AI systems get smarter context management automatically.

## Connection to Tactical AI Coding Framework

These patterns align closely with tactical agentic coding principles:

- **Fresh Agent Instances** = Orchestrator-Delegate pattern (Pattern 3)
- **Conditional Documentation** = Conditional Context Cascading (Pattern 4)
- **The 12 Leverage Points** = Through-agent assets (Types, Architecture, Plans, Templates, [ADWs](/definitions/adw)) guide what context to load
- **Avoiding the God Model** = Resolution zones prevent loading everything at focal detail
- **Two-Phase Workflow** = Focus shifting between planning and implementation (Pattern 5)

The tactical framework provides vocabulary for what we're doing; these patterns provide implementation details for *how* to do it.

---

*Context Foveation Patterns implements [Information Foveated Rendering](/definitions/information-foveated-rendering). For the theoretical foundation, see the [IFR essay](/writing/information-foveated-rendering). For broader context management principles, see [Context Engineering](/definitions/context-engineering). For tactical AI coding foundations, see Indy Dev Dan's [Tactical Agentic Coding](https://agenticengineer.com/tactical-agentic-coding).*
