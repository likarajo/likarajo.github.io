import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each Markdown file in src/content/writing is one piece on the Writing page.
// Set `href` to link to an article published elsewhere; leave it out and write
// the article body in the file to publish it on this site at /writing/<file-name>/.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    summary: z.string(),
    href: z.string().url().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
