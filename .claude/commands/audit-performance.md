---
description: Core Web Vitals and performance audit using Lighthouse, with Astro-specific optimizations analysis
allowed-tools: Read, Glob, Grep, Bash(uv:*), Bash(npx:*), mcp__claude-in-chrome__*, mcp__playwright__*
---

# Performance Engineering Audit

You are a Performance Engineer auditing for Core Web Vitals optimization and Astro-specific performance patterns.

## Context Files

Read these first:
- `AGENTS.md` - Stack info (Astro 5 + React + Tailwind)
- `.testing/site-map/*.md` - Page inventory
- `src/layouts/Layout.astro` - Base layout structure
- `src/styles/globals.css` - CSS loading

## Phase 1: Lighthouse Audit

Run Lighthouse on target ($ARGUMENTS or http://localhost:4321):

```bash
uv run .testing/scripts/lighthouse-audit.py $URL --threshold 90
```

Or for detailed HTML report:
```bash
npx lighthouse $URL --preset=desktop --output=html --output-path=.testing/reports/lighthouse.html --view
```

### Target Scores
| Category | Minimum | Target |
|----------|---------|--------|
| Performance | 90 | 95+ |
| Accessibility | 90 | 100 |
| Best Practices | 90 | 100 |
| SEO | 90 | 100 |

## Phase 2: Core Web Vitals Analysis

### Largest Contentful Paint (LCP) < 2.5s

Check via browser:
```javascript
// Identify LCP element
new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1];
  console.log('LCP element:', lastEntry.element);
  console.log('LCP time:', lastEntry.startTime);
}).observe({type: 'largest-contentful-paint', buffered: true});
```

Common LCP issues to check:
- [ ] Hero image loading (is it optimized?)
- [ ] Font loading blocking render
- [ ] Above-fold content complete on first paint

### Cumulative Layout Shift (CLS) < 0.1

Check for shift sources:
```javascript
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.hadRecentInput) continue;
    console.log('Layout shift:', entry.value, entry.sources);
  }
}).observe({type: 'layout-shift', buffered: true});
```

Common CLS issues:
- [ ] Images without dimensions
- [ ] Font swap causing text reflow
- [ ] Dynamic content injection
- [ ] Navigation height changes

### Interaction to Next Paint (INP) < 200ms

Test interactive elements:
- Mobile menu toggle
- Tab filter on Resources page
- Link hovers

## Phase 3: Astro-Specific Analysis

### Island Architecture

Check component hydration:
```bash
# Find all client: directives
grep -r "client:" src/
```

Current hydrated components:
- `Logo.tsx` uses `client:load`

**Question**: Does Logo need hydration? If purely visual, consider:
- Inline SVG (zero JS)
- `client:visible` (defer until visible)
- Static image (no hydration)

### Bundle Analysis

Check what JS is shipped:
```bash
npm run build
ls -la dist/_astro/*.js
```

Astro should ship minimal JS. Investigate any large bundles.

### Static Generation

Verify pages are statically generated:
```bash
# Check build output
npm run build
find dist -name "*.html" | head -20
```

## Phase 4: Asset Optimization

### Images

Check image handling:
- [ ] Using Astro `<Image>` component?
- [ ] WebP/AVIF formats available?
- [ ] Proper sizing for different viewports?
- [ ] Lazy loading on below-fold images?

### Fonts

Analyze font loading:
```css
/* Current: Google Fonts import in globals.css */
@import url('https://fonts.googleapis.com/css2?family=Manrope...');
```

Recommendations:
- [ ] Consider self-hosting fonts
- [ ] Use `font-display: swap`
- [ ] Subset to used characters
- [ ] Preconnect to Google Fonts

### CSS

Check CSS delivery:
- [ ] Critical CSS inlined?
- [ ] Unused CSS removed?
- [ ] CSS minified in production?

## Phase 5: Network Optimization

Using browser network panel or:
```bash
npx lighthouse $URL --output=json | jq '.audits["network-requests"]'
```

Check:
- [ ] Preconnect hints for external origins
- [ ] Preload critical assets
- [ ] Efficient cache headers
- [ ] Compressed assets (gzip/brotli)

## Browser Testing

Navigate to site and capture:

1. **Network waterfall**: What loads first?
2. **Coverage report**: Unused CSS/JS?
3. **Performance timeline**: Any long tasks?

## Output Format

Create report at `.testing/reports/performance-audit-{date}.md`:

```markdown
# Performance Audit Report

**Date**: {date}
**URL**: {url}
**Tool**: Lighthouse {version}

## Lighthouse Scores

| Category | Score | Status |
|----------|-------|--------|
| Performance | {score} | PASS/FAIL |
| Accessibility | {score} | PASS/FAIL |
| Best Practices | {score} | PASS/FAIL |
| SEO | {score} | PASS/FAIL |

## Core Web Vitals

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| LCP | {value} | < 2.5s | PASS/FAIL |
| CLS | {value} | < 0.1 | PASS/FAIL |
| INP | {value} | < 200ms | PASS/FAIL |

## Findings

### High Impact
[Issues that significantly affect performance]

### Astro Optimizations
[Specific Astro improvements]

### Asset Optimization
[Image, font, CSS recommendations]

## Recommendations

| Issue | Impact | Effort | Recommendation |
|-------|--------|--------|----------------|
| ... | High/Med/Low | Easy/Med/Hard | ... |

## Code Changes

[Specific code snippets for each fix]
```

## Execute

1. Run Lighthouse audit
2. Analyze Core Web Vitals
3. Check Astro hydration patterns
4. Audit asset optimization
5. Generate prioritized recommendations
