import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { rssPubDate } from '../lib/publishing';

export async function GET(context: APIContext) {
  const writing = await getCollection('writing', ({ data }) => !data.draft);
  const studies = await getCollection('studies', ({ data }) => !data.draft);
  const site = context.site ?? 'https://likarajo.github.io';

  const items = [
    ...writing.map((piece) => ({
      title: piece.data.title,
      description: piece.data.description || piece.data.summary,
      pubDate: rssPubDate(piece.data),
      link: piece.data.href ?? `/writing/${piece.id}/`,
    })),
    ...studies.map((study) => ({
      title: study.data.title,
      description: study.data.description || study.data.abstract,
      pubDate: rssPubDate(study.data),
      link: `/research/${study.id}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Rajarshi Chattopadhyay',
    description: 'Writing and research by Rajarshi Chattopadhyay.',
    site,
    items,
    customData: '<language>en-us</language>',
  });
}
