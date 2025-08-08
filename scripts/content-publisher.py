#!/usr/bin/env -S uvx --python 3.12 run
"""
Content Publisher Script

This script uses Claude Code SDK to publish content from obsidian-vault/ready-to-publish/
to the appropriate src/content/ collection, handling format conversions, media assets,
and frontmatter transformations.

Usage: npm run publish
"""

import subprocess
import sys
from pathlib import Path

def main():
    """Publish ready content using Claude Code SDK"""
    
    # Define the prompt for Claude
    prompt = """
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
    """
    
    try:
        # Run Claude Code with the publishing prompt
        result = subprocess.run([
            "claude-code", 
            "--prompt", prompt,
            "--tools", "all",
            "--model", "sonnet"
        ], capture_output=True, text=True, check=True)
        
        print("✅ Content publishing completed successfully!")
        print(f"Output: {result.stdout}")
        
        if result.stderr:
            print(f"Warnings: {result.stderr}")
            
    except subprocess.CalledProcessError as e:
        print(f"❌ Error publishing content: {e}")
        print(f"Stdout: {e.stdout}")
        print(f"Stderr: {e.stderr}")
        sys.exit(1)
    except FileNotFoundError:
        print("❌ Claude Code not found. Please install it first.")
        sys.exit(1)

if __name__ == "__main__":
    main()