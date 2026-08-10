<script setup lang="ts">
import { ref } from 'vue'

import ProjectCard from '@/components/ProjectCard.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'

import sncfImage from '@/assets/images/SNCF.webp'
import dgacImage from '@/assets/images/DGAC.webp'
import agricultureImage from '@/assets/images/agriculture.webp'

type ProjectId = 'sncf' | 'dgac' | 'agriculture'

const selectedProject = ref<ProjectId | null>(null)

const technologies: Record<ProjectId, string[]> = {
  sncf: ['Java', 'Angular', 'AWS', 'Docker'],
  dgac: ['SonarQube', 'Qualité', 'Gestion de projet'],
  agriculture: ['Java', 'Batch', 'SIG', 'SQL'],
}

const toggleProject = (projectId: ProjectId) => {
  selectedProject.value = selectedProject.value === projectId ? null : projectId
}

const closeProject = () => {
  selectedProject.value = null
}
</script>

<template>
  <section class="projects">
    <div class="projects__intro">
      <h2 class="projects__title">
        {{ $t('projects.title_line1') }}
        {{ $t('projects.title_line2') }}

        <span>.</span>
      </h2>

      <div class="intro-line"></div>

      <p>
        {{ $t('projects.description') }}
      </p>
    </div>

    <div class="projects__content">
      <div class="projects__grid">
        <ProjectCard
          :category="$t('projects.sncf.category')"
          :title="$t('projects.sncf.title')"
          :description="$t('projects.sncf.description')"
          :image="sncfImage"
          :technologies="technologies.sncf"
          @more="toggleProject('sncf')"
        />

        <ProjectCard
          :category="$t('projects.dgac.category')"
          :title="$t('projects.dgac.title')"
          :description="$t('projects.dgac.description')"
          :image="dgacImage"
          :technologies="technologies.dgac"
          @more="toggleProject('dgac')"
        />

        <ProjectCard
          :category="$t('projects.agriculture.category')"
          :title="$t('projects.agriculture.title')"
          :description="$t('projects.agriculture.description')"
          :image="agricultureImage"
          :technologies="technologies.agriculture"
          @more="toggleProject('agriculture')"
        />
      </div>

      <Transition name="project-details">
        <ProjectDetails
          v-if="selectedProject"
          :project-id="selectedProject"
          :technologies="technologies[selectedProject]"
          @close="closeProject"
        />
      </Transition>
    </div>
  </section>
</template>

<style scoped src="@/assets/css/Projects.css"></style>
