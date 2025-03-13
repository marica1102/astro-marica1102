import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://marica1102.github.io',
  base: '/course-astro-main',
  integrations: [mdx(), sitemap(), icon()],
})
