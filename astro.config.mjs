// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import parchmentTheme from './src/themes/parchment-light.json';

// https://astro.build/config
export default defineConfig({
  site: 'https://enablement.engineering',
  integrations: [tailwind(), react(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: parchmentTheme,
    },
  },
});
