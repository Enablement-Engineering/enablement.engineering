# Procedure: Responsive Breakpoint Validation

**Domain**: Visual Design
**Scope**: All pages at key breakpoints
**Tools Required**: Browser automation (MCP)

## Prerequisites

- Site running at `http://localhost:4321`
- Browser MCP tools available

## Breakpoints

Reference: Tailwind default breakpoints

```yaml
breakpoints:
  mobile:
    width: 375
    height: 667
    name: "iPhone SE"

  tablet:
    width: 768
    height: 1024
    name: "iPad"

  desktop:
    width: 1280
    height: 800
    name: "Desktop"

  wide:
    width: 1536
    height: 864
    name: "Wide Desktop"
```

## Steps

### 1. For Each Page

```yaml
pages:
  - /
  - /about
  - /writing
  - /work
  - /resources
  - /services
  - /contact
```

### 2. For Each Breakpoint

```yaml
actions:
  1. Resize viewport to breakpoint dimensions
  2. Capture screenshot
  3. Validate layout assertions
  4. Check for horizontal overflow
  5. Verify text readability
```

### 3. Layout Assertions by Breakpoint

#### Mobile (375px)

```yaml
navigation:
  - Desktop nav hidden (md:hidden)
  - Mobile hamburger visible
  - Logo visible and not truncated

content:
  - Single column layout
  - No horizontal scroll
  - Touch targets >= 44x44px
  - Text size >= 16px (no zoom required)

images:
  - Scale to container width
  - Maintain aspect ratio
  - No overflow
```

#### Tablet (768px)

```yaml
navigation:
  - Desktop nav visible (md:flex)
  - Mobile hamburger hidden

content:
  - 2-column grid where appropriate
  - Service cards in 2-column layout
  - Article cards may be 2-column

spacing:
  - Increased padding vs mobile
  - Comfortable reading width
```

#### Desktop (1280px)

```yaml
navigation:
  - Full desktop navigation
  - All nav items visible

content:
  - Max-width container (6xl = 1152px)
  - 3-column grids where appropriate
  - Comfortable whitespace

grid:
  - 12-column grid active
  - Content properly aligned to grid
```

### 4. Check for Common Issues

```yaml
horizontal_overflow:
  test: document.body.scrollWidth > document.body.clientWidth
  issue: Content causes horizontal scroll

text_truncation:
  test: Elements with text-overflow or line-clamp
  verify: Truncation is intentional and accessible

touch_target_size:
  test: All clickable elements >= 44x44px on mobile
  wcag: 2.5.5 Target Size

font_scaling:
  test: Text remains readable at 200% zoom
  wcag: 1.4.4 Resize Text
```

### 5. Capture Evidence

For each page × breakpoint combination:

```yaml
capture:
  - Full page screenshot
  - Navigation state
  - First content block
  - Footer visibility
```

## Pass Criteria

- [ ] No horizontal overflow at any breakpoint
- [ ] Navigation adapts correctly at 768px breakpoint
- [ ] Content readable without horizontal scroll
- [ ] Touch targets adequate on mobile
- [ ] Images scale properly
- [ ] Grid layout consistent with design system

## Output Format

```json
{
  "procedure": "visual-responsive-breakpoints",
  "timestamp": "ISO-8601",
  "pages_tested": 7,
  "breakpoints_tested": 4,
  "results": [
    {
      "page": "/",
      "breakpoint": "mobile",
      "viewport": "375x667",
      "screenshot": "screenshots/home-mobile.png",
      "issues": [],
      "pass": true
    }
  ],
  "summary": {
    "total_tests": 28,
    "passing": 28,
    "failing": 0
  },
  "result": "pass|fail"
}
```
