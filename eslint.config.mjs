import antfu from '@antfu/eslint-config'
import rules from './scripts/eslint-rules.mjs'

export default antfu({
  formatters: true,
  unocss: true,
  solid: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  ignores: [
    'src/bindings.ts',
    'src-tauri/',
  ],
  name: 'zeithrold/base',
  rules,
})
