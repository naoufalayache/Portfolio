<script setup lang="ts">
defineProps<{
  category: string
  title: string
  description: string
  image: string
  technologies: string[]
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-card__image">
      <img :src="image" :alt="title" />
    </div>

    <div class="project-card__content">
      <span class="project-card__category">
        {{ category }}
      </span>

      <h3 class="project-card__title">
        {{ title }}
      </h3>

      <p>
        {{ description }}
      </p>

      <div class="project-card__technologies">
        <span v-for="technology in technologies" :key="technology" class="technology">
          {{ technology }}
        </span>
      </div>

      <button class="project-card__button" type="button">
        {{ $t('projects.moreInformation') }}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </article>
</template>

<style scoped src="@/assets/css/ProjectCard.css"></style>
