### AI Coding Glossary (Concise)

**Core Concepts:**
- AI Coding Assistant: Tool that uses LLMs to generate/modify code from prompts.
- Agentic Coding: Autonomous systems using tools, plans, and multi-step workflows.
- Context Window: The information the AI can "see" during a session.
- Hallucination: Incorrect output from insufficient or overloaded context.
- IDKs: Information-Dense Keywords for clear, actionable prompts.
- Higher-Order Prompts: Prompts that accept other prompts as input for workflow composition.

**Patterns:**
- Agentic Workflow: Scripted, repeatable automation of engineering tasks.
- Director Pattern: Closed-loop workflow (generate → execute → evaluate → feedback).
- Parallel Agentic Coding: Multiple agents/branches exploring solutions in parallel.
- Infinite Agentic Loop: Iterative, self-improving or data-generating agentic loop.
- Plan Mode: Read-only, planning-focused mode for building specs.
- Spec Prompt: Detailed, structured plan as a single prompt for the agent.

**Tech:**
- Claude Code Hooks: Event-driven shell commands for control/observability.
- Git Work Trees: Isolated branches for parallel agentic work.
- MCP Server: Extends agent with domain-specific tools and prompts.
