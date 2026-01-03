---
term: Enablement Engineering
shortDefinition: The practice of building AI systems that extend human capability without hiding their reasoning—built for domains where trust isn't a feeling, it's documentation.
relatedTerms:
  - glass-box
  - human-in-the-loop
  - agentic-systems
  - accessibility
---

**Enablement Engineering** is a methodology for building AI systems that make humans more capable rather than more dependent. It's the discipline of creating AI infrastructure that extends what people can do while keeping reasoning visible, auditable, and ownable.

## The Core Premise

Most AI implementations optimize for one of two things: automation (replacing human work) or engagement (capturing human attention). Enablement Engineering optimizes for a third: **capability extension**.

The distinction matters. Automation asks "what can we remove humans from?" Engagement asks "how do we keep humans looking?" Enablement asks "what could humans accomplish if we removed friction and expanded their reach?"

## The Operating Method

Enablement Engineering follows a six-phase cycle:

### 1. Intent
Capture the job to be done along with its constraints. Not "what feature do you want?" but "what outcome are you trying to achieve, and what are the boundaries?"

### 2. Translation
Convert intent into unambiguous tasks with acceptance criteria. This is where vague goals become specific, testable outcomes. The translation layer is where most AI projects fail—they skip from intent to execution and wonder why results don't match expectations.

### 3. Orchestration
Design the system of tools, agents, roles, gates, and governance. Who (or what) does each piece? What checkpoints exist? What happens when something fails? Orchestration is architecture, not implementation.

### 4. Execution
Humans and agents act together. The key word is "together"—enablement systems don't hand off to AI and hope for the best. They create collaboration patterns where human judgment and AI capability reinforce each other.

### 5. Evidence
Every action produces artifacts: logs, diffs, screenshots, reasoning traces. Evidence isn't optional metadata—it's the foundation of trust. In domains where trust isn't a feeling but documentation, evidence is the product.

### 6. Learning
Review outcomes to prune what doesn't work, extend what does, and update the system. This means running retrospectives, updating playbooks, extracting reusable patterns, and retiring approaches that consistently fail. Learning closes the loop, feeding execution results back into better intent capture and translation. The goal is organizational capability growth—each cycle should make the next one faster and more reliable.

## Guiding Principles

### Ladders, Not Walls
Build infrastructure that extends capability rather than gatekeeping it. A wall says "you can't do this without permission." A ladder says "here's how to reach higher than you could before."

### Glass-Box AI
Reasoning is always visible and auditable. When an AI system makes a decision, you can see what it considered, what it chose, and why. No black boxes in production.

### Mirrors, Not Slot Machines
Systems reflect user intention back accurately rather than optimizing for engagement or addiction. A mirror helps you see yourself clearly. A slot machine exploits psychology for its own goals.

### Ownership by Design
Organizations should be able to inspect, modify, and operate systems—not just consume them. The goal is capability transfer: skills that stay with the team, data the organization owns, and systems designed so you eventually don't need external help to run them.

### Accessibility by Default
Inclusion is built into every process from the start, not bolted on as compliance. [Accessibility is alignment work](/writing/accessibility-as-alignment-work)—the same problems that make systems work for people with disabilities make them work for AI.

---

*See [What is Enablement Engineering?](/writing/what-is-enablement-engineering) for the philosophy, or explore [Projects](/work) for the methodology applied.*
