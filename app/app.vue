<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
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
    return title ? `${title} | Naoufal Ayache` : "Naoufal Ayache";
  },
});
useSeoMeta({
  ogType: 'website',
  ogSiteName: 'Naoufal Ayache',
  twitterCard: 'summary_large_image',
  ogImage: '/OG-map.png',
  twitterImage: '/OG-map.png',
})
</script>
