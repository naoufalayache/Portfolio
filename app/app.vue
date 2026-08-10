<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

const i18nHead = useLocaleHead({
  seo: true
})

useHead(() => ({
  htmlAttrs: i18nHead.value.htmlAttrs,

  link: i18nHead.value.link,

  meta: i18nHead.value.meta,

  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Naoufal Ayache',
        jobTitle: 'Full-Stack Developer',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lyon',
          addressCountry: 'FR',
        },
        sameAs: [
          'https://github.com/naoufalayache',
          'https://www.linkedin.com/in/naoufal-ayache',
        ],
      }),
    },
  ],

  titleTemplate: (title) => {
    return title
      ? `${title} | Naoufal Ayache`
      : 'Naoufal Ayache'
  },
}))

useSeoMeta({
  ogType: 'website',
  ogSiteName: 'Naoufal Ayache',
  twitterCard: 'summary_large_image',
  ogImage: 'https://naoufal-ayache.dev/OG-map.png', // Le DNS n'est pas encore acheté
  twitterImage: 'https://naoufal-ayache.dev/OG-map.png',
})
</script>
