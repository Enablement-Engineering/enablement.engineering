---
description: Interactive browser exploration of the site to understand structure, discover issues, and document findings
allowed-tools: Read, Write, mcp__claude-in-chrome__*, mcp__playwright__*
---

# Site Exploration

Interactive browser exploration to understand site structure and discover issues.

## Target

Explore: $ARGUMENTS (default: http://localhost:4321)

## Exploration Protocol

### 1. Initial Survey

Navigate to homepage and capture:
- Page title
- Viewport dimensions
- Navigation structure
- Main content sections
- Footer content

### 2. Navigation Discovery

Map the site structure by:
1. Extracting all navigation links
2. Visiting each linked page
3. Documenting page purposes
4. Noting any missing pages (404s)

Build a site tree:
```
/
├── /writing
│   └── /writing/[slug]
├── /work
│   └── /work/[slug]
├── /resources
│   └── /definitions/[slug]
│   └── /ladders/[slug]
├── /services
├── /about
├── /contact
└── /approach
```

### 3. Component Inventory

Identify reusable components:
- Navigation (desktop + mobile variants)
- Footer
- Cards (article, project, definition)
- Buttons/CTAs
- Form elements
- Icons/Logo

### 4. Interactive Elements

Find and test all interactive elements:
- Links (internal and external)
- Buttons
- Form inputs
- Tab controls
- Mobile menu toggle
- Scroll behaviors

### 5. Responsive Checkpoints

Resize viewport and note changes:

```yaml
checkpoints:
  - 375px: Mobile layout
  - 768px: Tablet/transition point
  - 1024px: Desktop begins
  - 1280px: Full desktop
```

At each checkpoint, note:
- Navigation changes
- Grid layout changes
- Content reflow
- Any breakage

### 6. Issue Discovery

As you explore, note:
- Broken links
- Layout issues
- Accessibility concerns
- Performance observations
- UX friction points

## Documentation Output

Update or create site documentation:

### Site Map Update
If issues found, update `.testing/site-map/` files with:
- New pages discovered
- Corrected link targets
- Updated section descriptions

### Issue Log
Create `.testing/reports/exploration-{date}.md`:

```markdown
# Site Exploration Report

**Date**: {date}
**URL**: {url}

## Site Structure

[Tree diagram of pages]

## Pages Visited

| Page | Title | Status | Notes |
|------|-------|--------|-------|
| / | Enablement Engineering | OK | - |
| /about | About | OK | - |
| ... | ... | ... | ... |

## Components Found

- Navigation: Desktop + Mobile variants
- Footer: Minimal with social links
- Cards: Article, Project, Definition types
- ...

## Interactive Elements

| Element | Location | Behavior | Status |
|---------|----------|----------|--------|
| Mobile menu | Nav | Toggle open/close | OK |
| Tab filter | /resources | Switch content | BUG |
| ... | ... | ... | ... |

## Responsive Observations

| Breakpoint | Key Changes | Issues |
|------------|-------------|--------|
| 375px | Single column, hamburger | None |
| 768px | Desktop nav appears | None |
| ... | ... | ... |

## Issues Discovered

### Critical
[Blocking issues]

### Notable
[Important but not blocking]

### Minor
[Polish items]

## Recommendations

[What to fix and investigate further]
```

## Exploration Commands

Use these browser actions:

```yaml
navigate: Go to URL
snapshot: Capture accessibility tree
screenshot: Visual capture (if needed)
click: Interact with element
type: Enter text
resize: Change viewport
evaluate: Run JavaScript
```

## Execute

1. Navigate to homepage
2. Capture initial state
3. Map navigation structure
4. Visit each page
5. Test interactive elements
6. Check responsive breakpoints
7. Document all findings
8. Update site-map if needed
