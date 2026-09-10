// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mustafamahmoud.net',
  trailingSlash: 'never',
  compressHTML: false,
  build: {
    // Emit `books.astro` -> `dist/books.html`, served at exactly `/books.html`.
    // Keeps the current live URLs (which have organic search traffic) with zero redirects.
    format: 'file',
    // Inline every stylesheet. Per-page CSS is only a few KB; inlining removes the
    // flash-of-unstyled-content and layout jump when navigating between pages.
    inlineStylesheets: 'always',
  },
  integrations: [
    mdx(),
    sitemap({
      // format:'file' routes report as "/books"; the real URLs are "/books.html".
      serialize(item) {
        if (item.url !== 'https://www.mustafamahmoud.net/') {
          item.url = item.url.replace(/\/$/, '') + '.html';
        }
        return item;
      },
    }),
  ],
});
