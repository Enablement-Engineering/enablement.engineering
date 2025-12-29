---
title: "Context Engineering for Alt-Text: An Annotated Prompt"
description: "A glass-box look at how I engineer prompts for accessibility work—showing the actual structure and reasoning."
publishedAt: 2024-10-15
type: "prompt-lab"
featured: false
tags: ["prompt-engineering", "accessibility", "alt-text", "glass-box"]
---

Most AI-generated alt text is mediocre because it lacks context. The model sees an image in isolation and describes what's visually present. But good alt text requires understanding *why* the image exists and *what role* it plays.

This is a context engineering problem.

## The Naive Approach

```
Describe this image for a blind user.
```

This produces descriptions like: "A bar chart with blue and orange bars showing different heights."

Technically accurate. Functionally useless.

## The Context-Engineered Approach

Here's an actual prompt structure I use, annotated with the reasoning:

```markdown
## Context Extraction

**Document Type**: [Academic paper / Marketing page / Documentation / etc.]
**Surrounding Text**: [The paragraph before and after the image]
**Section Purpose**: [What is this section trying to accomplish?]
**Likely Author Intent**: [Why did the author include this image here?]

## Image Analysis

Based on the context above, analyze this image:

1. **Primary Information**: What is the main point this image conveys?
2. **Supporting Details**: What secondary information supports the main point?
3. **Relationships**: What comparisons or relationships does the image show?
4. **Omittable Details**: What visual elements are decorative rather than informational?

## Alt Text Generation

Generate alt text that:
- Conveys the PRIMARY information first (front-load meaning)
- Includes relationships and comparisons when relevant
- Stays under 150 characters when possible (screen reader ergonomics)
- Uses language consistent with the surrounding text
- Omits purely decorative details

If the image is purely decorative, indicate this rather than describing it.

## Confidence Assessment

Rate your confidence (high/medium/low) and explain any uncertainty.
Flag for human review if confidence is low or the image serves a critical function.
```

## Why This Works

**Context grounding** prevents generic descriptions. The model knows this isn't just "a chart" but "a chart in an academic paper's results section, following text about cost comparisons."

**Role-based framing** shifts from "describe what you see" to "fulfill the image's purpose for someone who can't see it."

**Structured output** ensures consistent quality and enables programmatic processing.

**Confidence flagging** maintains the glass-box principle—uncertainty is surfaced, not hidden.

## Before and After

**Without context engineering**:
> "A bar chart showing three bars of different heights in blue, with values 15, 25, and 36."

**With context engineering**:
> "Cost comparison: traditional remediation ranges from $15-36 per document, while AI-assisted approach costs $0.20—a 75x reduction."

The second version conveys the *meaning* of the chart, not just its visual properties.

## The Broader Pattern

This isn't just about alt text. The pattern applies whenever you need AI to:

1. Understand purpose, not just content
2. Make contextual judgments
3. Produce output that serves a specific function

Extract context → Frame the role → Structure the output → Assess confidence.

That's the orchestration layer in action.

---

*Showing the prompt is the point. Glass-box AI means making the reasoning visible, not just the results.*
