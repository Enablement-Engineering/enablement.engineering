#!/usr/bin/env -S uvx --python 3.12 run
"""
Link Validator Script

This script uses Claude Code SDK to validate and maintain link integrity
across both the Obsidian vault and the published website content.

Usage: npm run validate-links
"""

import subprocess
import sys
from pathlib import Path

def main():
    """Validate links using Claude Code SDK"""
    
    # Define the prompt for Claude
    prompt = """
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
    """
    
    try:
        # Run Claude Code with the validation prompt
        result = subprocess.run([
            "claude-code",
            "--prompt", prompt,
            "--tools", "all",
            "--model", "sonnet"
        ], capture_output=True, text=True, check=True)
        
        print("✅ Link validation completed successfully!")
        print(f"Output: {result.stdout}")
        
        if result.stderr:
            print(f"Warnings: {result.stderr}")
            
    except subprocess.CalledProcessError as e:
        print(f"❌ Error validating links: {e}")
        print(f"Stdout: {e.stdout}")
        print(f"Stderr: {e.stderr}")
        sys.exit(1)
    except FileNotFoundError:
        print("❌ Claude Code not found. Please install it first.")
        sys.exit(1)

if __name__ == "__main__":
    main()