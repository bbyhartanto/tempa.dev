export default defineNuxtConfig({
  compatibilityDate: '2026-04-21',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | Tempa` : 'Tempa',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Tempa builds motion-rich digital products, landing pages, audits, and customer-facing systems for ambitious brands.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap'
        }
      ],
      script: [
        { src: '/js/glassify.js', defer: true }
      ]
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'glassi-fy'
    }
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3
        }
      }
    }
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        file: 'en.ts'
      },
      {
        code: 'id',
        name: 'Bahasa Indonesia',
        language: 'id-ID',
        file: 'id.ts'
      }
    ]
  }
})
