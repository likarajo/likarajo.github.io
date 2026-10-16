import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const optionalText = z.preprocess(
  (value) => (value == null || value === '' ? undefined : value),
  z.string().optional(),
);

const optionalUrl = z.preprocess(
  (value) => (value == null || value === '' ? undefined : value),
  z.string().url().optional(),
);

const optionalDate = z.preprocess(
  (value) => (value == null || value === '' ? undefined : value),
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
);

const crossPosts = z.preprocess(
  (value) => (value == null ? undefined : value),
  z
    .array(
      z.object({
        title: z.string(),
        url: z.string().url(),
      }),
    )
    .optional(),
);

// Each Markdown file in src/content/writing is one piece on the Writing page.
// Set `href` to link to an article published elsewhere; leave it out and write
// the article body in the file to publish it on this site at /writing/<file-name>/.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: optionalText,
      // Optional full publish date (YYYY-MM-DD); used to sort newest first.
      date: optionalDate,
      summary: z.string(),
      description: optionalText,
      href: optionalUrl,
      order: z.number().optional(),
      draft: z.boolean().default(false),
      canonical: optionalUrl,
      updated: optionalDate,
      crossPosts,
      image: z.preprocess(
        (value) => (value == null || value === '' ? undefined : value),
        image().optional(),
      ),
      imageAlt: optionalText,
    }),
});

// Research studies. A page is published at /research/<file-name>/ unless draft is true.
const studies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/studies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      abstract: z.string(),
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      status: z.enum(['preprint', 'in-progress', 'published']).default('preprint'),
      authors: z.preprocess(
        (value) => (value == null || (Array.isArray(value) && value.length === 0) ? undefined : value),
        z.array(z.string().min(1)).optional(),
      ),
      arxiv: optionalUrl,
      code: optionalUrl,
      description: optionalText,
      canonical: optionalUrl,
      updated: optionalDate,
      draft: z.boolean().default(false),
      image: z.preprocess(
        (value) => (value == null || value === '' ? undefined : value),
        image().optional(),
      ),
      imageAlt: optionalText,
    }),
});

export const collections = { writing, studies };
