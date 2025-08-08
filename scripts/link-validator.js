#!/usr/bin/env node
/**
 * Link Validator Script
 *
 * This script uses the Claude Code JavaScript SDK to validate and maintain 
 * link integrity across both the Obsidian vault and the published website content.
 *
 * Usage: npm run validate-links
 */

import { claude } from '@instantlyeasy/claude-code-sdk-ts';
import { ConsoleLogger, LogLevel } from '@instantlyeasy/claude-code-sdk-ts';

async function main() {
  console.log('🔗 Validating links with Claude...');
  
  // Define the prompt for Claude
  const prompt = `
  Perform comprehensive link validation across the content management system:
  
  1. Check Obsidian vault links:
     - Verify all wikilinks ([[link]]) resolve to existing files
     - Identify orphaned notes (not linked from anywhere)
     - Find broken internal references
     - Validate media file references
  
  2. Check published website links:
     - Verify all internal markdown links work correctly
     - Check external links are still accessible (sample check)
     - Ensure asset references point to existing files
     - Validate cross-references between posts
  
  3. Cross-system validation:
     - Ensure content moved from vault to website maintains link integrity
     - Check that published content references are properly converted
     - Validate that archived content links are updated
  
  4. Generate validation report:
     - List all broken links found
     - Identify orphaned content
     - Suggest link improvements or additions
     - Provide link statistics and health metrics
  
  5. Auto-fix when possible:
     - Update simple broken internal links
     - Remove links to deleted content
     - Suggest replacement links for removed content
  
  Commit any fixes made with detailed explanations of what was repaired.
  `;
  
  try {
    const logger = new ConsoleLogger(LogLevel.INFO);
    
    const response = await claude()
      .withModel('sonnet')
      .allowTools('Read', 'Write', 'Edit', 'LS', 'Bash', 'Grep', 'Glob')
      .acceptEdits()
      .withTimeout(90000) // 1.5 minutes for link validation
      .withLogger(logger)
      .onToolUse(tool => console.log(`🔧 Using: ${tool.name}`))
      .onMessage(msg => {
        if (msg.type === 'assistant') {
          // Show progress for link checking
          process.stdout.write('🔍');
        }
      })
      .query(prompt)
      .asText();
    
    console.log('\n✅ Link validation completed successfully!');
    console.log('\n📋 Validation Report:');
    console.log(response);
    
  } catch (error) {
    console.error('❌ Error validating links:', error.message);
    
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