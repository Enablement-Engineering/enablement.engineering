# Claude Code MCP (Model Context Protocol) (Concise)

**Purpose:**
MCP connects Claude Code to external tools, APIs, and data sources via standardized servers, enabling agentic workflows beyond the local codebase.

**Key Concepts:**
- MCP servers expose tools and prompts to Claude Code.
- Connect via local (stdio), SSE, or HTTP transports.
- Configure servers per project, user, or globally.

**Workflow:**
- Add servers with `claude mcp add` (local or remote).
- Use `/mcp` to manage, authenticate, and discover capabilities.
- Reference MCP resources and prompts in conversations and slash commands.

**Signal:**
MCP is the extensibility layer for Claude Code, enabling integration with any external system, tool, or workflow through a unified protocol.
