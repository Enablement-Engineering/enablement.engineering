---
title: "Accessibility as Alignment Work"
description: "The accessibility community has been solving AI alignment problems for decades. POUR principles are alignment primitives. The patterns that make content work for assistive technology are the same patterns that make AI systems trustworthy."
publishedAt: 2026-01-02
type: "essay"
featured: true
tags: ["accessibility", "ai-alignment", "enablement-engineering", "wcag", "philosophy"]
---

Screen readers were the first agents.

They take structured input, interpret human intent encoded in that structure, make decisions under ambiguity, and transform content for a different modality. They don't see pixels—they see semantics. They don't process appearance—they process meaning.

The accessibility community has been building alignment infrastructure for thirty years. We just didn't call it that.

## The Thesis

Accessibility work is alignment work—not metaphorically, but technically.

Both disciplines solve the same fundamental problem: **how do you preserve meaning when information moves between representations, while serving diverse human needs rather than optimizing for a narrow default?**

Accessibility asks: how do we ensure content works whether you're seeing it, hearing it, or touching it?

AI alignment asks: how do we ensure systems serve the full range of embodied human experience rather than optimizing for proxy metrics?

These are the same question wearing different clothes. And the accessibility community has decades of practical experience with answers.

## Alignment Work in Practice

Consider what happens when you try to make an academic PDF accessible. PDFs, by default, encode *visual* intent, not *semantic* intent—the meaning is implicit in visual conventions, not machine-readable structure. The meaning doesn't survive transformation.

I've been building a system that solves this problem for the University of Illinois Chicago. The [Equalify PDF Converter](/work/equalify-pdf-converter) extracts content from academic PDFs and produces accessible, semantic web experiences. The technical challenge forced us to solve alignment problems at multiple levels.

### Representation Alignment

When our heading agent encounters "18pt bold text," it can't just pattern-match on visual features. It has to reason about section structure, document conventions, outline consistency. It has to model what the author *intended*—not what they literally produced.

This is the same interpretive work alignment researchers describe: correctly modeling human intent, not just surface features.

### Multi-Stakeholder Alignment

The system must simultaneously align with:

- **Author intent**: What did they mean this heading to convey?
- **Reader needs**: What does someone using a screen reader need to understand?
- **Standard compliance**: What does WCAG require?

These sometimes conflict. Author intent might be ambiguous. Reader needs vary. Compliance is necessary but not sufficient. Navigating these tradeoffs *is* alignment work.

### Narrow, Testable, Auditable Agents

We use specialized agents for different content types: headings, tables, charts, images. Each agent is narrow, testable, and auditable:

- **Narrow** = constrained capability. The heading agent can't hallucinate alt text.
- **Testable** = verifiable behavior. You can check if H2 was correct.
- **Auditable** = glass box reasoning. You can see *why* it chose H2.

Each agent produces structured outputs with evidence and confidence scores. Low confidence routes to human review. Corrections feed back into the system. This is scalable oversight—the alignment term for human supervision that scales with system capability.

## The Last Mile Insight

Here's what we learned:

> PDFs own the entire rendering stack—hostile to accessibility. Semantic markup lets user agents handle the last mile. Same content, different presentations based on user needs.

The PDF is authoritarian. It demands you experience content exactly as designed, regardless of your needs or preferences.

Semantic markup is democratic. It conveys meaning and lets user agents—browsers, screen readers, future tools we haven't built—decide how to present it based on individual needs.

Translated to alignment terms: **don't optimize for a single outcome. Preserve meaning and optionality. Let downstream systems serve individual needs.**

This is the opposite of how most AI systems work. They optimize for predicted user preference—a single "best" output. The alternative is systems that preserve human agency and optionality. Systems that serve human goals without foreclosing human choices.

Tables become sortable, interactive, or spoken—depending on what the user needs. Charts get extracted data, alt text, sonification—multiple paths to the same meaning. The system doesn't decide which path is "best." It builds all the paths and lets humans choose.

## POUR as Alignment Primitives

WCAG—the Web Content Accessibility Guidelines—is built on four principles: Perceivable, Operable, Understandable, Robust. These aren't accessibility-specific categories. They're the core primitives for conveying information and intention to *any* agent—human or artificial.

If you want information accessible to both people and AI systems, you implement WCAG. Not for compliance. Because these are the necessary conditions for meaning to survive transformation across modalities and across different kinds of minds.

| Principle | What It Means | Why It's Fundamental |
|-----------|---------------|---------------------|
| **Perceivable** | Information must be presentable in forms the agent can process | You can't act on what you can't receive |
| **Operable** | The agent must be able to interact and navigate | You can't engage with what you can't control |
| **Understandable** | Information and operation must be comprehensible | You can't use what you can't interpret |
| **Robust** | Content must work across different agents and contexts | You can't rely on what breaks under variation |

These aren't "accessibility principles that happen to apply to AI." They're the primitives for any information system that serves diverse agents—whether those agents are humans using screen readers, humans using browsers, or language models parsing your content.

A screen reader and an LLM face the same fundamental challenges: Can I perceive this content? Can I navigate it? Can I understand its structure and intent? Will it work reliably across contexts?

The accessibility community operationalized these primitives into testable success criteria decades ago. WCAG 2.1 has 78 specific, measurable requirements. AI alignment research is still developing equivalent rigor—but the foundation already exists.

## The Accessibility Tree

Browsers don't just render pixels. They build an accessibility tree—a parallel representation of the page that strips away visual styling and exposes semantic structure. Buttons, headings, links, landmarks, relationships.

Screen readers consume this tree. They don't (fully) see your CSS. They see structure and meaning.

This is alignment infrastructure. The accessibility tree is a protocol for making human intent machine-readable. It exists because someone realized: if you want diverse agents (human and machine) to understand content, you need explicit semantics. Visual conventions aren't enough.

Language models benefit from this infrastructure directly. Semantic HTML is easier to process than tag soup. Pages with proper heading structure, labeled forms, and ARIA landmarks are more interpretable—by screen readers *and* by AI.

The accessibility community built the machine-readable web. AI systems are late beneficiaries.

## "Nothing About Us Without Us"

Disability rights activism has a core principle: nothing about us without us. Design decisions affecting disabled people should involve disabled people.

This maps directly to alignment's central question: **whose values get encoded?**

AI systems are trained on data, optimized for metrics, and deployed in contexts that reflect particular choices about whose needs matter. These choices are often invisible. The training data isn't published. The optimization targets aren't explained. The feedback loops don't include affected communities.

The accessibility community learned this lesson the hard way. Decades of "accessible" products designed without disabled users. Solutions that passed automated tests but failed real people. Compliance without inclusion.

How can we trust systems when we can't see the full picture?

I care about this personally. When I use AI, I want glass box reasoning—I want to see all the inputs going into my prompts, because I know how much small nudges can shift outcomes. Transparency isn't a nice-to-have. It's the foundation of trust.

Model training data should be transparent. Feedback loops should include affected communities. Optimization targets should be explicit and contestable. These aren't radical demands—they're basic accessibility principles applied to AI.

## The Conformance Gap

Here's what accessibility practitioners know that alignment researchers are learning:

**Passing tests doesn't mean the system works.**

WCAG conformance doesn't guarantee actual accessibility. You can have a website that passes every automated check and is still unusable for blind users. The tests measure what's measurable—not what matters.

This is the alignment version of Goodhart's Law: when a measure becomes a target, it ceases to be a good measure. AI systems that optimize for safety benchmarks may not be safe. Systems that pass red-team tests may still fail in deployment.

Both fields struggle with the gap between formal compliance and real-world outcomes. The solution in both cases: richer specifications, better evaluations, real-world feedback loops, and humility about what tests can actually tell you.

Accessibility practitioners have spent decades navigating this gap. They know that automated testing is necessary but not sufficient. They know that real users must be involved. They know that "passes the checklist" is the beginning of the conversation, not the end.

## What Each Field Offers

**Accessibility offers alignment:**
- Decades of practical methodology for making human intent machine-readable
- Standards processes that actually shipped (WCAG is a working international standard)
- Hard-won experience with the gap between compliance and reality
- Participatory design frameworks that center affected communities
- The infrastructure of semantic markup, accessibility APIs, and assistive technology

**Alignment offers accessibility:**
- Formal frameworks for thinking about system behavior under distribution shift
- Research resources and attention
- Technical tools for interpretability and verification
- A broader conversation about AI's role in society

**Both fields need each other.** Accessibility practitioners should recognize their expertise as relevant to cutting-edge AI problems. Alignment researchers should recognize that the accessibility community has been doing this work for decades—and has solutions they haven't yet discovered.

## The Deeper Claim

By investing in accessibility, we build the foundation for trustworthy AI.

The patterns that make content work for screen readers are the same patterns that make content work for language models—and more importantly, for humans who need to understand and trust AI systems.

Semantic structure. Explicit intent. Multiple paths to meaning. Auditable decisions. Human control preserved.

Screen readers were the first agents. The accessibility tree was the first alignment protocol. WCAG's POUR principles are alignment primitives the AI safety community is only now rediscovering.

The accessibility community has been building ladders for thirty years. It's time for AI to climb them.

---

*For a concrete example of these principles in practice, see the [Equalify PDF Converter](/work/equalify-pdf-converter) project.*

*For the broader philosophy of glass box AI, see [What is Enablement Engineering?](/writing/what-is-enablement-engineering)*
