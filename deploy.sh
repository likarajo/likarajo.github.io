#!/bin/bash

# Exit on any error
set -e

# Build the project (this depends on your project setup, e.g., React, Vue)
echo "Building the project..."
npm run build  # Adjust this if you use a different build command

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist --force

echo "Deployment successful! Your site is live at https://likarajo.github.io"
