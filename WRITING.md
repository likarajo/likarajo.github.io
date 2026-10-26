# Publishing

New writing and research studies are Markdown files. Adding one does not require a component, a route, or a nav change. Pushing to `master` builds the site and GitHub Actions deploys it to [likarajo.github.io](https://likarajo.github.io).

## In the browser (Pages CMS)

[Pages CMS](https://pagescms.org) is a free editor that commits to this GitHub repo.

1. Open [app.pagescms.org](https://app.pagescms.org).
2. Sign in with GitHub.
3. Install the Pages CMS GitHub App on the account that owns `likarajo/likarajo.github.io`, and grant it access to that repository, if GitHub asks.
4. Open the `likarajo/likarajo.github.io` repository. Pages CMS reads `.pages.yml` from the branch you select. After this change is on `master`, the default branch is the one to use.
5. Choose **Writing** or **Studies**.
6. Create an entry. The filename becomes the URL (`my-note.md` → `/writing/my-note/` or `/research/my-note/`). You can edit the filename while creating the entry.
7. Write the body in Markdown. For a diagram, switch the body editor to source mode and add a `mermaid` fence (see below).
8. Use **Draft** until the piece is ready. Drafts are left out of the site, the sitemap, and `/rss.xml`.
9. Save. A commit to `master` starts the deploy. The live site updates when the [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow finishes.

## As a file

Create `src/content/writing/my-note.md`:

```markdown
---
title: "My note"
summary: "One sentence for the Writing page."
description: "Optional meta description. The summary is used when this is omitted."
date: "2026-10-16"
year: "2026"
draft: false
---

The piece itself, in Markdown.
```

`year` can be omitted when `date` is set. The Writing page then shows the year from the date.

Set `href` to an external URL when the piece lives somewhere else. Those entries stay on the Writing list and in the RSS feed, and they do not get a page on this site.

## Fields

| Field | Role |
| --- | --- |
| `title`, `summary` | Required. The summary is the list blurb and the default description. |
| `description` | Meta, Open Graph, Twitter, JSON-LD, and RSS description. |
| `date` | `YYYY-MM-DD`. Sort order, `datePublished`, and the RSS date. |
| `updated` | Optional `dateModified`. |
| `year` | Label on the list. Defaults to the year of `date`. |
| `draft` | `true` keeps the file unpublished. |
| `canonical` | Optional canonical URL when another copy should be preferred. |
| `crossPosts` | `{ title, url }` list, shown as "Also published on". |
| `image`, `imageAlt` | Hero and social image. The profile photo is the Open Graph fallback. |
| `href` | External link instead of a local page. |
| `order` | Unused by the public list. Kept so older files still validate. |

A recommended social image is about 1200×630 JPG or PNG. Astro converts a local image to a JPEG for the card.

## Images

Put figures in `src/assets/writing/` (studies: `src/assets/research/`) and refer to them with a path relative to the Markdown file:

```markdown
![Alt text](../../assets/writing/figure.jpg)
```

A file beside the post works too: `![Alt text](./figure.jpg)`.

Astro optimizes those local images at build time (resized, responsive `srcset`). Files in `public/` are copied as-is and are not optimized. Pages CMS stores uploads in `src/assets/writing` or `src/assets/research` and writes the relative path for you.

## Diagrams

````markdown
```mermaid
flowchart LR
  A[Question] --> B[Method]
```
````

The fence is rendered in the browser as SVG so it can follow the light and dark theme. The diagram source remains in the page. Pages that contain a diagram load Mermaid 12.2.0 from jsDelivr; other pages do not.

## Studies

Research studies live in `src/content/studies/` and are published at `/research/<filename>/`. Fields: `title`, `abstract`, `date`, `status` (`preprint`, `in-progress`, `published`), optional `arxiv`, `code`, and `authors`. When `authors` is omitted, the citation uses Rajarshi Chattopadhyay.

Each published study page includes a citation and a BibTeX block. `src/content/studies/_template-study.md` is an example with `draft: true`, so it is not on the site.

## Feeds and crawlers

- RSS: [https://likarajo.github.io/rss.xml](https://likarajo.github.io/rss.xml)
- Sitemap: [https://likarajo.github.io/sitemap-index.xml](https://likarajo.github.io/sitemap-index.xml) (already linked from `public/robots.txt`)

Drafts are not added to either. The sitemap is regenerated on every build.
