// astro.config.mjs
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: [path.resolve('.')],
      },
    },
  },
})