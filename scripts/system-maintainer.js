#!/usr/bin/env node
/**
 * System Maintainer Script
 *
 * This script uses the Claude Code JavaScript SDK to perform system maintenance 
 * tasks like reviewing content quality, updating cross-links, and suggesting 
 * improvements to the overall content management system.
 *
 * Usage: npm run maintain
 */

import { claude } from '@instantlyeasy/claude-code-sdk-ts';
import { ConsoleLogger, LogLevel } from '@instantlyeasy/claude-code-sdk-ts';

async function main() {
  console.log('🔧 Performing system maintenance with Claude...');
  
  // Define the prompt for Claude
  const prompt = `
  Read all files in obsidian-vault/core/ and CLAUDE.md to understand the system architecture
  and maintenance requirements. Then perform system maintenance tasks:
  
  1. Review all content across the obsidian-vault for:
     - Consistency in voice and tone
     - Proper frontmatter usage
     - Cross-linking opportunities
     - Content gaps or redundancies
  
  2. Update and maintain:
     - Cross-references between related notes
     - Tag consistency and organization  
     - Template relevance and completeness
     - Link integrity across all content
  
  3. Analyze workflow patterns and suggest:
     - Process improvements
     - Template updates
     - Organization optimizations
     - Automation opportunities
  
  4. Clean up:
     - Orphaned files
     - Broken links
     - Outdated references
     - Inconsistent formatting
  
  5. Generate a maintenance report with:
     - Changes made
     - Issues identified
     - Recommendations for improvement
     - Content statistics and patterns
  
  Commit all maintenance changes with detailed explanations of what was improved and why.
  `;
  
  try {
    const logger = new ConsoleLogger(LogLevel.INFO);
    
    const response = await claude()
      .withModel('sonnet')
      .allowTools('Read', 'Write', 'Edit', 'LS', 'Bash', 'Grep', 'Glob')
      .acceptEdits()
      .withTimeout(120000) // 2 minutes for thorough analysis
      .withLogger(logger)
      .onToolUse(tool => console.log(`🔧 Using: ${tool.name}`))
      .query(prompt)
      .asText();
    
    console.log('✅ System maintenance completed successfully!');
    console.log('\n📋 Maintenance Report:');
    console.log(response);
    
  } catch (error) {
    console.error('❌ Error during system maintenance:', error.message);
    
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