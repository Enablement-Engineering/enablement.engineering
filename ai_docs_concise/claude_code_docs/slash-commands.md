# Claude Code Slash Commands (Concise)

**Purpose:**
Slash commands are reusable prompts or workflows, invoked with `/`, that control Claude Code's behavior interactively.

**Types:**
- Built-in: Core agentic actions (e.g., `/add-dir`, `/agents`, `/help`, `/clear`)
- Custom: Markdown files in `.claude/commands/` (project) or `~/.claude/commands/` (user)
- MCP: Prompts exposed by connected MCP servers

**Features:**
- Support arguments via `$ARGUMENTS` placeholder
- Can reference files (`@file`) or run bash commands (`!command`)
- Namespaced by directory structure

**Signal:**
Slash commands are the primary mechanism for automating, sharing, and scaling agentic workflows in Claude Code.
