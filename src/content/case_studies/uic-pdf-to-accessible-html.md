---
title: "AI-Powered PDF → Accessible HTML Conversion"
client: "University of Illinois Chicago (UIC)"
sector: "Higher Education"
problem: "Faculty materials locked in PDFs create accessibility and maintenance burdens."
ladderPatterns: ["Alt Text Translator", "Semantic Roles Map", "Natural Language Correction Workflow"]
outcomes: [
  "Permanent accessible assets with institutional ownership",
  "Transparent AI with faculty-in-the-loop corrections",
  "API-first integration with LMS and Equalify"
]
metrics: [
  { label: "Automation coverage (common docs)", note: "~80% automated" },
  { label: "Faculty review time (10 pages)", note: "≤10 minutes" }
]
publishDate: 2025-02-01
draft: false
tags: ["Accessibility", "AI", "Higher-Ed", "PDF", "HTML"]
image:
  src: "/images/pdf-flow.png"
  alt: "Data flow diagram from upload to accessible HTML delivery"
---

### Overview

An open-source pipeline that converts PDFs to accessible HTML with transparent AI reasoning and faculty review. Built on AWS ECS Fargate with Redis job queue, S3 + CloudFront delivery, and an API-first surface for LMS and Equalify integration.

### Natural Language Correction Workflow

- Faculty describe adjustments in plain language (e.g., "This heading should be Level 3").
- AI applies corrections with reasoning; iterative conversation allows refinement.
- Confidence scoring updates based on validation and correction frequency.
- Faculty review MDX output rendered live for expectation alignment.

### Core API Endpoints

- POST `/api/documents/submit` – Submit PDFs with metadata; returns job id.
- GET `/api/documents/{id}/status` – Realtime status + confidence metrics.
- GET `/api/documents/{id}/result` – Converted HTML + a11y reports and semantic cache.
- POST `/api/documents/{id}/feedback` – Corrections and overrides.
- GET `/api/documents/{id}/versions` – Version history, rollback, citation URLs.

### Content Detection & Guidance

Automatic confidence scoring (High/Medium/Low) with banners; flags LaTeX, complex charts, and OCR-only text with review guidance.

### LMS & Equalify Integration

- External URL module items with versioned, citable URLs.
- Equalify webhooks trigger processing, then re-scan to show before/after metrics.

### Pilot Strategy & QA

Focus on text-dominant docs ≤25 pages (~70% of corpus). Automated WCAG checks (axe, Equalify) plus screen reader and keyboard tests across NVDA, VoiceOver, TalkBack.

### Architecture & Costs

AWS ECS Fargate containers with ephemeral processing; S3 for output; CloudFront CDN delivery. Pilot infra: ~$10–28/month. Typical 3-page doc inference cost: ~$0.20.

### Roadmap

MathML conversion for LaTeX, structured alternatives for scientific figures, chunked rendering for long docs, and Canvas live events automation.





