export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],

  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/CSS/main.css',
  ],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',

    locales: [
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
})