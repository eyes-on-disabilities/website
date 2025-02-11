import { defineConfig } from 'vitepress'
import { de } from './de'

export default defineConfig({
  locales: {
    root: { label: 'Deutsch', ...de },
  }
})
