---
description: Quick pre-deploy validation checking links, basic accessibility, and performance thresholds
allowed-tools: Bash(uv:*), Bash(npx:*), Bash(curl:*), Read
---

# Quick Audit (Pre-Deploy Check)

Fast validation before deployment. Runs automated checks only.

## Target

Check target: $ARGUMENTS (default: http://localhost:4321)

## Checks (Sequential for Speed)

### 1. Site Health Check
```bash
curl -I $URL 2>/dev/null | head -1
```
Expected: `HTTP/1.1 200 OK` or similar

### 2. Internal Links
```bash
npx linkinator $URL --recurse --skip-external --format csv 2>/dev/null | grep -c "broken"
```
Pass condition: 0 broken links

### 3. Lighthouse Quick
```bash
npx lighthouse $URL --preset=desktop --only-categories=performance,accessibility --quiet --output=json 2>/dev/null | jq '.categories | to_entries[] | "\(.key): \(.value.score * 100)"'
```
Pass conditions:
- Performance >= 90
- Accessibility >= 90

### 4. axe-core Quick (Homepage Only)
```bash
uv run .testing/scripts/axe-audit.py $URL --min-severity serious --quiet
```
Pass condition: 0 critical or serious violations

## Output Format

```
=================================
QUICK AUDIT: $URL
=================================

Site Health:    PASS ✓
Links:          PASS ✓ (47/47 valid)
Performance:    PASS ✓ (94/100)
Accessibility:  PASS ✓ (100/100)
axe-core:       PASS ✓ (0 serious violations)

---------------------------------
READY TO DEPLOY: YES
=================================
```

Or on failure:

```
=================================
QUICK AUDIT: $URL
=================================

Site Health:    PASS ✓
Links:          FAIL ✗
  - /about → /nonexistent (404)
Performance:    PASS ✓ (94/100)
Accessibility:  PASS ✓ (100/100)
axe-core:       FAIL ✗
  - 1 serious: color-contrast

---------------------------------
READY TO DEPLOY: NO

Fix these issues:
1. Remove/fix broken link on /about
2. Fix color contrast (see axe report)
=================================
```

## Exit Conditions

- All pass → Report ready to deploy
- Any fail → List failures with quick fix hints

## Timing

Expected: 2-3 minutes total
