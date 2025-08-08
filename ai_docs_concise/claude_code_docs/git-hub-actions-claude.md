# Claude Code GitHub Actions (Concise)

**Purpose:**
Integrate Claude Code into GitHub workflows for automated PR creation, code review, bug fixing, and feature implementation via `@claude` comments.

**Key Capabilities:**
- Turn issues into PRs, implement features, and fix bugs automatically.
- Follows project standards via `CLAUDE.md`.
- Secure by default (runs on GitHub runners, uses secrets).

**Setup Essentials:**
- Install the Claude GitHub App and add your API key as a secret.
- Copy the workflow file to `.github/workflows/`.
- Tag `@claude` in PRs/issues to trigger automation.

**Best Practices:**
- Use `CLAUDE.md` to define standards and review criteria.
- Always use GitHub Secrets for API keys.
- Limit permissions and review Claude's suggestions before merging.
- Monitor usage and costs for optimization.

**Signal:**
GitHub Actions integration brings agentic automation to your repo, enabling hands-off code generation, review, and maintenance aligned with your standards.
