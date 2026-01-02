---
title: "Equalify PDF to Semantic Markup Converter"
client: "University of Illinois Chicago"
description: "Transforming inaccessible academic PDFs into adaptive, semantic web experiences at scale."
engagement: "build"
duration: "Ongoing (beta release January 2026)"
featured: true
publishedAt: 2024-09-01
modifiedAt: 2026-01-02
tags: ["accessibility", "multi-agent", "ai-orchestration", "higher-education", "pdf-transformation"]
results:
  - metric: "Cost reduction target"
    value: "95-99% vs manual remediation"
  - metric: "Output format"
    value: "Permanent, semantic MDX"
  - metric: "Integration"
    value: "Canvas LMS native"
---

## The Challenge

Academic PDFs are inaccessible by default. They're closed-source, visual-first, static formats where accessibility is bolted on as an afterthought within Adobe's walled garden.

Manual remediation costs approximately $100 per page and takes weeks. UIC's Digital Accessibility Services needed a scalable solution for hundreds of documents destined for Canvas LMS.

## The Approach

Instead of trying to fix broken PDFs, we extract content and semantics into MDX — a format that's human-readable, AI-readable, and program-readable.

**The pipeline:**

```
PDF Document
    ↓
[Extraction Layer - Docling/OCR]
    ↓
Raw text + layout information
    ↓
[Semantic Translation - LLM Agents]
    ↓
Structured MDX with semantic components
    ↓
[User Agent Rendering - Canvas/Web]
    ↓
Adaptive presentation based on user needs
```

**Multi-agent architecture:**
- Heading structure agent (infers hierarchy from visual layout)
- Data table agent (extracts semantic table structure)
- Chart agent (extracts data + generates descriptions)
- Image agent (context-aware alt text generation)

Each agent is narrow, testable, and auditable — a trusted procedure.

## The Innovation

We don't just convert PDFs. We liberate content into adaptive, user-agent-negotiated experiences.

**The "last mile delivery" insight:**

PDFs own the entire rendering stack — hostile to accessibility. Semantic markup lets user agents handle the last mile. Same content, different presentations based on user needs:

- Tables become sortable, interactive, sonified, or spoken
- Charts get extracted data + alt text + long descriptions + sonification
- Content becomes truly multi-modal and personalized

**Skill-ready design:**

The pipeline is architected to become a packageable skill — a trusted procedure any organization can deploy. Each agent in the chain is a governed, testable procedure.

## Results

- **Cost reduction target:** 95-99% vs manual remediation
- **Output:** Permanent, citable, semantically rich accessible content
- **Integration:** Canvas LMS native
- **Beta release:** January 2026

## Speaking

Presenting this work at **CSUN Assistive Technology Conference 2026**: "Escaping to Semantic Freedom"
