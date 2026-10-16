/** Replace ```mermaid fences with a div the browser renderer can draw. */

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

export const mermaidPlugin = {
  name: 'mermaid',
  code(node) {
    if (node.lang !== 'mermaid') return;
    return {
      type: 'html',
      value: `<div class="mermaid">${escapeHtml(node.value)}</div>`,
    };
  },
};
