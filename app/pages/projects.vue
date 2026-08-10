<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import ProjectCard from '@/components/ProjectCard.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'

import sncfImage from '@/assets/images/SNCF.webp'
import dgacImage from '@/assets/images/DGAC.webp'
import agricultureImage from '@/assets/images/agriculture.webp'

const { t } = useI18n()

useSeoMeta({
  title: () => t('pageTitles.projects'),
  description: () => t('seo.projects.description'),

  ogTitle: () => `${t('pageTitles.projects')} | Naoufal Ayache`,
  ogDescription: () => t('seo.projects.description'),
})

type ProjectId = 'sncf' | 'dgac' | 'agriculture'

const selectedProject = ref<ProjectId | null>(null)

const isMobile = ref(false)

const technologies: Record<ProjectId, string[]> = {
  sncf: ['Java', 'Angular', 'AWS', 'Docker'],
  dgac: ['SonarQube', 'Qualité', 'Gestion de projet'],
  agriculture: ['Java', 'Batch', 'SIG', 'SQL'],
}

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const toggleProject = (projectId: ProjectId) => {
  selectedProject.value =
    selectedProject.value === projectId
      ? null
      : projectId
}

const closeProject = () => {
  selectedProject.value = null
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && selectedProject.value && isMobile.value) {
    closeProject()
  }
}

watch(
  [selectedProject, isMobile],
  ([project, mobile]) => {
    if (!import.meta.client) {
      return
    }

    document.body.style.overflow =
      project && mobile
        ? 'hidden'
        : ''
  }
)

onMounted(() => {
  updateIsMobile()

  window.addEventListener('resize', updateIsMobile)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
  document.removeEventListener('keydown', handleEscape)

  document.body.style.overflow = ''
})
</script>

<template>
  <section class="projects">
    <div class="projects__intro">
      <h1 class="projects__title">
        {{ $t('projects.title_line1') }}
        {{ $t('projects.title_line2') }}

        <span>.</span>
      </h1>

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
          v-if="selectedProject && !isMobile"
          :project-id="selectedProject"
          :technologies="technologies[selectedProject]"
          @close="closeProject"
        />
      </Transition>

      <Teleport to="body">
        <Transition name="project-modal">
          <div
            v-if="selectedProject && isMobile"
            class="project-modal"
            @click.self="closeProject"
          >
            <div class="project-modal__content">
              <ProjectDetails
                :project-id="selectedProject"
                :technologies="technologies[selectedProject]"
                @close="closeProject"
              />
            </div>
          </div>
        </Transition>
      </Teleport>
    </div>
  </section>
</template>

<style scoped src="@/assets/CSS/Projects.css"></style>