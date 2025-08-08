# Claude Code CLI Reference (Concise)

The Claude Code CLI is the primary interface for interacting with Claude Code in both interactive and programmatic modes.

**Core Commands:**
- `claude` — Start interactive REPL
- `claude -p "query"` — Run a one-off prompt and exit
- `claude -c` / `--continue` — Resume most recent conversation
- `claude -r <session-id>` / `--resume` — Resume by session ID
- `claude mcp` — Configure Model Context Protocol servers

**Key Flags:**
- `--allowedTools` / `--disallowedTools` — Control tool permissions
- `--output-format` — Choose output: text, json, stream-json
- `--max-turns` — Limit agentic turns in non-interactive mode
- `--model` — Select model
- `--permission-prompt-tool` — Use MCP tool for permission prompts

**Signal:**
The CLI is the control surface for all agentic workflows, enabling both interactive and automated use of Claude Code with fine-grained control over tools, permissions, and output.
