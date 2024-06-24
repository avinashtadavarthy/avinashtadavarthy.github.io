#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Checking out to orphan gh-pages branch..."
git checkout --orphan gh-pages

echo "Building the project..."
npm run build

# Determine the build output folder
if [ -d "dist" ]; then
  folderName="dist"
else
  folderName="build"
fi

echo "Adding build files to gh-pages branch..."
git --work-tree $folderName add --all
git --work-tree $folderName commit -m "gh-pages"

echo "Pushing to gh-pages branch..."
git push origin HEAD:gh-pages --force

echo "Switching back to master branch..."
git checkout -f master

echo "Deleting local gh-pages branch..."
git branch -D gh-pages

echo "Successfully deployed!"
