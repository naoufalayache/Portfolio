<script setup lang="ts">
defineProps<{
  projectId: 'sncf' | 'dgac' | 'agriculture'
  technologies: string[]
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <section class="project-details">
    <div class="project-details__header">
      <div>
        <span class="project-details__category">
          {{ $t(`projects.${projectId}.category`) }}
        </span>

        <h3 class="project-details__title">
          {{ $t(`projects.${projectId}.title`) }}
        </h3>
      </div>

      <button
        class="project-details__close"
        type="button"
        :aria-label="$t('projects.details.close')"
        @click="emit('close')"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <div class="project-details__content">
      <div class="project-details__block">
        <h4>
          {{ $t('projects.details.context') }}
        </h4>

        <p>
          {{ $t(`projects.${projectId}.details.context`) }}
        </p>
      </div>

      <div class="project-details__block">
        <h4>
          {{ $t('projects.details.interventions') }}
        </h4>

        <p>
          {{ $t(`projects.${projectId}.details.interventions`) }}
        </p>
      </div>

      <div class="project-details__block">
        <h4>
          {{ $t('projects.details.technologies') }}
        </h4>

        <div class="project-details__technologies">
          <span
            v-for="technology in technologies"
            :key="technology"
            class="project-details__technology"
          >
            {{ technology }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/assets/css/ProjectDetails.css"></style>
