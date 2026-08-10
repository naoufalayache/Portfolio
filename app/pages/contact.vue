<script setup lang="ts">
import ContactIntro from '@/components/ContactIntro.vue'
import ContactLinks from '@/components/ContactLinks.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => t('pageTitles.contact'),
  description: () => t('seo.contact.description'),

  ogTitle: () => `${t('pageTitles.contact')} | Naoufal Ayache`,
  ogDescription: () => t('seo.contact.description'),
})
</script>

<style scoped src="@/assets/css/SocialLinks.css"></style>

<template>
  <main class="contact-page">
    <ContactIntro />

    <ContactLinks />
  </main>
</template>
