<script setup lang="ts">
import AboutIntro from '@/components/AboutIntro.vue'
import AboutMotivation from '@/components/AboutMotivation.vue'
import SkillsGrid from '@/components/SkillsGrid.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => t('pageTitles.about'),
  description: () => t('seo.about.description'),

  ogTitle: () => `${t('pageTitles.about')} | Naoufal Ayache`,
  ogDescription: () => t('seo.about.description'),
})

</script>

<template>
  <main class="about">
    <AboutIntro />
    <AboutMotivation />
    <SkillsGrid />
  </main>
</template>
