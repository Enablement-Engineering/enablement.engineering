#!/usr/bin/env node
/**
 * Media Organizer Script
 *
 * This script uses the Claude Code JavaScript SDK to process media captures 
 * (YouTube videos, articles, books) into properly structured notes with 
 * appropriate metadata and cross-references.
 *
 * Usage: npm run organize-media
 */

import { claude } from '@instantlyeasy/claude-code-sdk-ts';
import { ConsoleLogger, LogLevel } from '@instantlyeasy/claude-code-sdk-ts';

async function main() {
  console.log('📚 Organizing media content with Claude...');
  
  // Define the prompt for Claude
  const prompt = `
  Read all files in obsidian-vault/core/ to understand the media organization patterns.
  Then process content in obsidian-vault/media/ folders:
  
  For YouTube content:
  1. Extract key concepts and timestamps
  2. Create structured notes with video metadata
  3. Link to related existing content
  4. Generate summary and key takeaways
  
  For Article content:
  1. Extract main arguments and evidence
  2. Create response notes with your analysis
  3. Link to related topics and themes
  4. Generate actionable insights
  
  For Book content:
  1. Organize quotes and concepts by theme
  2. Create chapter summaries if applicable
  3. Connect ideas to other sources
  4. Generate implementation notes
  
  For all media types:
  - Use proper frontmatter with source metadata
  - Create appropriate tags and categories
  - Establish cross-references to related content
  - Move organized content to appropriate workflow folders
  - Archive raw captures appropriately
  - Commit changes with descriptive messages
  
  Follow the established voice and tone guidelines while maintaining source attribution.
  `;
  
  try {
    const logger = new ConsoleLogger(LogLevel.INFO);
    
    const response = await claude()
      .withModel('sonnet')
      .allowTools('Read', 'Write', 'Edit', 'LS', 'Bash', 'Grep')
      .acceptEdits()
      .withTimeout(90000) // 1.5 minutes for media processing
      .withLogger(logger)
      .onToolUse(tool => console.log(`🔧 Using: ${tool.name}`))
      .onMessage(msg => {
        if (msg.type === 'assistant') {
          // Show progress for media processing
          process.stdout.write('.');
        }
      })
      .query(prompt)
      .asText();
    
    console.log('\n✅ Media organization completed successfully!');
    console.log('\n📋 Summary:');
    console.log(response);
    
  } catch (error) {
    console.error('❌ Error organizing media:', error.message);
    
    if (error.name === 'CLINotFoundError') {
      console.error('💡 Please ensure Claude Code CLI is installed and authenticated:');
      console.error('   npm install -g @anthropic-ai/claude-code');
      console.error('   claude login');
    }
    
    process.exit(1);
  }
}

// Only run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  });
}