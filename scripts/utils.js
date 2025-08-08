/**
 * Shared Utilities for Claude Code Scripts
 * 
 * Common functions for configuration loading, error handling, and retry logic.
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { claude, ConsoleLogger, LogLevel } from '@instantlyeasy/claude-code-sdk-ts';

// Get config path relative to this utils file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CONFIG_PATH = join(__dirname, '..', 'config', 'claude-config.json');

/**
 * Load configuration from file
 * @returns {object} Parsed configuration object
 */
export function loadConfig() {
  try {
    return JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
  } catch (error) {
    console.error('❌ Failed to load configuration from:', CONFIG_PATH);
    console.error('Error:', error.message);
    process.exit(1);
  }
}

/**
 * Create a Claude instance configured with role settings
 * @param {string} roleName - The role name from config
 * @param {object} config - The loaded configuration
 * @param {object} options - Additional options
 * @returns {object} Configured Claude instance
 */
export function createClaudeInstance(roleName, config, options = {}) {
  const role = config.roles[roleName];
  if (!role) {
    throw new Error(`Role '${roleName}' not found in configuration`);
  }

  const logger = new ConsoleLogger(
    LogLevel[config.globalSettings.logLevel] || LogLevel.INFO,
    `[${roleName.toUpperCase()}]`
  );

  return claude()
    .withModel(role.model)
    .allowTools(...role.tools.allowed)
    .acceptEdits()
    .withTimeout(options.timeout || config.globalSettings.timeout)
    .withLogger(logger);
}

/**
 * Execute a Claude operation with retry logic
 * @param {function} operation - Async function that returns a Claude query
 * @param {number} maxRetries - Maximum number of retry attempts
 * @param {string} operationName - Name for logging purposes
 * @returns {Promise<string>} The result of the operation
 */
export async function executeWithRetry(operation, maxRetries = 3, operationName = 'operation') {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Starting ${operationName} (attempt ${attempt}/${maxRetries})...`);
      
      const result = await operation();
      
      console.log(`✅ ${operationName} completed successfully!`);
      return result;
      
    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed:`, error.message);
      
      if (error.name === 'CLINotFoundError') {
        console.error('💡 Please ensure Claude Code CLI is installed and authenticated:');
        console.error('   npm install -g @anthropic-ai/claude-code');
        console.error('   claude login');
        process.exit(1);
      }
      
      if (attempt === maxRetries) {
        console.error(`❌ All retry attempts for ${operationName} failed`);
        throw error;
      }
      
      // Exponential backoff with jitter
      const baseDelay = Math.pow(2, attempt - 1) * 1000;
      const jitter = Math.random() * 1000;
      const delay = baseDelay + jitter;
      
      console.log(`⏳ Waiting ${Math.round(delay)}ms before retry...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

/**
 * Display usage statistics if available
 * @param {object} claudeInstance - The Claude instance to get stats from
 */
export async function displayUsageStats(claudeInstance) {
  try {
    const parser = await claudeInstance.query('').getParser();
    const usage = await parser.getUsage();
    
    if (usage) {
      console.log('\n💰 Usage Statistics:');
      console.log(`📊 Input tokens: ${usage.inputTokens || 'N/A'}`);
      console.log(`📤 Output tokens: ${usage.outputTokens || 'N/A'}`);
      console.log(`🔢 Total tokens: ${usage.totalTokens || 'N/A'}`);
      console.log(`💵 Estimated cost: $${usage.totalCost?.toFixed(4) || 'N/A'}`);
    }
  } catch (error) {
    // Usage stats not critical, just log briefly
    console.log('📊 Usage statistics unavailable');
  }
}

/**
 * Common event handlers for progress indication
 */
export const eventHandlers = {
  onToolUse: (tool) => console.log(`🔧 Using: ${tool.name}`),
  onProgress: (msg) => {
    if (msg.type === 'assistant') {
      process.stdout.write('.');
    }
  },
  onVerboseProgress: (msg) => {
    if (msg.type === 'assistant') {
      console.log('📝 Processing...');
    }
  }
};

/**
 * Standard error handler for script main functions
 * @param {Error} error - The error to handle
 * @param {string} scriptName - Name of the script for logging
 */
export function handleScriptError(error, scriptName = 'script') {
  console.error(`💥 Fatal error in ${scriptName}:`, error.message);
  
  if (error.stack && process.env.NODE_ENV === 'development') {
    console.error('Stack trace:', error.stack);
  }
  
  process.exit(1);
}

/**
 * Get a specific prompt template with role prefix
 * @param {string} roleName - The role name
 * @param {object} config - The configuration object
 * @param {string} template - The prompt template
 * @returns {string} The formatted prompt
 */
export function formatPrompt(roleName, config, template) {
  const role = config.roles[roleName];
  if (!role) {
    throw new Error(`Role '${roleName}' not found in configuration`);
  }
  
  return `${role.prompts.prefix}\n\n${template}`;
}