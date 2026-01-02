# Prompt: Pre-Deploy Check

Quick validation before deployment.

## Prompt Template

```
Run pre-deployment checks on http://localhost:4321

## Quick Checks (Parallel)

Run these simultaneously:

1. **Link Check** (internal only, fast)
   ```bash
   npx linkinator http://localhost:4321 --recurse --skip-external
   ```

2. **Lighthouse Quick**
   ```bash
   npx lighthouse http://localhost:4321 --preset=desktop --only-categories=performance,accessibility --quiet
   ```

## Pass Criteria

- [ ] No broken internal links
- [ ] Lighthouse Performance >= 90
- [ ] Lighthouse Accessibility >= 90
- [ ] Site loads without console errors

## Fail Fast

Stop on first failure and report:
- What failed
- Specific URL/element
- Quick fix recommendation

## Output

Brief pass/fail summary:
```
Pre-Deploy Check Results
========================
Links: PASS (47/47 valid)
Performance: PASS (94)
Accessibility: PASS (100)

Ready to deploy: YES
```

Or on failure:
```
Pre-Deploy Check Results
========================
Links: FAIL
  - /about links to /nonexistent (404)
  - Fix: Update link or create page

Ready to deploy: NO
```
```

## Usage

```bash
# Quick check before push
claude -p "Run pre-deploy check on http://localhost:4321"
```

## Time Estimate

~2-3 minutes
