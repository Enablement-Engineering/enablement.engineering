### AI Coding Workflows & Patterns (Concise)

**Prompting Patterns:**
- Iterative: Conversational, for small tasks/bugfixes.
- Spec-Based: Single, detailed plan (spec.md) for large features—enables reliable, autonomous execution.
- Prompt Structure: Location → Action (IDK) → Detail.

**Plan-Driven Development:**
1. Plan with the agent (Plan Mode, read-only)
2. Write/refine plan in spec.md (reviewable, versioned)
3. Execute the plan—agent implements autonomously from spec

**Advanced Patterns:**
- Parallel Development: Multiple agents/branches implement the same spec for comparison/selection.
- Infinite Agentic Loop: Orchestrator prompt runs sub-agents in a loop for creative/data generation.
- MCP Servers: Extend agent with domain-specific tools and workflows.
- Hooks: Enforce control and observability at key agent events.
