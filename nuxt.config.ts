export default defineNuxtConfig({
  site: {
    url: "https://naoufal-ayache.dev",
    name: "Naoufal Ayache",
  },

  modules: ["@nuxtjs/i18n", "@nuxtjs/sitemap"],

  css: [
    "@fortawesome/fontawesome-free/css/all.min.css",
    "~/assets/CSS/main.css",
  ],

  nitro: {
    prerender: {
      routes: ["/404.html"],
    },
  },

  i18n: {
    baseUrl: "https://naoufal-ayache.dev",

    strategy: "prefix_except_default",
    defaultLocale: "fr",

    locales: [
      {
        code: "fr",
        language: "fr-FR",
        name: "Français",
        file: "fr.json",
      },
      {
        code: "en",
        language: "en-US",
        name: "English",
        file: "en.json",
      },
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});
