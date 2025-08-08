#!/usr/bin/env -S uvx --python 3.12 run
"""
Inbox Processor Script

This script uses Claude Code SDK to process unstructured ideas in the obsidian-vault/inbox/
directory and organize them into proper notes according to the system patterns defined
in obsidian-vault/core/.

Usage: npm run inbox
"""

import subprocess
import sys
from pathlib import Path

def main():
    """Process inbox items using Claude Code SDK"""
    
    # Define the prompt for Claude
    prompt = """
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
    """
    
    try:
        # Run Claude Code with the processing prompt
        result = subprocess.run([
            "claude-code",
            "--prompt", prompt,
            "--tools", "all",
            "--model", "sonnet"
        ], capture_output=True, text=True, check=True)
        
        print("✅ Inbox processing completed successfully!")
        print(f"Output: {result.stdout}")
        
        if result.stderr:
            print(f"Warnings: {result.stderr}")
            
    except subprocess.CalledProcessError as e:
        print(f"❌ Error processing inbox: {e}")
        print(f"Stdout: {e.stdout}")
        print(f"Stderr: {e.stderr}")
        sys.exit(1)
    except FileNotFoundError:
        print("❌ Claude Code not found. Please install it first.")
        sys.exit(1)

if __name__ == "__main__":
    main()