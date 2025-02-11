import { defineConfig } from 'vitepress'
import { de } from './de'

export default defineConfig({
  locales: {
    de: { label: 'Deutsch', ...de },
  }
})
