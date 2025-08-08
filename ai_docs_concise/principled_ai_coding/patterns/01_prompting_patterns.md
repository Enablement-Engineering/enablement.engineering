### Prompting Patterns (Concise)

**Modes:**
- Iterative: Conversational, for small/flexible tasks and debugging
- Spec-Based: Single, detailed plan (spec.md) for large/complex features

**Prompt Structure:**
- Location → Action (IDK) → Detail
- Example: `UPDATE src/app.js: REFACTOR renderComponent() to return a dictionary instead of a list.`

**Signal:**
Choose the right prompting mode for the task, and always use clear, structured prompts for reliable agentic coding.
