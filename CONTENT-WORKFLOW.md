# Cognitive Content Management System

This project implements an AI-powered content management system that bridges private content creation (Obsidian) with public publishing (Astro website).

## Architecture

### Private Content Management (`obsidian-vault/`)
- **Separate git repository** for private content
- **Workflow stages**: inbox → drafts → in-progress → ready-to-publish → published
- **Media organization**: youtube/, articles/, books/ for structured note-taking
- **Core documentation**: System knowledge that AI agents read to understand workflows
- **Templates**: Structured starting points for different content types

### Public Website (`src/content/`)
- **Astro content collections** with clean separation
- **Posts collection**: Current blog posts at `/posts/[slug]`
- **Future collections**: Ready for projects/, resources/, media/ expansion
- **SEO-optimized frontmatter** and clean markdown

### AI-Powered Automation (`scripts/`)
- **Single-file Python scripts** using uv/uvx for easy execution
- **Claude Code SDK integration** for context-aware processing
- **npm script integration** for simple workflow commands

## Workflow Commands

```bash
# Process unstructured ideas into organized notes
npm run inbox

# Convert and publish ready content to website
npm run publish  

# Maintain content quality and cross-references
npm run maintain

# Organize media captures (YouTube, articles, books)
npm run organize-media

# Validate links across vault and website
npm run validate-links
```

## Key Features

### Intelligent Content Processing
- AI agents understand system patterns through core documentation
- Automatic wikilink conversion and frontmatter transformation
- Media asset organization and cross-referencing
- Quality validation before publishing

### Workflow Automation  
- Move content through stages with proper metadata updates
- Archive published content while maintaining link integrity
- Generate maintenance reports and improvement suggestions
- Git commits with descriptive messages for full traceability

### Self-Improving System
- AI agents can analyze patterns and suggest workflow optimizations  
- Templates and documentation evolve based on usage
- Link integrity maintained automatically
- Content gaps and opportunities identified

## Getting Started

1. **Install dependencies**: `npm install`
2. **Set up Obsidian**: Point Obsidian to `obsidian-vault/` directory
3. **Configure Claude Code**: Ensure Claude Code SDK is available
4. **Initialize workflow**: Add content to `obsidian-vault/inbox/`
5. **Process content**: Run `npm run inbox` to organize
6. **Publish content**: Move to ready-to-publish and run `npm run publish`

## Philosophy

This system embodies the core thesis of enablement.engineering: **AI as a translation layer between human intention and computational capability**. Rather than forcing humans to adapt to rigid content management systems, AI agents understand human workflow patterns and maintain the system according to established principles.

The result is a content management system that:
- **Learns** from usage patterns
- **Maintains** itself automatically  
- **Evolves** based on feedback
- **Enables** rather than constrains creativity