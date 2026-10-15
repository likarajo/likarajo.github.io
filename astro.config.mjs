// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// MUI v5 ships CommonJS deep imports. Astro 7 prerenders with Vite 8's
// environment API, which only copies `ssr.noExternal` onto the `ssr`
// environment. Static generation runs in `prerender`, so the same packages
// have to be listed there or Node tries to load them as ESM.
const muiPackages = [/^@mui\//];

// Those CommonJS files interop as `{ default: Component }` under Rolldown.
// Redirect deep imports to the ESM build, including after they resolve to
// an absolute path. Bundling (noExternal) resolves the extensionless
// relative imports inside that build.
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
  vite: {
    plugins: [muiEsmAlias()],
    resolve: { dedupe: ['react', 'react-dom'] },
    ssr: { noExternal: muiPackages },
    environments: {
      prerender: {
        resolve: { noExternal: muiPackages },
      },
    },
    build: {
      cssMinify: true,
    },
  },
  redirects: {
    '/profession': '/',
  },
});
