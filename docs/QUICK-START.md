# Quick Start Guide

> Get started with common tasks in 5 minutes

## Adding a New Blog Post

See [WRITING.md](../WRITING.md) for the browser editor, images, diagrams, and SEO fields.

1. Create a file: `src/content/writing/my-new-post.md`
2. Add frontmatter:
   ```markdown
   ---
   title: "My Blog Post Title"
   year: "2026"
   order: 20
   summary: "Brief summary"
   draft: false
   ---
   
   # My Blog Post Title
   
   Your content here...
   ```
3. Save and it will appear on `/writing/`

## Adding a New Project

1. Create a file: `src/pages/work/my-project.astro`
2. Copy structure from existing case study (e.g., `ai-agent-chatbot.astro`)
3. Update content with your project details
4. Add project card to `src/pages/work/index.astro`

## Publishing a Draft Blog Post

1. Find your draft in `src/content/writing/`
2. Change `draft: true` to `draft: false`
3. Post will appear on the site

## Making Publications Page Public

1. Add your publications to `src/pages/publications.astro`
2. Change `noindex={true}` to `noindex={false}`
3. Add to navigation in `src/components/Navbar.astro`:
   ```javascript
   { id: 'nav-publications', href: '/publications/', label: 'Publications' }
   ```

## Deploying Changes

```bash
npm run deploy
```

That's it! Changes will be live in a few minutes at https://likarajo.github.io
