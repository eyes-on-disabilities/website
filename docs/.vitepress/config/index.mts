import { defineConfig } from 'vitepress'
import { de } from './de'
import { en } from './en'

export default defineConfig({
  locales: {
    de: { label: 'Deutsch', ...de },
    en: { label: 'English', ...en },
  }
})
