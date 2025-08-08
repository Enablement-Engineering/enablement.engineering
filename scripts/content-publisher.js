#!/usr/bin/env node
/**
 * Content Publisher Script
 *
 * This script uses the Claude Code JavaScript SDK to publish content from 
 * obsidian-vault/ready-to-publish/ to the appropriate src/content/ collection, 
 * handling format conversions, media assets, and frontmatter transformations.
 *
 * Usage: npm run publish
 */

import { claude } from '@instantlyeasy/claude-code-sdk-ts';
import { ConsoleLogger, LogLevel } from '@instantlyeasy/claude-code-sdk-ts';

async function main() {
  console.log('📤 Publishing ready content with Claude...');
  
  // Define the prompt for Claude
  const prompt = `
  Read all files in obsidian-vault/core/ to understand the publishing workflow and requirements.
  Then process all content in obsidian-vault/ready-to-publish/ and:
  
  1. Convert all Obsidian wikilinks ([[link]]) to standard markdown links
  2. Process any media references and copy assets to public/ directory with proper organization
  3. Transform Obsidian frontmatter to website frontmatter schema (remove workflow fields, add web-specific fields)
  4. Move processed content to appropriate src/content/ collection (posts, projects, resources, etc.) based on content type
  5. Archive original content to obsidian-vault/published/ folder
  6. Update any internal cross-references to maintain link integrity
  7. Validate that all published content follows the website schema requirements
  8. Commit all changes with descriptive messages
  
  Ensure URLs remain consistent (/posts/slug format) and all media assets are properly referenced.
  Preserve all essential metadata while cleaning up Obsidian-specific elements.
  `;
  
  try {
    const logger = new ConsoleLogger(LogLevel.INFO);
    
    const response = await claude()
      .withModel('sonnet')
      .allowTools('Read', 'Write', 'Edit', 'LS', 'Bash', 'Grep')
      .acceptEdits()
      .withLogger(logger)
      .onToolUse(tool => console.log(`🔧 Using: ${tool.name}`))
      .onMessage(msg => {
        if (msg.type === 'assistant') {
          // Show progress for long operations
          console.log('📝 Processing...');
        }
      })
      .query(prompt)
      .asText();
    
    console.log('✅ Content publishing completed successfully!');
    console.log('\n📋 Summary:');
    console.log(response);
    
  } catch (error) {
    console.error('❌ Error publishing content:', error.message);
    
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