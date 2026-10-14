#!/bin/bash

# Exit on any error
set -e

# Build the static Astro site into dist/
echo "Building the project..."
npm run build

# Deploy dist/ to the gh-pages branch (GitHub Pages user site, served at the root).
# --dotfiles keeps dist/.nojekyll so GitHub Pages serves the _astro/ folder.
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist --dotfiles

echo "Deployment successful! Your site is live at https://likarajo.github.io"
