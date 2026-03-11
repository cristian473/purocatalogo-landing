// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://purocatalogo.com',

  integrations: [
    alpinejs(),
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});