import type { ImageMetadata } from 'astro';

export const AUTHOR = 'Rajarshi Chattopadhyay';
export const DEFAULT_AUTHORS = [AUTHOR];

export function isImageMetadata(value: unknown): value is ImageMetadata {
  if (!value || typeof value !== 'object') return false;
  const image = value as Partial<ImageMetadata>;
  return typeof image.src === 'string' && typeof image.width === 'number' && typeof image.height === 'number';
}

/** ISO date from frontmatter. A year-only value stays a year so JSON-LD is not given a made-up day. */
export function publishedDate(data: { date?: string | undefined; year?: string | undefined }): string | undefined {
  if (data.date) return data.date;
  if (data.year && /^\d{4}$/.test(data.year)) return data.year;
  return undefined;
}

export function displayYear(data: { date?: string | undefined; year?: string | undefined }): string {
  return data.year || data.date?.slice(0, 4) || '';
}

/** RSS requires a full date. Year-only posts use 1 January UTC. */
export function rssPubDate(data: { date?: string | undefined; year?: string | undefined }): Date {
  if (data.date) return new Date(`${data.date}T00:00:00Z`);
  const year = Number(data.year);
  if (Number.isInteger(year)) return new Date(Date.UTC(year, 0, 1));
  return new Date(Date.UTC(1970, 0, 1));
}

const STATUS_LABEL: Record<string, string> = {
  preprint: 'Preprint',
  'in-progress': 'In progress',
  published: 'Published',
};

export function statusLabel(status: string): string {
  return STATUS_LABEL[status] ?? status;
}

export function formatBibAuthor(name: string): string {
  const trimmed = name.trim();
  if (!trimmed || trimmed.includes(',')) return trimmed;
  const parts = trimmed.split(/\s+/);
  if (parts.length < 2) return trimmed;
  const last = parts.at(-1) ?? trimmed;
  return `${last}, ${parts.slice(0, -1).join(' ')}`;
}

export function bibtexKey(slug: string): string {
  const key = slug.replace(/[^A-Za-z0-9_-]+/g, '');
  return key || 'study';
}

export function arxivId(url?: string): string | undefined {
  if (!url) return undefined;
  const match = url.match(/arxiv\.org\/(?:abs|pdf)\/([0-9]{4}\.[0-9]{4,5}(?:v\d+)?)/i);
  return match?.[1];
}

function escapeBib(value: string): string {
  return value.replaceAll('\\', '\\\\').replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('\n', ' ');
}

export function citationLine(options: {
  authors: string[];
  year: string;
  title: string;
  url: string;
  arxiv?: string;
}): string {
  const people = options.authors.map(formatBibAuthor).join(', ');
  const id = arxivId(options.arxiv);
  const preprint = id ? ` arXiv:${id}.` : '';
  return `${people}. (${options.year}). ${options.title}.${preprint} ${options.url}`;
}

export function bibtexEntry(options: {
  slug: string;
  authors: string[];
  year: string;
  title: string;
  url: string;
  status: string;
  arxiv?: string;
}): string {
  const id = arxivId(options.arxiv);
  const lines = [
    `@misc{${bibtexKey(options.slug)},`,
    `  title = {${escapeBib(options.title)}},`,
    `  author = {${escapeBib(options.authors.map(formatBibAuthor).join(' and '))}},`,
    `  year = {${options.year}},`,
    `  url = {${options.url}},`,
  ];
  if (id) {
    lines.push(`  eprint = {${id}},`, `  archivePrefix = {arXiv},`);
  }
  lines.push(`  note = {${escapeBib(statusLabel(options.status))}},`, '}');
  return lines.join('\n');
}
