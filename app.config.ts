import { defineConfig } from '@solidjs/start/config'
import DevTools from 'solid-devtools/vite'
import UnoCSS from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import TsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  ssr: false,
  server: {
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      UnoCSS(),
      DevTools({
        autoname: true,
        locator: true,
      }),
      TsconfigPaths(),
      Inspect(),
    ],
  },
})
