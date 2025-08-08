#!/usr/bin/env -S uvx --python 3.12 run
"""
System Maintainer Script

This script uses Claude Code SDK to perform system maintenance tasks like
reviewing content quality, updating cross-links, and suggesting improvements
to the overall content management system.

Usage: npm run maintain
"""

import subprocess
import sys
from pathlib import Path

def main():
    """Perform system maintenance using Claude Code SDK"""
    
    # Define the prompt for Claude
    prompt = """
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
    """
    
    try:
        # Run Claude Code with the maintenance prompt
        result = subprocess.run([
            "claude-code",
            "--prompt", prompt, 
            "--tools", "all",
            "--model", "sonnet"
        ], capture_output=True, text=True, check=True)
        
        print("✅ System maintenance completed successfully!")
        print(f"Output: {result.stdout}")
        
        if result.stderr:
            print(f"Warnings: {result.stderr}")
            
    except subprocess.CalledProcessError as e:
        print(f"❌ Error during system maintenance: {e}")
        print(f"Stdout: {e.stdout}")
        print(f"Stderr: {e.stderr}")
        sys.exit(1)
    except FileNotFoundError:
        print("❌ Claude Code not found. Please install it first.")
        sys.exit(1)

if __name__ == "__main__":
    main()