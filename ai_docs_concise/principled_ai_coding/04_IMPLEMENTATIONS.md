### AI Coding: Technical Implementations (Concise)

**Project Structure:**
- `.claude/`: Agent config (commands, hooks, settings)
- `specs/`: Versioned feature plans
- `logs/`: Observability data from hooks
- `src/`, `tests/`: App code and tests

**Hooks:**
- Configure in `.claude/settings.json` for control/observability
- Use scripts to block dangerous actions or log agent behavior

**MCP Servers:**
- Self-contained units (manifest + tools/prompts) to extend agent capabilities
- Compose workflows from simple tools and high-level prompts

**Parallel Workflows:**
- Use slash commands to automate creation of parallel worktrees and dispatch sub-agents for solution exploration.
