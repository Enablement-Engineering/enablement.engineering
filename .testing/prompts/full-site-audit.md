# Prompt: Full Site Audit

Use this prompt to orchestrate a comprehensive site audit.

## Prompt Template

```
Run a comprehensive audit on http://localhost:4321

## Audit Scope

Execute the following audits in order:

1. **Accessibility (axe-core)**
   - Run: `uv run .testing/scripts/axe-audit.py http://localhost:4321 --crawl`
   - Threshold: No critical or serious violations
   - Reference: `.testing/site-map/*.md` for page inventory

2. **Link Validation**
   - Run: `uv run .testing/scripts/link-checker.py http://localhost:4321 --crawl`
   - Threshold: No broken internal links
   - Check anchors and external links

3. **Performance (Lighthouse)**
   - Run: `uv run .testing/scripts/lighthouse-audit.py http://localhost:4321`
   - Threshold: All scores >= 90
   - Note any Core Web Vitals issues

## Output Requirements

After running all audits:

1. Create a summary report at `.testing/reports/audit-summary-{date}.md`
2. List all issues found, grouped by severity
3. Provide specific remediation recommendations
4. Reference the atomic documentation in `.testing/` for context

## Context Files

Read these files for context before auditing:
- `.testing/site-map/*.md` - Expected page structure
- `.testing/components/*.md` - Component specifications
- `.testing/procedures/*.md` - Detailed test procedures
```

## Expected Behavior

Claude will:

1. Run the axe-core script and capture results
2. Run the link-checker script and capture results
3. Run the Lighthouse script and capture results
4. Aggregate findings into a summary report
5. Provide actionable recommendations

## Usage

```bash
# Run via Claude CLI
claude -p "$(cat .testing/prompts/full-site-audit.md)"

# Or interactively
claude
> Run the full site audit using the prompt in .testing/prompts/full-site-audit.md
```
