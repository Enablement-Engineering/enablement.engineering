### Hooks & Observability (Concise)

**Why Hooks:**
- Provide control (block/modify agent actions) and observability (log/audit agent behavior) in agentic systems.

**Main Events:**
- pre-tool-use: Before any tool runs (control)
- post-tool-use: After a tool runs (log)
- notification: On user input/permission needed
- stop/sub-agent-stop: When agent/sub-agent finishes

**Use Cases:**
- Control: Block dangerous actions, enforce policy
- Observability: Log tool calls, chat transcripts, notify on completion

**Signal:**
Hooks are essential for safe, auditable, and policy-driven agentic workflows.
