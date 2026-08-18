export default defineNuxtConfig({
  site: {
    url: "https://naoufalayache.github.io",
    name: "Naoufal Ayache",
  },

  modules: ["@nuxtjs/i18n", "@nuxtjs/sitemap", "nuxt-gtag"],

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },

  css: [
    "@fortawesome/fontawesome-free/css/all.min.css",
    "~/assets/CSS/main.css",
  ],

  nitro: {
    prerender: {
      routes: ["/404.html"],
    },
  },

  app: {
    baseURL: "/Portfolio/",
  },

  i18n: {
    baseUrl: "https://naoufalayache.github.io",

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
});
