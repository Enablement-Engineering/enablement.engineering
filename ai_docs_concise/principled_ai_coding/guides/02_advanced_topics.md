### Advanced Topics & Risk Management (Concise)

**Cost Management:**
- Use the right model for the right task (plan with Opus, execute with Sonnet)
- Leverage caching and monitor usage to optimize costs

**Security:**
- Use `pre-tool-use` hooks to block dangerous commands and access to sensitive files
- For maximum isolation, run agents in containers with limited file access

**Debugging:**
- Use logs (chat, tool calls, sub-agent runs) to trace and diagnose failures
- Debug by moving from high-level chat logs to specific tool/sub-agent actions

**Signal:**
Effective agentic development requires proactive cost control, robust security via hooks and isolation, and structured debugging using observability data.
