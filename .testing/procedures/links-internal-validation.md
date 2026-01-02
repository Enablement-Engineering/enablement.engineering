# Procedure: Internal Link Validation

**Domain**: Functional QA
**Scope**: All internal links across site
**Tools Required**: UV script, HTTP client

## Prerequisites

- Site running at `http://localhost:4321`
- Python with `httpx` available

## Steps

### 1. Crawl Site for Links

Starting from homepage, extract all internal links:

```python
# Pseudocode for link extraction
pages_to_crawl = ["/"]
crawled = set()
all_links = []

while pages_to_crawl:
    page = pages_to_crawl.pop()
    if page in crawled:
        continue

    html = fetch(page)
    links = extract_links(html)

    for link in links:
        if is_internal(link):
            all_links.append({
                "source": page,
                "target": link.href,
                "text": link.text
            })
            if link.href not in crawled:
                pages_to_crawl.append(link.href)

    crawled.add(page)
```

### 2. Validate Each Link

```yaml
for_each_link:
  action: HTTP HEAD request to target URL

  valid_responses:
    - 200 OK
    - 301/302 Redirect (follow and verify final destination)

  invalid_responses:
    - 404 Not Found → BROKEN LINK
    - 500+ Server Error → SERVER ISSUE
    - Timeout → UNREACHABLE
```

### 3. Check Anchor Links

```yaml
for_each_anchor_link:
  # Links like /about#philosophy

  action: Verify target element exists
  check: document.querySelector(anchor_id) !== null

  common_issues:
    - ID doesn't exist on page
    - ID has typo
    - ID was removed in refactor
```

### 4. Validate Link Text

```yaml
accessibility_check:
  rule: Link text should be descriptive

  problematic_patterns:
    - "click here"
    - "read more"
    - "learn more" (without context)
    - Single characters or icons without labels

  good_patterns:
    - "View all writing →" (describes destination)
    - "Book a discovery call" (describes action)
    - "Read case study" (describes content type)
```

## Expected Internal Links

Reference: `.testing/site-map/*.md`

```yaml
navigation:
  - href: "/"
  - href: "/writing"
  - href: "/work"
  - href: "/resources"
  - href: "/about"

footer:
  - href: "/about"

home_page:
  - href: "/approach"
  - href: "/definitions/glass-box"
  - href: "/work/uic-equalify"
  - href: "/writing/what-is-enablement-engineering"
  - href: "/writing/alt-text-context-engineering"
  - href: "/contact"
  - href: "/services"
```

## Pass Criteria

- [ ] All internal links return 200 OK
- [ ] All anchor links have matching element IDs
- [ ] No orphaned pages (pages with no incoming links)
- [ ] Link text is descriptive (no generic "click here")

## Output Format

```json
{
  "procedure": "links-internal-validation",
  "timestamp": "ISO-8601",
  "base_url": "http://localhost:4321",
  "summary": {
    "total_links": 47,
    "valid": 45,
    "broken": 2,
    "warnings": 3
  },
  "broken_links": [
    {
      "source": "/about",
      "target": "/nonexistent",
      "text": "Learn more",
      "status": 404
    }
  ],
  "warnings": [
    {
      "source": "/home",
      "target": "/contact",
      "text": "click here",
      "issue": "Generic link text"
    }
  ],
  "result": "pass|fail"
}
```
