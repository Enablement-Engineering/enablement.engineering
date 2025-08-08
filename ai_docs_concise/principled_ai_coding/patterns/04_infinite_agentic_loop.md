### Infinite Agentic Loop (Concise)

**What:**
- An orchestrator prompt repeatedly dispatches sub-agents to generate a large or infinite set of solutions to a problem (e.g., creative design, data generation, self-improvement).

**Why:**
- Explore a vast solution space, generate diverse data, or create self-improving systems.

**How:**
- Separate the loop logic (orchestrator prompt) from the task logic (spec prompt).
- The orchestrator reads the spec, then launches sub-agents in waves, each producing a unique output.

**Workflow:**
1. Write a spec prompt for the task.
2. Create an orchestrator prompt to run the loop.
3. Launch the orchestrator to generate outputs in parallel or sequence.

**Signal:**
The infinite agentic loop is a powerful pattern for large-scale exploration, creativity, and emergent improvement in agentic systems.
