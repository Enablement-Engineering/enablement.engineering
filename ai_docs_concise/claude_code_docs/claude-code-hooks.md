# Claude Code Hooks (Concise)

Claude Code hooks are user-defined shell commands triggered at key lifecycle events, providing deterministic control and observability over agent behavior.

**Core Purpose:**
- Enforce rules, automate actions, and log or block tool usage at specific points in the agent loop.

**Key Events:**
- PreToolUse: Before a tool runs (can block or modify)
- PostToolUse: After a tool runs (for logging/feedback)
- Notification: When Claude needs user input or is idle
- Stop/SubagentStop: When main or subagent finishes

**Usage Patterns:**
- Use hooks for notifications, formatting, logging, feedback, and file protection.
- Configure in settings.json with matchers for tool types.
- Security: Hooks run with your credentials—review carefully.

**Signal:**
Hooks turn suggestions into enforceable, repeatable automation, making agentic workflows robust, auditable, and safe.
