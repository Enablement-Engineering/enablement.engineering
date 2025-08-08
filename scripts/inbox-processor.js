#!/usr/bin/env node
/**
 * Inbox Processor Script
 *
 * This script uses the Claude Code JavaScript SDK to process unstructured ideas 
 * in the obsidian-vault/inbox/ directory and organize them into proper notes 
 * according to the system patterns defined in obsidian-vault/core/.
 *
 * Usage: npm run inbox
 */

import { 
  loadConfig, 
  createClaudeInstance, 
  executeWithRetry, 
  displayUsageStats,
  eventHandlers,
  formatPrompt,
  handleScriptError
} from './utils.js';

const PROMPT_TEMPLATE = `
Read all files in obsidian-vault/core/ to understand the content strategy, workflow patterns, 
and system organization. Then process all items in obsidian-vault/inbox/ and:

1. Analyze each inbox item to determine its content type and topic
2. Create properly structured notes with appropriate frontmatter
3. Move organized content to the appropriate workflow folder (drafts, in-progress, etc.)
4. Create cross-links to related existing content where relevant
5. Update any necessary templates or patterns based on new content types discovered
6. IMPORTANT: Preserve the original raw input by appending it at the bottom of each processed file under a "## Raw Input" section - this maintains the original brainstorm for reference while being token-efficient
7. Commit each change with descriptive messages explaining what was organized and why

Follow the voice and tone guidelines from the core documentation to ensure consistency.
Make sure all frontmatter follows the established schemas.

For token efficiency with large inputs, use the Write tool to directly append the raw input content rather than including it in your response text.
`;

async function processInbox() {
  const config = loadConfig();
  const claudeInstance = createClaudeInstance('content-processor', config);
  const prompt = formatPrompt('content-processor', config, PROMPT_TEMPLATE);
  
  return executeWithRetry(async () => {
    const response = await claudeInstance
      .onToolUse(eventHandlers.onToolUse)
      .onMessage(eventHandlers.onProgress)
      .query(prompt)
      .asText();
    
    console.log('\n📋 Summary:');
    console.log(response);
    
    // Show usage statistics
    await displayUsageStats(claudeInstance);
    
    return response;
  }, 3, 'inbox processing');
}

async function main() {
  try {
    await processInbox();
  } catch (error) {
    handleScriptError(error, 'inbox-processor');
  }
}

// Only run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => handleScriptError(error, 'inbox-processor'));
}