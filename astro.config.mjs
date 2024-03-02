import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://konstantine1307.github.io',
  integrations: [tailwind({
    nesting: true
  })]
});