import katex from 'katex';

/** Turn Sätteri math nodes into KaTeX HTML at build time. */
export const katexPlugin = {
  name: 'katex',
  element: {
    filter: ['code'],
    visit(node, ctx) {
      const classes = node.properties?.className;
      if (!Array.isArray(classes) || !classes.includes('language-math')) return;
      const html = katex.renderToString(ctx.textContent(node), {
        displayMode: classes.includes('math-display'),
        throwOnError: false,
        output: 'html',
      });
      return { type: 'raw', value: html };
    },
  },
};
