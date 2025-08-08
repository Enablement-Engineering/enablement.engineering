#!/usr/bin/env node
/**
 * Enhanced Inbox Processor Script with Configuration Support
 *
 * This enhanced version demonstrates how to use configuration files,
 * role-based settings, error handling, and retry logic.
 *
 * Usage: npm run inbox
 */

import { claude, ConsoleLogger, LogLevel } from '@instantlyeasy/claude-code-sdk-ts';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current script directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const configPath = join(__dirname, '..', 'config', 'claude-config.json');

// Load configuration
let config;
try {
  config = JSON.parse(readFileSync(configPath, 'utf8'));
} catch (error) {
  console.error('❌ Failed to load configuration:', error.message);
  process.exit(1);
}

async function processInboxWithRetry(maxRetries = 3) {
  const role = config.roles['content-processor'];
  const logger = new ConsoleLogger(LogLevel.INFO, '[INBOX]');
  
  const prompt = `
  ${role.prompts.prefix}
  
  Read all files in obsidian-vault/core/ to understand the content strategy, workflow patterns, 
  and system organization. Then process all items in obsidian-vault/inbox/ and:
  
  1. Analyze each inbox item to determine its content type and topic
  2. Create properly structured notes with appropriate frontmatter
  3. Move organized content to the appropriate workflow folder (drafts, in-progress, etc.)
  4. Create cross-links to related existing content where relevant
  5. Update any necessary templates or patterns based on new content types discovered
  6. Commit each change with descriptive messages explaining what was organized and why
  
  Follow the voice and tone guidelines from the core documentation to ensure consistency.
  Make sure all frontmatter follows the established schemas.
  `;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Processing inbox items (attempt ${attempt}/${maxRetries})...`);
      
      const response = await claude()
        .withModel(role.model)
        .allowTools(...role.tools.allowed)
        .acceptEdits()
        .withTimeout(config.globalSettings.timeout)
        .withLogger(logger)
        .onToolUse(tool => console.log(`🔧 Using: ${tool.name}`))
        .onMessage(msg => {
          if (msg.type === 'assistant') {
            process.stdout.write('📝');
          }
        })
        .query(prompt)
        .asText();
      
      console.log('\n✅ Inbox processing completed successfully!');
      console.log('\n📋 Summary:');
      console.log(response);
      
      // Get usage statistics
      try {
        const parser = await claude()
          .withModel(role.model)
          .query('')
          .getParser();
        const usage = await parser.getUsage();
        
        console.log('\n💰 Usage Statistics:');
        console.log(`Tokens: ${usage.totalTokens || 'N/A'}`);
        console.log(`Cost: $${usage.totalCost?.toFixed(4) || 'N/A'}`);
      } catch (usageError) {
        // Usage stats not critical, continue
        console.log('📊 Usage statistics unavailable');
      }
      
      return; // Success, exit retry loop
      
    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed:`, error.message);
      
      if (error.name === 'CLINotFoundError') {
        console.error('💡 Please ensure Claude Code CLI is installed and authenticated:');
        console.error('   npm install -g @anthropic-ai/claude-code');
        console.error('   claude login');
        process.exit(1);
      }
      
      if (attempt === maxRetries) {
        console.error('❌ All retry attempts failed');
        process.exit(1);
      }
      
      // Exponential backoff
      const delay = Math.pow(2, attempt - 1) * 1000;
      console.log(`⏳ Waiting ${delay}ms before retry...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

async function main() {
  try {
    await processInboxWithRetry();
  } catch (error) {
    console.error('💥 Unexpected error:', error);
    process.exit(1);
  }
}

// Only run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}