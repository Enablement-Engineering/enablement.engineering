// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import parchmentLight from './src/themes/parchment-light.json';
import parchmentDark from './src/themes/parchment-dark.json';

// https://astro.build/config
export default defineConfig({
  site: 'https://enablement.engineering',
  integrations: [tailwind(), react(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: parchmentLight,
        dark: parchmentDark,
      },
      defaultColor: false,
    },
  },
});
