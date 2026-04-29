#!/bin/bash
# Git LFS Setup Script
# Run this script once to configure Git LFS for your vault

cd "$(dirname "$0")"

echo "Configuring Git LFS for media files..."
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.jpeg"
git lfs track "*.gif"
git lfs track "*.webp"
git lfs track "*.pdf"

echo "Git LFS tracking configured:"
git lfs track --list

echo ""
echo "To migrate existing files to Git LFS, run:"
echo "  git lfs migrate import --include='*.png,*.jpg,*.jpeg,*.gif,*.webp,*.pdf'"
