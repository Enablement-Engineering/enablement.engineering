# Procedure: Keyboard Navigation Audit

**Domain**: Accessibility
**Scope**: All interactive elements
**Tools Required**: Browser automation (MCP)

## Prerequisites

- Site running at `http://localhost:4321`
- Browser MCP tools available

## Steps

### 1. Initialize Browser Session

```
Navigate to http://localhost:4321
Capture initial page state
```

### 2. Test Skip Link

```yaml
action: Press Tab key once
expected: Skip link becomes visible
verify:
  - Skip link has visible focus indicator
  - Skip link text is "Skip to main content"

action: Press Enter on skip link
expected: Focus moves to main content
verify:
  - Focus is on element with id="main-content"
  - Page scrolls to main content area
```

### 3. Test Navigation Tab Order

```yaml
starting_point: After skip link activation, press Tab

expected_order:
  1. Logo link (href="/")
  2. Writing link (href="/writing")
  3. Projects link (href="/work")
  4. Resources link (href="/resources")
  5. About link (href="/about")

verify_each:
  - Visible focus indicator (ring)
  - Focus matches visual position (left to right)
  - No hidden elements receive focus
```

### 4. Test Mobile Menu (Viewport < 768px)

```yaml
setup: Resize viewport to 375x667 (mobile)

action: Tab to mobile menu toggle button
expected: Button receives focus
verify:
  - aria-expanded="false" initially
  - Button has accessible name "Toggle navigation menu"

action: Press Enter/Space on toggle
expected: Menu opens
verify:
  - aria-expanded="true"
  - Mobile menu items become visible
  - First menu item is next in tab order

action: Press Escape
expected: Menu closes
verify:
  - aria-expanded="false"
  - Focus returns to toggle button
```

### 5. Test Content Area

```yaml
action: Continue tabbing through main content
expected: All interactive elements receive focus in logical order

elements_to_verify:
  - All links are focusable
  - All buttons are focusable
  - No focus traps (can always tab forward/backward)
  - Shift+Tab reverses order correctly
```

## Pass Criteria

- [ ] All interactive elements reachable via keyboard
- [ ] Tab order follows visual layout (left→right, top→bottom)
- [ ] Focus indicators visible on all focused elements
- [ ] No keyboard traps
- [ ] Skip link functional
- [ ] Mobile menu keyboard accessible

## Output Format

```json
{
  "procedure": "a11y-keyboard-navigation",
  "url": "http://localhost:4321",
  "timestamp": "ISO-8601",
  "result": "pass|fail",
  "issues": [
    {
      "element": "selector or description",
      "issue": "description of problem",
      "severity": "critical|serious|moderate|minor",
      "wcag": "2.1.1 Keyboard"
    }
  ]
}
```
