#!/usr/bin/env -S uvx --python 3.12 run
"""
Media Organizer Script

This script uses Claude Code SDK to process media captures (YouTube videos, articles, books)
into properly structured notes with appropriate metadata and cross-references.

Usage: npm run organize-media
"""

import subprocess
import sys
from pathlib import Path

def main():
    """Organize media content using Claude Code SDK"""
    
    # Define the prompt for Claude
    prompt = """
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
    """
    
    try:
        # Run Claude Code with the media organization prompt
        result = subprocess.run([
            "claude-code",
            "--prompt", prompt,
            "--tools", "all", 
            "--model", "sonnet"
        ], capture_output=True, text=True, check=True)
        
        print("✅ Media organization completed successfully!")
        print(f"Output: {result.stdout}")
        
        if result.stderr:
            print(f"Warnings: {result.stderr}")
            
    except subprocess.CalledProcessError as e:
        print(f"❌ Error organizing media: {e}")
        print(f"Stdout: {e.stdout}")
        print(f"Stderr: {e.stderr}")
        sys.exit(1)
    except FileNotFoundError:
        print("❌ Claude Code not found. Please install it first.")
        sys.exit(1)

if __name__ == "__main__":
    main()