# Procedure: Heading Hierarchy Audit

**Domain**: Accessibility
**Scope**: All pages
**Tools Required**: Browser automation (MCP), Read tool

## Prerequisites

- Site running at `http://localhost:4321`
- Access to site-map documentation

## Reference

Load site map from: `.testing/site-map/*.md`

## Steps

### 1. For Each Page in Site Map

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

### 2. Extract Heading Structure

```javascript
// Execute in browser context
const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
return headings.map(h => ({
  level: parseInt(h.tagName[1]),
  text: h.textContent.trim(),
  selector: generateSelector(h)
}));
```

### 3. Validate Hierarchy Rules

```yaml
rule_1_single_h1:
  description: Each page should have exactly one H1
  check: headings.filter(h => h.level === 1).length === 1
  severity: serious

rule_2_no_skipping:
  description: Heading levels should not skip (e.g., H1 → H3)
  check: |
    for each heading at index i > 0:
      if heading[i].level > heading[i-1].level + 1:
        return false
  severity: serious

rule_3_logical_nesting:
  description: Subheadings should be nested under parent headings
  check: Visual sections match heading structure
  severity: moderate

rule_4_descriptive_text:
  description: Heading text should describe section content
  check: Manual review or AI analysis
  severity: minor
```

### 4. Generate Heading Outline

For each page, create outline:

```
Page: /about
├── H1: About
│   ├── H2: Background
│   ├── H2: Philosophy
│   │   ├── H3: Ladders, not walls.
│   │   ├── H3: Mirrors, not slot machines.
│   │   └── H3: Glass box, not black box.
│   ├── H2: Beyond Work
│   └── H2: Get in Touch
```

### 5. Cross-Reference with Site Map

Compare actual headings against documented structure in `.testing/site-map/{page}.md`

## Pass Criteria

- [ ] Every page has exactly one H1
- [ ] No heading level skips
- [ ] Heading order matches visual hierarchy
- [ ] Heading text is descriptive

## Expected Results by Page

### Home (/)
```
H1: AI systems that extend human capability.
  H2: How I Can Help
    H3: For Small Businesses Going AI-Native
    H3: For Individuals Building Personal Systems
    H3: For Organizations Needing Accessible AI
  H2: Featured Work
  H2: Latest Writing
  H2: Ready to build agents you can trust?
```

### About (/about)
```
H1: About
  H2: Background
  H2: Philosophy
    H3: Ladders, not walls.
    H3: Mirrors, not slot machines.
    H3: Glass box, not black box.
  H2: Beyond Work
  H2: Get in Touch
```

## Output Format

```json
{
  "procedure": "a11y-heading-hierarchy",
  "timestamp": "ISO-8601",
  "pages": [
    {
      "url": "/",
      "h1_count": 1,
      "total_headings": 8,
      "issues": [],
      "outline": "..."
    }
  ],
  "result": "pass|fail",
  "summary": {
    "pages_checked": 7,
    "pages_passing": 7,
    "total_issues": 0
  }
}
```
