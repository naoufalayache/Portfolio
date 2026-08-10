<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} | Naoufal Ayache` : "Naoufal Ayache";
  },
});
useSeoMeta({
  ogImage: '/og-map.png',
  twitterImage: '/og-map.png',
})
</script>
