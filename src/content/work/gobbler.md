---
title: "Gobbler: Extending AI Agent Reach"
client: "Enablement Engineering"
description: "Making all information I can access accessible to my AI agents—videos, documents, web pages, audio, even authenticated browser sessions."
engagement: "personal"
duration: "Ongoing (active development)"
featured: false
publishedAt: 2024-10-01
modifiedAt: 2026-01-03
tags: ["ai-infrastructure", "content-conversion", "mcp", "claude-code", "developer-tools", "open-source"]
---

<p align="center">
  <img src="/images/gobbler-mascot.png" alt="Gobby the turkey mascot consuming PDF, HTML, DOCX, and VIDEO files, outputting clean MD blocks" width="400" />
</p>

## The Problem

I can access a lot of information—YouTube videos, PDFs, web pages behind logins, audio recordings, my NotebookLM research. But my AI agents can't. They're limited to what fits in a context window or what I manually copy-paste.

The gap between what I can access and what my agents can access is a bottleneck. Every time I need Claude to reason about a video transcript, a research paper, or a web page, I'm the slow middleware doing format conversion by hand.

**Gobbler closes that gap.** It makes all the information I have access to accessible to my AI agents.

## The Approach

Gobbler gives AI agents the same content access I have. When I can watch a YouTube video, my agent can get its transcript. When I can read a PDF, my agent can too. When I'm logged into a web app, my agent can extract content from that authenticated session.

```bash
gobbler youtube "https://youtube.com/watch?v=..." -o transcript.md
gobbler document report.pdf -o report.md
gobbler audio meeting.mp3 -o meeting.md
gobbler webpage "https://docs.example.com" -o docs.md
gobbler browser extract  # From my authenticated browser session
```

Everything converts to markdown with YAML frontmatter—the format AI agents work best with:

```markdown
---
source: https://youtube.com/watch?v=VIDEO_ID
type: youtube_transcript
title: "Video Title"
duration: 847
word_count: 2341
---

# Video Title

Content here, ready for AI reasoning...
```

One output format. Consistent metadata. Preserved provenance.

## How Agents Access Gobbler

Gobbler exposes capabilities through three patterns, depending on how the agent prefers to work:

**MCP Protocol** — For Claude Code and Claude Desktop. The agent calls Gobbler tools directly:

```bash
claude mcp add gobbler-mcp -- uv --directory /path/to/gobbler run gobbler-mcp
```

**Skills** — Markdown instruction files that teach Claude how to use the CLI. Progressive disclosure keeps context windows efficient—Claude only loads full instructions when triggered:

```
skills/
├── gobbler-youtube/     # YouTube transcription
├── gobbler-audio/       # Audio/video transcription  
├── gobbler-document/    # Document conversion
├── gobbler-webpage/     # Web scraping
├── gobbler-browser/     # Browser automation + AI chat integrations
└── gobbler-setup/       # Installation and troubleshooting
```

**CLI** — Direct command-line usage. Agents with shell access can call Gobbler directly:

```bash
gobbler youtube URL              # YouTube transcripts
gobbler audio FILE               # Audio/video transcription
gobbler document FILE            # PDF, DOCX, PPTX, XLSX
gobbler webpage URL              # Web pages (JS-rendered)
```

## The Browser Bridge

The hardest content to access is behind authentication—my NotebookLM research, internal documentation, web apps I'm logged into. Gobbler's browser extension bridges this gap.

The extension creates a WebSocket connection between my browser and Gobbler. My agents can extract content from pages I'm logged into, query my NotebookLM notebooks, even interact with other AI interfaces:

```bash
gobbler browser extract          # Extract current page
gobbler notebooklm query "..."   # Query my NotebookLM research
gobbler chatgpt query "..."      # Send to ChatGPT
gobbler claude query "..."       # Send to Claude.ai
```

**Security model**: Only tabs I explicitly add to a "Gobbler" tab group are accessible. No accidental access to banking, email, or anything I haven't opted in. The agent can only reach what I've explicitly shared.

## Pluggable Backends

Different situations call for different tradeoffs. Gobbler's provider system lets me swap backends without changing how I (or my agents) use it:

| Category | Provider | Tradeoff |
|----------|----------|----------|
| Transcription | `whisper-local` | Free, private, runs locally |
| Transcription | `openai-whisper` | Faster, costs money |
| Document | `docling` | Local Docker service |
| Webpage | `crawl4ai` | JavaScript rendering via Docker |

```bash
# Privacy-first: local transcription
gobbler audio meeting.mp3

# Speed-first: API transcription  
gobbler audio meeting.mp3 --provider openai-whisper
```

## Why This Matters

The value of AI agents scales with what they can access. An agent that can only see what I paste into a chat window is limited. An agent that can reach into my YouTube research, my PDFs, my authenticated browser sessions—that's an agent that can actually help with my real work.

Gobbler is infrastructure for agent capability. The more content types it can convert, the more useful my agents become.

## Open Source

MIT licensed. Built on Crawl4AI, Docling, faster-whisper, and youtube-transcript-api.

**[GitHub →](https://github.com/Enablement-Engineering/gobbler)**
