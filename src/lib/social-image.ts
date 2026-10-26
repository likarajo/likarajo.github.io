import { getImage } from 'astro:assets';
import { isImageMetadata } from './publishing';

/** Absolute JPEG URL for Open Graph and Twitter, via Astro's image pipeline when the file is local. */
export async function socialImageUrl(image: unknown, site: URL): Promise<string | undefined> {
  if (isImageMetadata(image)) {
    const generated = await getImage({
      src: image,
      format: 'jpg',
      width: Math.min(1200, image.width),
      quality: 80,
    });
    return new URL(generated.src, site).href;
  }
  if (typeof image === 'string' && image) return new URL(image, site).href;
  return undefined;
}
