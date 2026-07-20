import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.yilongscrubs.com',
  integrations: [tailwind(), sitemap({
    filter: (page) =>
      !page.endsWith('/about/') &&
      !page.endsWith('/fabric-tech/'),
  })],
  output: 'static',
});