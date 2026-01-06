---
term: ADW (AI Developer Workflow)
shortDefinition: Reusable scripts combining deterministic code with AI agents to orchestrate autonomous engineering workflows.
relatedTerms:
  - Context Engineering
  - Glass Box
draft: false
---

**ADW** (AI Developer Workflow) is a reusable script that combines deterministic code, agentic prompts, and triggers to create autonomous engineering systems. ADWs represent the highest layer of abstraction in tactical AI coding—moving beyond simple code generation to orchestrating the entire software development lifecycle without human intervention.

## The Problem ADWs Solve

Traditional scripting handles deterministic tasks well but fails when encountering unexpected variability. AI agents handle reasoning well but struggle with complex state management over long periods. ADWs synthesize both: **Python handles structure (loops, error handling, state), agents handle reasoning (writing code, analyzing errors)**.

This combination enables:

1. **Context pollution prevention** — Breaking workflows into distinct phases (Plan, Build, Test) managed by the ADW means each agent gets a fresh context window
2. **Removing human bottlenecks** — Automated transitions between steps without requiring manual review and prompting
3. **Enforcing consistency** — Every feature follows the same workflow steps; nothing gets skipped

## How ADWs Work: Orchestrator-Delegate Pattern

ADWs function by separating orchestration from execution:

**The Orchestrator (Deterministic Code):**
- A Python script (e.g., `adw_plan_build.py`) handling logic, control flow, state management
- Performs deterministic actions: fetching GitHub issues, creating branches, checking file existence, parsing JSON
- Manages transitions between workflow phases
- Enforces retry limits and error handling

**The Delegates (Non-Deterministic Agents):**
- Specialized agents spawned by the ADW for specific cognitive tasks
- Each agent is a fresh instance: executes its task, saves its work, terminates
- Agents receive only the context needed for their specific phase
- Results pass via artifacts (files), not conversation history

**Example flow:**
```python
# adw_plan_build.py orchestrates the workflow

# 1. Fetch work (deterministic)
issue = github_api.get_issue(issue_number)

# 2. Classify the task (agentic)
task_type = spawn_agent("classifier", issue.body)

# 3. Generate plan (agentic, fresh instance)
plan_file = spawn_agent(f"/{task_type}", issue.title)

# 4. Implement plan (agentic, fresh instance)
spawn_agent("/implement", plan_file)

# 5. Create PR (deterministic)
github_api.create_pull_request(branch, plan_file)
```

Notice: The Implementer agent never sees the Planner's reasoning—only the final plan file. This prevents context pollution.

## Concrete Examples

### Plan-Build Pipeline (`adw_plan_build.py`)

The foundational ADW for feature development:

1. **Classifier Agent**: Reads GitHub issue, classifies as `/chore`, `/bug`, or `/feature`
2. **Planner Agent**: Runs appropriate meta-prompt template, generates detailed spec file
3. **Implementer Agent**: Fresh instance reads spec, writes code
4. **Review**: ADW creates Pull Request with plan + implementation

Real result: 17-minute autonomous run producing a complete feature with tests while engineer was AFK.

### Test-Resolve Workflow (`adw_test.py`)

A self-healing validation workflow:

1. **Run Tests**: Execute linting, unit tests, E2E tests
2. **Parse Output**: Convert results to structured JSON
3. **Resolve Failures**: For each failure, spawn a Resolver Agent with specific error message
4. **Retry Loop**: Rerun tests to verify fix, retry up to configured limit (e.g., 4 attempts)

The Python script enforces retry limits (deterministic); agents figure out how to fix code (non-deterministic).

### Zero-Touch Engineering (`adw_sdlc_zte_iso.py`)

Advanced workflow for low-risk tasks:

Plan → Build → Test → Review → Document → **Ship**

The "Ship" phase: If all steps pass and Review agent detects no blocking issues, ADW automatically merges code and pushes to production—removing the human review step entirely.

## ADWs and the PiTER Framework

ADWs enable autonomous, out-of-loop operation through the **PiTER** framework:

- **Prompt**: Work defined in structured input (GitHub Issue) rather than chat window
- **Trigger**: ADW launched automatically via webhooks (event-driven) or cron jobs (polling)
- **Environment**: Runs on dedicated agent environment (Mac mini, cloud VM), isolated from engineer's workstation
- **Review**: Outputs artifacts (PRs, screenshots, logs) for asynchronous verification

This allows engineers to queue work from anywhere—even a phone—and have ADWs execute autonomously while AFK.

## ADWs as Through-Agent Leverage

ADWs are **through-agent leverage points**: they live in your codebase (typically in an `adws/` directory) and flow through every agent session. As you refine an ADW based on real failures, every future execution becomes more reliable.

This shifts the engineer's role from "doing the work" to "building the system that does the work."

**Example:** If an agent fails to write tests, you don't just fix that instance—you update the ADW to enforce test creation. Now every future feature automatically gets tests.

## Building Versus Using ADWs

You don't need to build ADWs to benefit from tactical AI coding principles:

- **Start with templates** (meta-prompts in `.claude/commands/`) to encode practices
- **Use fresh agent instances** manually (boot agent, plan; close; boot new agent, implement)
- **Add conditional documentation** to guide context loading
- **Build ADWs when** you're running the same workflow repeatedly and automation provides real value

ADWs are the automation layer—powerful but not required for the foundational practices.

---

*ADWs represent the highest abstraction in the tactical AI coding framework. For foundational context management principles, see [Context Engineering](/definitions/context-engineering). For the complete framework, see Indy Dev Dan's [Tactical Agentic Coding](https://agenticengineer.com/tactical-agentic-coding).*
