// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

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
  // MUI v5 ships CommonJS directory imports that Node's ESM loader rejects during static rendering.
  vite: {
    ssr: { noExternal: [/^@mui\//, 'react-lazy-load-image-component', 'react-responsive'] },
  },
  redirects: {
    '/profession': '/',
  },
});
