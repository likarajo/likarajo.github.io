// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// MUI v5 deep imports resolve to CommonJS files that call require().
// Vite then executes those files as ESM. Redirect them to the ESM build,
// including after they have been resolved to an absolute path.
function muiEsmAlias() {
  return {
    name: 'mui-esm-alias',
    enforce: 'pre',
    async resolveId(source) {
      const id = source.replaceAll('\\', '/');
      const match = id.match(/^(.*@mui\/(?:system|utils|icons-material)\/)(?!esm\/)(.*)$/);
      if (!match) return null;
      const redirected = `${match[1]}esm/${match[2]}`;
      const resolved = await this.resolve(redirected, undefined, { skipSelf: true });
      return resolved ?? redirected;
    },
  };
}

// User site on GitHub Pages, served from the domain root.
export default defineConfig({
  site: 'https://likarajo.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [
    react(),
    sitemap({
      // Leave out the redirect and the duplicate routes whose canonical URL lives elsewhere.
      filter: (page) =>
        !['/profession/', '/blogs/', '/cities/', '/nature/', '/culinary/'].includes(new URL(page).pathname),
    }),
  ],
  // Performance optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  // noExternal bundles these .js ESM files, because their packages are not marked "type": "module".
  vite: {
    plugins: [muiEsmAlias()],
    resolve: { dedupe: ['react', 'react-dom'] },
    ssr: { noExternal: [/^@mui\//] },
    build: {
      cssMinify: true,
    },
  },
  redirects: {
    '/profession': '/',
  },
});
