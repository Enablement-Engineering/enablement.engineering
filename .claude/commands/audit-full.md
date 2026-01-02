---
description: Orchestrated full site audit combining CSS, Accessibility, Performance, and QA perspectives into a comprehensive report
allowed-tools: Read, Glob, Grep, Bash(uv:*), Bash(npx:*), Task, mcp__claude-in-chrome__*, mcp__playwright__*
---

# Full Site Audit (Orchestrated)

You are a Senior Front-End Architect coordinating a comprehensive multi-perspective site audit.

## Target

Audit target: $ARGUMENTS (default: http://localhost:4321)

## Pre-Flight Checks

Before starting audits:

```bash
# Verify site is running
curl -I $URL 2>/dev/null | head -1
```

If site is not running, inform user to start dev server:
```bash
npm run dev
```

## Context Files

Read these for overall context:
- `.testing/README.md` - Testing infrastructure overview
- `.testing/INDEX.md` - Full asset index
- `AGENTS.md` - Stack and brand guidelines

## Audit Phases

Execute in this order, using the specialized commands:

### Phase 1: Automated Scans (Parallel)

Run these simultaneously for efficiency:

**Accessibility (axe-core)**:
```bash
uv run .testing/scripts/axe-audit.py $URL --crawl
```

**Link Validation**:
```bash
uv run .testing/scripts/link-checker.py $URL --crawl
```

**Lighthouse Performance**:
```bash
uv run .testing/scripts/lighthouse-audit.py $URL
```

Capture all outputs before proceeding.

### Phase 2: CSS & Visual Audit

Reference: `/audit-css` command

Using browser automation:
1. Navigate through all pages
2. Check brand color consistency
3. Verify typography scale
4. Test responsive breakpoints
5. Validate animation behavior

Key checks:
- [ ] Colors match brand tokens
- [ ] Contrast meets WCAG AA
- [ ] Typography is readable at all sizes
- [ ] Animations respect reduced-motion
- [ ] Grid container consistent

### Phase 3: Deep Accessibility Audit

Reference: `/audit-a11y` command

Beyond axe-core:
1. Manual keyboard navigation test
2. Heading hierarchy validation
3. Screen reader simulation
4. Focus indicator verification

Key checks:
- [ ] Skip link functional
- [ ] Tab order logical
- [ ] No keyboard traps
- [ ] Headings properly nested
- [ ] ARIA states correct

### Phase 4: Performance Deep Dive

Reference: `/audit-performance` command

Beyond Lighthouse:
1. Identify LCP element
2. Check for CLS sources
3. Analyze Astro hydration
4. Review asset optimization

Key checks:
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Minimal JS shipped
- [ ] Images optimized
- [ ] Fonts loaded efficiently

### Phase 5: Functional QA

Reference: `/audit-qa` command

User flow testing:
1. Test discovery journey
2. Test services inquiry flow
3. Test portfolio exploration
4. Test resource filtering

Key checks:
- [ ] All user flows complete
- [ ] No broken interactions
- [ ] Responsive at all breakpoints
- [ ] Edge cases handled

## Known Issues to Verify

From initial analysis, confirm status of:

1. **Resources page empty state bug**
   - "No resources found" visible when content exists
   - Location: /resources with "Ladders" tab active

2. **Duplicate navigation DOM**
   - Both mobile and desktop nav in DOM simultaneously
   - Check ARIA states are properly managed

3. **Logo hydration question**
   - Is `client:load` necessary for Logo component?
   - Performance impact assessment

## Output: Unified Report

Create comprehensive report at `.testing/reports/full-audit-{date}.md`:

```markdown
# Full Site Audit Report

**Date**: {date}
**URL**: {url}
**Auditor**: Claude (orchestrated)

## Executive Summary

| Domain | Status | Critical | Serious | Moderate |
|--------|--------|----------|---------|----------|
| Accessibility | PASS/FAIL | {n} | {n} | {n} |
| Performance | PASS/FAIL | {n} | {n} | {n} |
| Links | PASS/FAIL | {n} | {n} | {n} |
| Visual/CSS | PASS/FAIL | {n} | {n} | {n} |
| Functional QA | PASS/FAIL | {n} | {n} | {n} |

**Overall**: READY FOR DEPLOY / NEEDS FIXES

## Accessibility Findings

### Automated (axe-core)
[Summary of violations by severity]

### Manual Testing
[Keyboard, headings, screen reader results]

## Performance Findings

### Lighthouse Scores
| Category | Score |
|----------|-------|
| Performance | {n} |
| Accessibility | {n} |
| Best Practices | {n} |
| SEO | {n} |

### Core Web Vitals
| Metric | Value | Status |
|--------|-------|--------|
| LCP | ... | PASS/FAIL |
| CLS | ... | PASS/FAIL |
| INP | ... | PASS/FAIL |

### Optimization Opportunities
[Top improvements]

## Link Validation

- Total links: {n}
- Valid: {n}
- Broken: {n}
- Warnings: {n}

[List any broken links]

## Visual/CSS Findings

[Brand consistency, contrast, typography issues]

## Functional QA Findings

### User Flows
[Pass/fail for each flow]

### Responsive Behavior
[Issues at each breakpoint]

### Known Issues Status
1. Resources empty state: CONFIRMED/FIXED
2. Duplicate nav DOM: CONFIRMED/FIXED
3. Logo hydration: ANALYSIS

## Priority Remediation

| Priority | Issue | Domain | Effort | Fix |
|----------|-------|--------|--------|-----|
| P0 | ... | a11y | Easy | ... |
| P1 | ... | perf | Medium | ... |
| ... | ... | ... | ... | ... |

## Detailed Code Fixes

### Fix 1: [Title]
```[language]
[code]
```

[Continue for each fix]

## Recommendations

### Immediate (P0)
[Must fix before deploy]

### Short-term (P1)
[Fix within sprint]

### Long-term (P2+)
[Backlog items]

## Appendix

### Raw Reports
- axe-core: `.testing/reports/axe-{timestamp}.json`
- Links: `.testing/reports/links-{timestamp}.json`
- Lighthouse: `.testing/reports/lighthouse-{timestamp}.html`

### Testing Coverage
[Pages tested, components verified]
```

## Execute

1. Run pre-flight checks
2. Execute parallel automated scans
3. Perform CSS/visual audit via browser
4. Deep accessibility testing
5. Performance analysis
6. Functional QA testing
7. Aggregate all findings
8. Generate unified report with prioritized fixes
