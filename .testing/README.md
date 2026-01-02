# Testing Infrastructure

Atomic documentation and procedures for automated site testing via Claude skills and UV scripts.

## Structure

```
.testing/
├── site-map/          # Page-level documentation (one file per page)
├── components/        # Component documentation (one file per component)
├── procedures/        # Reusable test procedures
├── prompts/           # Claude prompts for testing agents
├── scripts/           # UV single-file scripts
└── agents/            # Claude skill definitions
```

## Philosophy

**Atomic Notes**: Each file documents ONE thing completely. Files can be composed together for complex testing scenarios.

**Composability**: Procedures reference site-map and component files. Scripts execute procedures. Skills orchestrate scripts.

## Usage

### Run a single test procedure
```bash
uv run .testing/scripts/test-navigation.py
```

### Compose a full audit
```bash
claude -p "Run the accessibility audit using procedures in .testing/procedures/"
```

## File Naming Convention

- Site map: `{page-path}.md` (e.g., `home.md`, `writing-index.md`)
- Components: `{component-name}.md` (e.g., `navigation.md`, `footer.md`)
- Procedures: `{domain}-{action}.md` (e.g., `a11y-keyboard-nav.md`)
- Scripts: `{test-type}.py` (e.g., `lighthouse.py`)
