# Enablement Engineering Website Plan

**Document Purpose:** Comprehensive reference for building the Enablement Engineering website  
**Created:** December 22, 2025  
**Source:** Synthesis of 50+ conversations about business development, positioning, and project work

---

## Table of Contents

1. [Brand Positioning & Core Message](#1-brand-positioning--core-message)
2. [Site Architecture](#2-site-architecture)
3. [Page-by-Page Content Outlines](#3-page-by-page-content-outlines)
4. [Case Studies](#4-case-studies)
5. [Service Offerings](#5-service-offerings)
6. [Content Strategy (Blog/Newsletter)](#6-content-strategy)
7. [SEO Keywords & Marketing Language](#7-seo-keywords--marketing-language)
8. [Visual & Brand Identity](#8-visual--brand-identity)
9. [Technical Implementation Notes](#9-technical-implementation-notes)
10. [Verification Questions](#10-verification-questions)
11. [Source References](#11-source-references)

---

## 1. Brand Positioning & Core Message

### The Central Thesis

**Enablement Engineering** is the practice of building AI systems that extend human capability without hiding their reasoning—built for domains where trust isn't a feeling, it's documentation.

### Core Philosophy (from past conversations)

> "Enablement engineering is about eliminating friction to creativity and agency."

**The Operating Method:**
```
Intent → Translation → Orchestration → Execution → Evidence → Learning
```

- **Intent**: Capture the job to be done + constraints (including accessibility)
- **Translation**: Convert intent into unambiguous tasks with acceptance criteria
- **Orchestration**: Tools/agents, roles, gates, and governance
- **Execution**: Humans + agents act; accessibility checks are built-in
- **Evidence**: Logs, diffs, screenshots, reasoning traces
- **Learning**: Weekly review to prune/extend ladders and update prompts/policies

### Differentiating Principles

| Principle | What It Means | Business Implication |
|-----------|--------------|---------------------|
| **Ladders, not walls** | Build infrastructure that extends capability | Clients gain independence, not dependency |
| **Glass box AI** | Reasoning is always visible and auditable | Essential for regulated domains |
| **Mirrors, not slot machines** | Systems that reflect user intention, not capture attention | Client-based incentive alignment |
| **Accessibility by default** | Inclusion built into every process | Compliance + ethics + market expansion |

### Positioning Statements (choose one for homepage hero)

**Option A: Problem-focused**
> "Your team is doing knowledge work that agents could do. I build the systems that let you trust them to do it."

**Option B: Credential-focused**
> "Former Lead AI Engineer at Deque. Now I build custom agentic systems for organizations where correctness isn't optional."

**Option C: Philosophy-focused**
> "Enablement engineering: AI systems that extend human capability without hiding their reasoning."

**Option D: Premium positioning (Teenage Engineering comparison)**
> "Enablement Engineering is to AI systems what Teenage Engineering is to music production: premium, principled, and unapologetically different."

**Option E: Procedure-focused** *(NEW — test with prospects)*
> "AI agents are only as trustworthy as the procedures they call. I build the procedures — and the governance around them — for organizations where compliance isn't optional."

### The Competitive Moat

From conversation analysis, your unique positioning combines:
1. **Technical depth** (Lead AI Engineer, agentic systems, multi-agent orchestration)
2. **Accessibility expertise** (Deque background, WCAG knowledge, regulatory understanding)
3. **Philosophical grounding** (epistemological translation, human flourishing orientation)
4. **Proven methodology** (UIC project, Scribely work, open source portfolio)

**Quote to remember:**
> "Most consultants say what clients want to hear. You're offering something genuinely different—and the clients who need this approach really need it."

---

## 2. Site Architecture

### Recommended Structure

```
enablement.engineering (or enablementengineering.com)
│
├── Homepage
│   └── Hero + positioning + CTA + featured case study
│
├── /what-we-do (or /approach)
│   └── Core Four framework + operating method + glass box philosophy
│
├── /services
│   ├── Agent Discovery Sprint
│   ├── Custom Agent Build
│   └── Agentic Infrastructure Partnership
│
├── /case-studies
│   ├── UIC Equalify (document transformation)
│   ├── Scribely (context engineering for alt text)
│   └── The Enablement Suite (open source portfolio)
│
├── /writing (or /insights or /blog)
│   ├── "What is Enablement Engineering?"
│   ├── "Context Engineering for Accessibility"
│   ├── "Glass Box AI: Why Compliance Requires Visible Reasoning"
│   └── (ongoing posts)
│
├── /about
│   └── Your story, Deque → independent, philosophy
│
├── /newsletter (or integrate with Substack)
│   └── "Ascent" newsletter signup
│
└── /contact
    └── Simple contact form + calendar link
```

### Navigation Priority

**Primary Nav:** What We Do | Services | Case Studies | Writing | Contact  
**Secondary/Footer:** About | Newsletter | LinkedIn | GitHub

---

## 3. Page-by-Page Content Outlines

### Homepage

**Structure:**
1. **Hero Section**
   - Positioning statement (one of the options above)
   - One-sentence elaboration
   - Primary CTA: "See how it works" or "Book a discovery call"
   
2. **The Problem/Opportunity Section**
   - "AI capability has outpaced AI trust"
   - Reference IndyDevDan's framing: only 15% of output tokens are tool calls
   - Your angle: "For accessibility and compliance, that trust gap is a legal liability"
   
3. **How We're Different**
   - Three pillars: Custom Agents | Glass Box Reasoning | Accessibility by Default
   - Visual: ladder iconography
   
4. **Featured Case Study**
   - UIC Equalify teaser with key metrics
   - Link to full case study
   
5. **Services Overview**
   - Three cards linking to service pages
   
6. **Social Proof / Credentials**
   - "Former Lead AI Engineer at Deque Systems"
   - Speaking: CSUN Assistive Technology Conference
   - Published: "Building Ladders" + "Reframing Accessibility"
   
7. **CTA Section**
   - "Ready to build agents you can trust?" + contact form or calendar link

---

### /what-we-do (Approach Page)

**Purpose:** Explain the methodology for people who want to understand before buying

**Outline:**

1. **The Core Four Framework**
   - Context, Model, Prompt, Tools
   - "Everything is the Core Four" — from IndyDevDan's Tactical Agentic Coding
   - How this creates agentic systems vs. just AI coding
   
2. **Why Procedures Matter** *(NEW SECTION)*
   - Tool calls are the unit of trusted agent work
   - A tool call = successful quantization of intent into a trusted procedure
   - When more tokens are tool calls, it means:
     - Intent was correctly understood
     - Routing succeeded (matched to the right procedure)
     - Execution is auditable and deterministic
   - Skills (Claude skills, emerging standard) are packaged procedures
   - "Teams don't scale on clever prompting — they scale on standardized procedures with governance"
   - For accessibility/compliance work: procedures ARE the audit trail
   
3. **The Operating Method**
   - Intent → Translation → Orchestration → Execution → Evidence → Learning
   - Visual diagram showing the cycle
   - Each step explained with accessibility integration
   
4. **Glass Box AI**
   - Definition: "Systems where the reasoning is visible, not just the output"
   - Why this matters for compliance: audit trails, human oversight, error visibility
   - Contrast with "black box" systems
   - Connection to procedures: "You can see the routing decision AND the procedure it called"
   
5. **Signature Metrics**
   - Friction Index (FI): time from intention → first meaningful step
   - Idea Throughput (IT): distinct solution attempts/week/problem
   - Agency Delta (ΔA): % of tasks completed without expert intervention
   - Accessibility Quality (AQ): WCAG-mapped defects per artifact + time-to-fix
   - Cycle Time (CT): idea → usable outcome
   
6. **What This Means for You**
   - "You get agents that work, reasoning you can audit, and independence from us over time"
   - "The procedures we build become assets you own — portable, governed, improvable"

---

### /services

**Three Service Tiers (from pricing conversations):**

#### Tier 1: Agent Discovery Sprint
**Duration:** 2 weeks  
**Price Range:** $8,000–$12,000

**What You Get:**
- Current workflow audit (where are humans doing repetitive knowledge work?)
- Agent architecture proposal (what narrow agents solve this?)
- Working prototype of one custom agent
- Documented system prompt + tool configuration
- Recommendation report for next steps

**Who It's For:**
- Organizations curious about agentic systems but not ready to commit
- Teams that need to prove value before getting budget approval
- Leaders who want to understand what's possible

**Positioning:** "Find out what your agents could do before committing to building them."

---

#### Tier 2: Custom Agent Build
**Duration:** 4–6 weeks  
**Price Range:** $25,000–$50,000

**What You Get:**
- 3–5 narrow custom agents solving specific problems
- Orchestration layer (how agents hand off to each other)
- Packaged skills/procedures (portable, governed, documented)
- Evaluation system (how you know agents are working)
- Documentation + knowledge transfer
- 30 days post-delivery support

**Who It's For:**
- Organizations ready to deploy agentic systems
- Teams with identified workflows to automate
- Companies in regulated industries needing audit trails

**Positioning:** "Ship your first production agentic system — with procedures you own."

---

#### Tier 3: Agentic Infrastructure Partnership
**Duration:** Quarterly retainer  
**Price Range:** $10,000–$20,000/month

**What You Get:**
- Ongoing agent development and optimization
- New agent builds as needs emerge
- Private benchmark maintenance
- Architecture reviews
- Team training on agentic patterns
- Priority support

**Who It's For:**
- Organizations making agentic systems a core capability
- Teams scaling from pilot to production
- Companies wanting embedded expertise without full-time hire

**Positioning:** "Your embedded agent engineering capability."

---

### /case-studies

#### UIC Equalify: Document Transformation at Scale

**Overview:**
$60,000 contract with University of Illinois Chicago to build PDF-to-accessible-markup conversion system.

**The Problem:**
- Academic PDFs are inaccessible by default
- Manual remediation costs ~$100/page
- Hundreds of documents need conversion for Canvas LMS

**The Solution:**
- Multi-agent pipeline: extraction → semantic inference → MDX generation
- Specialized agents for: heading structure, data tables, charts, images
- Human-in-the-loop review interface
- Canvas LMS integration

**Key Innovation:**
> "We don't just convert PDFs—we liberate content into adaptive, user-agent-negotiated experiences."

**The "Last Mile Delivery" Framing:**
- PDFs own the entire rendering stack (hostile to accessibility)
- Semantic markup lets user agents handle the last mile
- Same content → different presentations based on user needs

**Results:** (include metrics when available)
- Cost reduction target: 95-99% vs manual remediation
- Beta release: January 2026
- Speaking about this work at CSUN Assistive Technology Conference

**Technical Architecture:**
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

**Skill-Ready Design:**
The pipeline is architected to become a packageable skill — a trusted procedure any organization can deploy. Each agent in the chain (heading extraction, table parsing, image description) is a narrow, testable procedure that can be governed independently.

---

#### Scribely: Context Engineering for Alt Text

**Overview:**
Consulting engagement developing context engineering methodology for AI-generated alt text.

**The Problem:**
- AI alt text generators lack context awareness
- "Describe this image" is radically under-specified
- Quality depends on understanding why the image matters in context

**The Solution:**
- Context engineering: structuring page context, surrounding content, and author intent
- Multi-agent evaluation: heading evaluator, data evaluator, image describer
- Methodology documentation for repeatable quality

**Key Insight:**
> "The alt text is pre-computed intention alignment. A human has already done the work of identifying what about this image matters for someone making a decision."

**Business Model:**
- 2-week engagement: $10,000
- Methodology development, not just implementation
- Builds toward productized approach

---

#### The Enablement Suite: Open Source Portfolio

**Overview:**
Personal tool stack demonstrating custom agent architecture.

**The Stack:**
```
Gobbler (consume) → Ruminate (digest) → PUTER (act) → intentionOS (align)
```

| Project | Function | Technology |
|---------|----------|------------|
| **Gobbler** 🦃 | Content ingestion (web, PDF, video → markdown) | Crawl4AI, Docling, Whisper |
| **Ruminate** 🐄 | Local RAG / vector store knowledge base | ChromaDB, FastAPI, LiteLLM |
| **PUTER** | Task delegation protocol for AI agents | Redux-style event architecture |
| **intentionOS** | Alignment layer connecting tools to user goals | Role definitions, virtue alignment |

**Why This Matters:**
- Demonstrates "custom agents above all" philosophy
- Each component is narrow, focused, composable
- Protocol-first design: "The system IS the canonical state machine, UIs are just views"
- Published openly as credential and contribution

---

### /writing

**Foundational Posts (publish before/at launch):**

1. **"What is Enablement Engineering?"**
   - The philosophy in 1,500 words
   - Core Four framework
   - Operating method
   - Who this is for
   
2. **"Context Engineering for Accessibility"**
   - What makes AI alt text actually useful
   - The Scribely methodology
   - Technical approach to context extraction
   
3. **"From PDF to Semantic Web: The Last Mile Problem"**
   - The UIC project architecture
   - Why PDFs are hostile to accessibility
   - User agents as partners in rendering

**Ongoing Content Themes:**

- **Technical tutorials** from project work
- **Framework explainers** (signature metrics, operating method)
- **"What X Taught Me About Y"** series (Bonsai→AI, accessibility→alignment)
- **Conference talk adaptations**
- **AI news reactions** with enablement engineering perspective

---

### /about

**Structure:**

1. **The Short Version**
   - "I build AI systems that extend human capability without hiding their reasoning."
   - Current role: Founder, Enablement LLC
   
2. **Background**
   - Former Lead AI Engineer at Deque Systems
   - Built axe Assistant and accessibility AI tools
   - 10+ years full-stack engineering
   - Escaped generational poverty through computing
   
3. **Why I Do This**
   - Quote from your brain dump:
   > "We are at a societal dysfunction where we want to segment each other... I want to contribute to human flourishing during a time when I think it could be dark if there are people not taking this position."
   
4. **The Philosophy**
   - Ladders, not walls
   - Mirrors, not slot machines
   - Technology that extends rather than replaces
   
5. **Beyond Work**
   - Buffalo, NY
   - Bonsai cultivation (and the AI metaphor)
   - Partner Kaitlin, dog Basil, kitten Corni

---

### /newsletter

**Newsletter: "Ascent"**

**Tagline:** "Weekly insights on AI, accessibility, and human flourishing"

**Structure (from conversations):**
- What happened (one AI development)
- What it means (your interpretation)
- What you can do with it (practical application)
- Connection to human flourishing

**Signup copy:**
> "I'm building the Teenage Engineering of AI systems—premium tools that cultivate human agency instead of extracting attention. Each week, I share what I'm learning about making AI work for humans, not against them."

**Platform:** Substack (accessibility tested)

---

### /contact

**Simple and direct:**
- Contact form (name, email, message)
- Calendar link for discovery calls
- Email: dylan@enablement.engineering
- LinkedIn link
- Optional: "What's your biggest agent challenge?" question

---

## 4. Case Studies (Detailed Outlines)

### UIC Equalify Case Study Structure

**Page Title:** "Escaping to Semantic Freedom: Transforming Academic PDFs at Scale"

**Sections:**

1. **The Challenge**
   - PDFs as accessibility liability
   - Manual remediation economics ($100/page, weeks of work)
   - Canvas LMS integration requirement
   
2. **The Approach**
   - Multi-agent architecture diagram
   - Agent specialization (heading agent, table agent, chart agent, image agent)
   - Human-in-the-loop review
   
3. **The Innovation**
   - Semantic MDX components
   - User-agent negotiated rendering
   - Content negotiation at component level
   
4. **Results**
   - Cost reduction
   - Time savings
   - Accessibility scores
   - Faculty adoption
   
5. **What We Learned**
   - Glass box reasoning essential for trust
   - Narrow agents outperform generalist prompts
   - Context engineering > prompt engineering
   
6. **Technical Architecture**
   - Pipeline diagram
   - Component schema approach
   - Canvas integration

---

## 5. Service Offerings (Expanded)

### Future Product Direction: Skills Library

**Context:** Skills are becoming an open standard (Anthropic + OpenAI). The portable unit of trusted procedure is emerging as infrastructure.

**Potential Published Skills:**
- **Alt Text Generation Skill** — Context-aware image description with Scribely methodology
- **PDF Semantic Extraction Skill** — Equalify pipeline as packageable procedure
- **WCAG Audit Skill** — Automated accessibility checking with structured output
- **Document Transformation Skill** — Gobbler's core capability

**Business Model:**
- Open source the skills (builds authority, gets adoption)
- Sell enterprise support, customization, and governance consulting
- "Wizards of the Coast" model: publish the rules, community builds on top

**Why This Matters:** Whoever publishes the definitive accessibility skills library becomes the standard. Being early to this positions you as the skills ecosystem matures.

**Website Integration:** Not for launch, but plan for a `/skills` or `/tools` page once 2-3 skills are published.

### Target Buyers by Industry

**Higher Education:**
- Digital Accessibility Officers
- Canvas/LMS administrators
- Disability Services directors
- **Pitch:** "I already built this for UIC. Let me show you the architecture."

**Legal/Compliance:**
- Document review pipelines
- Contract analysis
- Compliance verification
- **Pitch:** "I build agent systems for accessibility compliance. Same patterns work for legal compliance."

**Healthcare:**
- Medical documentation
- Patient communication accessibility
- Research synthesis
- **Pitch:** "Medical documentation needs the same 'trustworthy reasoning' approach."

**Enterprise Content:**
- Internal documentation pipelines
- RAG systems
- Process automation
- **Pitch:** "I've built personal knowledge systems that scale to organizations."

---

## 6. Content Strategy

### Blog/Newsletter Editorial Calendar

**Quarterly Major Pieces:**
- Q1 2026: "What is Enablement Engineering?" (foundational)
- Q1 2026: "UIC Case Study: Semantic Freedom" (proof)
- Q2 2026: "The Quantization Insight" (technical thought leadership)
- Q3 2026: "Accessibility as Alignment Infrastructure" (big idea)

**Priority Post for Testing Procedure Language:**
- "Skills Aren't Clever Prompts: Why Procedure Engineering Is the Next Discipline"
- Argues: tool calls should route to trusted, auditable procedures
- Explains: skills as the emerging standard for packaged procedures
- Positions: accessibility work as exemplar (where procedures = compliance)
- Test this language before elevating to core positioning

**Weekly Newsletter Rhythm:**
- Week 1: Technical insight
- Week 2: Business implication
- Week 3: Philosophical exploration
- Week 4: Practical tutorial

### Content Quality Checklist

Before publishing, ask:

**Clarity:**
- [ ] Can a smart 15-year-old follow this?
- [ ] Does each metaphor clarify rather than obscure?
- [ ] Have I defined all specialized terms?

**Concision:**
- [ ] Does every sentence earn its place?
- [ ] Have I cut throat-clearing and hedging?
- [ ] Could this be 20% shorter without losing meaning?

**Credibility:**
- [ ] Do I show my work (evidence, reasoning)?
- [ ] Have I acknowledged limitations?
- [ ] Is this differentiated from existing work?

**Craft:**
- [ ] Would I want to read this?
- [ ] Does it sound like me talking?
- [ ] Are there memorable phrases people will quote?

---

## 7. SEO Keywords & Marketing Language

### Primary Keywords (High Intent)

**Services:**
- Custom AI agent development
- Agentic workflow consulting
- AI systems integration
- Multi-agent orchestration
- Claude Code consulting
- Context engineering services
- Procedure engineering *(emerging term — own it early)*
- AI skill development
- Agent governance consulting

**Accessibility-Specific:**
- PDF accessibility automation
- AI alt text quality
- Canvas LMS accessibility
- WCAG compliance automation
- Academic content accessibility

### Secondary Keywords (Thought Leadership)

- Enablement engineering
- Glass box AI
- Accessibility AI systems
- Semantic document conversion
- Private AI benchmarks
- Tool calling architecture
- Epistemological translation
- Cross-surface orchestration
- Workflow fabric
- Control plane architecture
- Audit trail design

### Phrases to Own

- "Ladders, not walls"
- "Glass box AI"
- "Accessibility as alignment infrastructure"
- "AI as epistemological translator"
- "Mirrors, not slot machines"

### IndyDevDan Connection Keywords

When targeting engineers who've seen IndyDevDan's content:
- Custom agents above all
- Multi-agent orchestration
- Tool calling opportunity
- Agentic coding 2.0
- Agent sandboxes
- In-loop vs out-loop
- Private benchmarks

---

## 8. Visual & Brand Identity

### Core Visual Elements

**From conversation history:**
- Ladder iconography (central metaphor)
- Sun motif (warmth, growth, illumination)
- Yellow accent color (optimism, energy)
- Clean, geometric aesthetic
- Circular typography (technical + humanist)

**Visual Principles:**
- "The ladder icon is perfect—simple, memorable, directly reinforces core message"
- "Clean, modern design aesthetic that feels professional"
- "Warmth and optimism" through color choices

### Typography Notes

From brand mockup conversations:
- Circular font family (technical DNA with humanist qualities)
- Tighter letter-spacing (-0.01em to -0.04em) for "engineered" feeling
- Strong font weights (600) for headers
- Small geometric accents (rotated squares, connecting lines)

### Design Principles

Every deliverable should be:
- **Showable** — clients want to display it internally
- **Shareable** — people screenshot and post your work
- **Educational** — it teaches the philosophy while solving the problem
- **Beautiful** — craft matters

---

## 9. Technical Implementation Notes

### Platform Considerations

**Website:**
- Static site generator (Astro, Next.js) for accessibility
- Semantic HTML throughout
- Test with screen readers before launch
- Markdown-based content for portability

**Newsletter:**
- Substack (test accessibility)
- Cross-post to blog
- RSS feed available

**Contact:**
- Simple form (accessible)
- Calendly or Cal.com for scheduling
- Email fallback

### Accessibility Requirements (Practice What You Preach)

- [ ] WCAG 2.1 AA minimum
- [ ] Screen reader tested (VoiceOver, NVDA)
- [ ] Keyboard navigation complete
- [ ] Color contrast validated
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] Skip links
- [ ] Focus indicators

---

## 10. Verification Questions

Use these to ensure the website captures your full vision:

### Philosophy Verification
1. Does the homepage clearly communicate "ladders, not walls"?
2. Is the glass box AI principle explained, not just mentioned?
3. Does the "mirrors, not slot machines" concept come through?
4. Would someone understand why accessibility matters to you specifically?

### Services Verification
1. Are the three tiers clearly differentiated?
2. Is pricing transparent enough to qualify leads?
3. Does each service page answer "who is this for"?
4. Is there a clear CTA on each service page?

### Case Studies Verification
1. Does UIC Equalify show the full pipeline?
2. Is the "last mile delivery" framing present?
3. Are concrete results/metrics included?
4. Does Scribely demonstrate context engineering methodology?

### Differentiation Verification
1. Would a visitor understand how you differ from generic AI consultants?
2. Is the Deque background/credibility visible?
3. Are the CSUN speaking credentials mentioned?
4. Does the open source portfolio (Enablement Suite) appear?

### Technical Verification
1. Does the IndyDevDan-aligned language appear (Core Four, tool calling, etc.)?
2. Are the signature metrics explained?
3. Is the operating method (Intent→Learning) visible?
4. Would an engineer understand the technical depth?
5. Is the procedure/skills concept present in the methodology section?
6. Does the case study show skill-ready architecture?

### Voice Verification
1. Does it sound like you, not generic consultant copy?
2. Are there memorable phrases people will quote?
3. Is there warmth alongside technical precision?
4. Does it reflect human flourishing orientation?

---

## 11. Source References

### Published Writing (Link These)
- "Building Ladders: Extending Human Agency with AI" — https://dylanisa.ac/writing/building-ladders-extending-human-agency-with-ai/
- "Reframing Accessibility: AI as an Epistemological Translator" — https://dylanisa.ac/writing/reframing-accessibility-ai-as-an-epistemological-translator/

### IndyDevDan / Tactical Agentic Coding (Reference for Framing)
- Course: https://agenticengineer.com/tactical-agentic-coding
- Key concept: "The Core Four" (Context, Model, Prompt, Tools)
- Key concept: "12 Leverage Points"
- Video referenced: "Top 2% Agentic Engineer in 2026" roadmap
- Key quote: "Tool calling is the opportunity... only 15% of output tokens are tool calls"

### Christmas Claude Video (Anthropic Strategy Analysis)
- Key insight: "Teams don't scale on clever prompting — they need standardized procedures, governance, and safe execution primitives"
- Key insight: Skills as open standard, portable, governed, packaged workflows
- Key insight: Claude as "workflow fabric" / connective tissue across surfaces
- Key insight: "The metric that matters is: will this system convert real messy context into shipped valuable work repeatedly with enterprise safety and guardrails"
- Strategic frame: "The move from the assistant you consult to the agent system you run"

### Conference Speaking
- CSUN Assistive Technology Conference 2025
- Talk: "Escaping to Semantic Freedom" (PDF to semantic markup)

### Key Quotes from Conversations

**On positioning:**
> "Enablement Engineering is to AI systems what Teenage Engineering is to music production: premium, principled, and unapologetically different."

**On philosophy:**
> "I'm not really interested in making a ton of money. I'm more just wanting to impact the world positively and work creatively and sustain myself. I want to contribute to human flourishing during a time when I think it could be dark if there are people not taking this position."

**On differentiation:**
> "Your unique combination of technical depth + human-centered thinking + accessibility expertise is rare and valuable."

**On market timing:**
> "Starting the consulting company wasn't premature—it was protecting your intellectual assets and positioning for long-term value creation."

**On pricing:**
> "The premium isn't arrogance—it's what makes the business model sustainable while staying true to the mission."

---

## Quick Reference: Tomorrow's Build Checklist

### Minimum Viable Website (Ship This Week)

1. **Homepage** with one positioning statement + services overview
2. **Services page** with three tiers
3. **About page** with background + philosophy
4. **Contact page** with form + calendar link
5. **One blog post**: "What is Enablement Engineering?"

### Nice to Have (Week 2)

6. **Case study**: UIC Equalify
7. **Second blog post**: Context engineering or CSUN preview
8. **Newsletter signup** integrated

### Future Development

9. Full case studies section
10. Scribely case study (after engagement complete)
11. Enablement Suite documentation
12. Speaking page with past/upcoming talks

---

**Document Status:** Complete first draft (v2 — procedure engineering integrated)  
**Next Action:** Build homepage + services page tomorrow  
**Verification:** Review checklist questions before launch

---

## Appendix: Phased Rollout for Procedure Engineering Concept

**Why phase it:** The procedure/skills insight is genuine and differentiated, but "procedure engineering" is untested language. The current plan is ship-ready. This phasing lets you launch while testing the concept.

### Phase 1: Launch (Week 1)
- Ship website with current structure
- "Why Procedures Matter" section lives on /what-we-do page
- Procedure language present but not primary

### Phase 2: Content Test (Weeks 2-4)
- Publish blog post: "Skills Aren't Clever Prompts"
- Share on LinkedIn, observe engagement
- Use in sales conversations, note reactions

### Phase 3: Evaluate (Month 2)
- Did the procedure post resonate?
- Are prospects responding to this framing?
- If yes → elevate to homepage positioning
- If unclear → keep as methodology detail

### Phase 4: Product Development (Q2 2026)
- Publish first open source skill (alt text or PDF extraction)
- Add /skills page to website
- Position skills library as product offering

### Phase 5: Full Integration (if validated)
- Consider "Procedure Engineering" as primary positioning
- Skills library becomes lead product
- Consulting becomes implementation support

**The key insight:** You don't need to know if "procedure engineering" will be your brand. You need to test it. The website structure supports both outcomes.
