# Claude Code Hooks Reference (Concise)

**What are Hooks?**
Hooks are shell commands triggered by Claude Code at key lifecycle events, enabling control and observability over agent actions.

**Configuration:**
- Defined in `settings.json` (user, project, or local).
- Organized by event and matcher (tool pattern).
- Can run project-specific scripts using `$CLAUDE_PROJECT_DIR`.

**Main Events:**
- PreToolUse: Before tool runs (can block/modify)
- PostToolUse: After tool runs (log/feedback)
- Notification: On permission prompt or idle
- UserPromptSubmit: On prompt submission (can block/validate)
- Stop/SubagentStop: When agent/subagent finishes
- SessionStart: On new or resumed session

**Patterns:**
- Use exit codes or JSON for control/feedback.
- Block dangerous actions, auto-format, log tool calls, or inject context.
- Security: Hooks run with your credentials—review carefully.

**Signal:**
Hooks are the enforcement and audit layer for agentic workflows, making automation safe, observable, and policy-driven.
