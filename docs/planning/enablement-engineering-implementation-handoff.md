# Enablement Engineering Website — Implementation Handoff

**Date:** December 23, 2024  
**Purpose:** Finalized decisions and implementation guidance for website build  
**Domain:** enablement.engineering

---

## All Decisions Finalized

| Decision | Final Choice |
|----------|--------------|
| Domain | enablement.engineering |
| Hero positioning | C headline + A supporting line (see copy below) |
| Credentials on homepage | No — save for About page |
| Navigation | Approach \| Services \| Work \| Writing \| Contact |
| /approach separate from /services | Yes — keep separate |
| Pricing on services page | No — "book a call" approach |
| Case studies at launch | Just UIC Equalify |
| Blog post at launch | "What is Enablement Engineering?" |
| Second blog post (soon after) | PDF/CSUN piece |
| Newsletter | Later — name will be "Ascent" |
| About page tone | Professional + light personal |
| Visual approach | Use existing brand system |
| Fix TypeScript errors | Yes |

---

## 1. Homepage

### Hero Section

```
[Main headline]
AI systems that extend human capability without hiding their reasoning.

[Supporting line]
Your team is doing knowledge work that agents could do. 
I build the systems that let you trust them to do it.

[CTA Button]
Book a discovery call
```

### Do NOT include on homepage:
- Credentials (save for About page)
- Pricing
- Newsletter signup (coming later)

### DO include:
- Brief "What I Build" section — **DECISION: Updated to match service tiers (Agent Discovery Sprint, Custom Agent Build, Agentic Infrastructure Partnership)**
- Featured case study teaser (UIC Equalify when ready)
- Services overview (3 cards linking to /services)
- CTA section at bottom

---

## 2. Navigation

**Primary Nav:**
```
Approach | Services | Work | Writing | Contact
```

**Footer/Secondary:**
```
About | LinkedIn | GitHub
```

*(Newsletter link added later when Ascent launches)*

---

## 3. /approach Page (NEW)

**Purpose:** Explain methodology for people who want to understand before buying

### Page Structure:

```markdown
# How We Work

## The Core Four

Every agentic system comes down to four elements:
- **Context** — what the agent knows
- **Model** — the intelligence layer  
- **Prompt** — the instructions
- **Tools** — the actions it can take

This is what turns AI coding into agentic coding.

---

## Why Procedures Matter

Tool calls are the unit of trusted agent work.

When an agent calls a tool, it's quantizing fuzzy natural language 
into a discrete, auditable operation. The more of your tokens that 
become tool calls, the more your system is:

- **Understanding intent correctly** — it parsed what you wanted
- **Routing successfully** — it matched intent to the right procedure
- **Operating auditably** — the output came from a known, tested process

Skills (Claude skills, and the emerging open standard) are packaged 
procedures — portable, governed, documented.

Teams don't scale on clever prompting. They scale on standardized 
procedures with governance.

For accessibility and compliance work, this isn't optional. 
The procedures ARE the audit trail.

---

## The Operating Method

Intent → Translation → Orchestration → Execution → Evidence → Learning

[Visual diagram here]

- **Intent**: Capture the job to be done + constraints
- **Translation**: Convert intent into unambiguous tasks
- **Orchestration**: Tools, agents, roles, gates, governance
- **Execution**: Humans + agents act; checks are built-in
- **Evidence**: Logs, diffs, screenshots, reasoning traces
- **Learning**: Review to prune/extend and update

---

## Glass Box AI

We build systems where the reasoning is visible, not just the output.

This means:
- You can see which procedure was called and why
- Error states are surfaced, not hidden
- Human oversight is built into the loop
- Audit trails exist for compliance

The opposite — black box AI — might work for low-stakes applications. 
For accessibility, legal compliance, or anywhere correctness matters, 
you need glass box.

---

## What This Means for You

- Agents that work
- Reasoning you can audit  
- Procedures you own (portable, governed, improvable)
- Independence from us over time

[CTA: See our services →]
```

---

## 4. /services Page

**No public pricing.** Each tier ends with "Book a discovery call" CTA.

### Page Structure:

```markdown
# Services

## Agent Discovery Sprint
**2-week engagement**

Find out what your agents could do before committing to building them.

**What you get:**
- Current workflow audit (where are humans doing repetitive knowledge work?)
- Agent architecture proposal (what narrow agents solve this?)
- Working prototype of one custom agent
- Documented system prompt + tool configuration
- Recommendation report for next steps

**Best for:**
- Organizations curious about agentic systems but not ready to commit
- Teams that need to prove value before getting budget approval
- Leaders who want to understand what's possible

[Book a discovery call →]

---

## Custom Agent Build
**4–6 week engagement**

Ship your first production agentic system — with procedures you own.

**What you get:**
- 3–5 narrow custom agents solving specific problems
- Orchestration layer (how agents hand off to each other)
- Packaged skills/procedures (portable, governed, documented)
- Evaluation system (how you know agents are working)
- Documentation + knowledge transfer
- 30 days post-delivery support

**Best for:**
- Organizations ready to deploy agentic systems
- Teams with identified workflows to automate
- Companies in regulated industries needing audit trails

[Book a discovery call →]

---

## Agentic Infrastructure Partnership
**Quarterly retainer**

Your embedded agent engineering capability.

**What you get:**
- Ongoing agent development and optimization
- New agent builds as needs emerge
- Private benchmark maintenance
- Architecture reviews
- Team training on agentic patterns
- Priority support

**Best for:**
- Organizations making agentic systems a core capability
- Teams scaling from pilot to production
- Companies wanting embedded expertise without full-time hire

[Book a discovery call →]

---

## Personal Automation Tailor
**2-week engagement**

Your own AI-powered productivity system, built around how you actually work.

**What you get:**
- Personal workflow audit
- Custom agent configuration for your tools and preferences
- Documentation and training
- 30 days of refinement support

**Best for:**
- Executives and senior leaders who want AI leverage without generic tools
- Individuals ready to invest in their own Agency OS

[Book a discovery call →]
```

---

## 5. /work Page (Case Studies)

### At Launch: UIC Equalify Only

```markdown
# Work

## Escaping to Semantic Freedom
**University of Illinois Chicago — Digital Accessibility Services**

Transforming inaccessible academic PDFs into adaptive, 
semantic web experiences at scale.

[Read case study →]
```

### UIC Equalify Case Study Content:

```markdown
# Escaping to Semantic Freedom
**Client:** University of Illinois Chicago  
**Engagement:** Custom Agent Build  
**Duration:** Ongoing (beta release January 2026)

---

## The Challenge

Academic PDFs are inaccessible by default. They're closed-source, 
visual-first, static formats where accessibility is bolted on as 
an afterthought within Adobe's walled garden.

Manual remediation costs approximately $100 per page and takes weeks. 
UIC's Digital Accessibility Services needed a scalable solution for 
hundreds of documents destined for Canvas LMS.

---

## The Approach

Instead of trying to fix broken PDFs, we extract content and semantics 
into MDX — a format that's human-readable, AI-readable, and program-readable.

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

---

## The Innovation

We don't just convert PDFs. We liberate content into adaptive, 
user-agent-negotiated experiences.

**The "last mile delivery" insight:**

PDFs own the entire rendering stack — hostile to accessibility. 
Semantic markup lets user agents handle the last mile. Same content, 
different presentations based on user needs:

- Tables become sortable, interactive, sonified, or spoken
- Charts get extracted data + alt text + long descriptions + sonification
- Content becomes truly multi-modal and personalized

**Skill-ready design:**

The pipeline is architected to become a packageable skill — 
a trusted procedure any organization can deploy. Each agent 
in the chain is a governed, testable procedure.

---

## Results

- **Cost reduction target:** 95-99% vs manual remediation
- **Output:** Permanent, citable, semantically rich accessible content
- **Integration:** Canvas LMS native
- **Beta release:** January 2026

---

## Speaking

Presenting this work at **CSUN Assistive Technology Conference 2025**:  
"Escaping to Semantic Freedom"
```

---

## 6. /about Page

```markdown
# About

I'm Dylan Isaac, founder of Enablement LLC.

I build AI systems that extend human capability without hiding 
their reasoning — for organizations where compliance isn't optional.

---

## Background

Former **Lead AI Engineer at Deque Systems**, where I built axe Assistant 
and developed foundational approaches to AI-generated accessibility content.

A decade of full-stack engineering experience, with deep expertise in 
accessibility, agentic systems, and the intersection of the two.

---

## Philosophy

**Ladders, not walls.** Technology should extend what people can do, 
not create dependency.

**Mirrors, not slot machines.** Systems should reflect user intention, 
not capture attention.

**Glass box, not black box.** Reasoning should be visible and auditable, 
especially when compliance matters.

I believe accessibility work is alignment work — the accessibility 
community has decades of experience with problems AI alignment 
researchers are only now addressing.

---

## Beyond Work

I live in Buffalo, NY with my partner Kaitlin, our dog Basil, 
and our kitten Corni.

I cultivate bonsai — the practice of shaping growth through 
constraint and patient guidance. It's not a bad metaphor for 
how I think about AI systems.

---

## Get in Touch

[Contact →]
```

---

## 7. Content Schema Updates

Update `src/content/config.ts`:

### Work Collection (Case Studies)

```typescript
const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    engagement: z.enum(['discovery', 'build', 'partnership', 'personal']),
    duration: z.string(),
    status: z.enum(['completed', 'ongoing', 'upcoming']).optional(),
    
    // Case study structure
    challenge: z.string().optional(),
    approach: z.string().optional(),
    results: z.array(z.string()).optional(),
    
    // Technical details
    technicalArchitecture: z.string().optional(),
    skillReadyDesign: z.boolean().optional(),
    
    // Meta
    publishedAt: z.date().optional(),
    featured: z.boolean().default(false),
  }),
});
```

### Writing Collection

Keep current schema, ensure it supports:
- `type: z.enum(['essay', 'case-study', 'note'])` (remove 'prompt-lab' if not using)

---

## 8. TypeScript Fixes

Fix Logo.tsx errors:
- Add `hoverMorph` and `defaultBounce` to LogoProps interface
- Ensure all props have correct types

---

## 9. Implementation Sequence

### Phase 1: Core Pages (Today/Tomorrow)

1. ✅ Fix TypeScript errors in Logo.tsx
2. ✅ Update homepage hero with new copy
3. ✅ Create /approach page (new Astro page, not content collection)
4. ✅ Revise /services page (4 tiers, no pricing, CTA on each)
5. ✅ Update navigation (Approach | Services | Work | Writing | Contact)
6. ✅ Review /about page, update if needed

### Phase 2: Content (This Week)

7. ✅ Update content schema for work collection
8. ✅ Create UIC Equalify case study (in work collection)
9. ✅ Write "What is Enablement Engineering?" blog post
10. ✅ Update /work page to show case study

### Phase 3: Polish (Week 2)

11. Review all pages for consistency
12. Test all links and CTAs
13. Ensure calendar link works on contact page
14. Write second blog post (PDF/CSUN preview)

### Future (Not Now)

- Newsletter signup (Ascent)
- Additional case studies (Scribely, Enablement Suite)
- /skills page (when open source skills are published)

---

## 10. Reference: Pricing (Private — Do Not Publish)

For Dylan's reference only when booking calls:

| Tier | Duration | Price Range |
|------|----------|-------------|
| Agent Discovery Sprint | 2 weeks | $8,000–$12,000 |
| Custom Agent Build | 4–6 weeks | $25,000–$50,000 |
| Agentic Infrastructure Partnership | Quarterly | $10,000–$20,000/month |
| Personal Automation Tailor | 2 weeks | $2,500–$4,000 |

---

## 11. Copy Bank (For Quick Reference)

### Taglines / Headlines

- "AI systems that extend human capability without hiding their reasoning."
- "Agents are only as good as the procedures they call."
- "Ladders, not walls."
- "Glass box AI for organizations where compliance isn't optional."

### CTA Options

- "Book a discovery call"
- "See how it works"
- "Let's talk"
- "Start with a sprint"

### Social Proof Line (when needed)

- "Former Lead AI Engineer at Deque Systems"
- "Speaking at CSUN Assistive Technology Conference 2025"
- "Published: Building Ladders, Reframing Accessibility"

---

## Questions for Dylan During Build — RESOLVED

1. **Homepage "What I Build" section** — ✅ **DECISION: Update to match service tiers** (Agent Discovery Sprint, Custom Agent Build, Agentic Infrastructure Partnership)
2. **Contact page** — ✅ **DECISION: Use placeholder for Google Calendar scheduling link** — Dylan will configure the actual URL
3. **Footer** — ✅ **DECISION: Use existing structure** — About, LinkedIn (https://www.linkedin.com/in/dylan--isaac/), GitHub (https://github.com/dylan-isaac)
4. **Colors/brand** — ✅ **DECISION: Keep existing brand system** — no changes needed
5. **Work collection results schema** — ✅ **DECISION: Keep current `{ metric, value }` structure** — displays nicely, no need to simplify
6. **Logo on homepage** — ✅ **DECISION: Keep LogoWide with animations**

---

**Document Status:** IMPLEMENTED  
**Implementation Date:** December 23, 2024
**Implementation Summary:**
- All Phase 1 tasks completed (TypeScript fixes, navigation, all pages updated)
- All Phase 2 tasks completed (schema updates, case study rewrite, blog post created)
- Footer component added
- Build passes successfully
