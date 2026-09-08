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
    inlineStylesheets: 'auto',
  },
  integrations: [mdx(), sitemap()],
});
