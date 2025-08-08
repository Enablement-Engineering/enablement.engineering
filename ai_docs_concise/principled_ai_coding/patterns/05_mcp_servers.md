### MCP Servers (Concise)

**What:**
- MCP Servers encapsulate domain-specific tools and workflows, extending Claude Code from a generalist to a specialist agent.

**Key Concepts:**
- Tools: Single-purpose, granular actions (primitives)
- Prompts: High-level workflows that compose tools (recipes)

**Workflow:**
1. Design server structure (manifest, tools, prompts)
2. Build primitive tools for atomic actions
3. Compose prompts to guide the agent through complex workflows
4. Add a discovery prompt for self-documentation
5. Load the server in Claude Code and use custom prompts/tools

**Signal:**
MCP servers are the foundation for scalable, reusable, and discoverable agentic expertise in any domain.
