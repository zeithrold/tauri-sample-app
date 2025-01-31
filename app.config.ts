import { defineConfig } from '@solidjs/start/config'
import devtools from 'solid-devtools/vite'
import unocss from 'unocss/vite'
import autoimport from 'unplugin-auto-import/vite'

export default defineConfig({
  ssr: false,
  server: {
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      unocss(),
      devtools({
        autoname: true,
        locator: true,
      }),
      autoimport({
        imports: ['solid-js'],
        dts: true,
      }),
    ],
  },
})
