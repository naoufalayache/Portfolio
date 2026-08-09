<script setup lang="ts">
import '@/assets/css/Projects.css'

import ProjectCard from '@/components/ProjectCard.vue'

import sncfImage from '@/assets/images/SNCF.webp'
import dgacImage from '@/assets/images/DGAC.webp'
import agricultureImage from '@/assets/images/agriculture.webp'
</script>

<template>
  <section class="projects">
    <div class="projects__intro">
      <h2>
        {{ $t('projects.title_line1') }}
        <br />
        {{ $t('projects.title_line2') }}
        <span>.</span>
      </h2>

      <div class="intro-line"></div>

      <p>
        {{ $t('projects.description') }}
      </p>
    </div>

    <div class="projects__grid">
      <ProjectCard
        :category="$t('projects.sncf.category')"
        :title="$t('projects.sncf.title')"
        :description="$t('projects.sncf.description')"
        :image="sncfImage"
        :technologies="['Java', 'Angular', 'AWS', 'Docker']"
      />

      <ProjectCard
        :category="$t('projects.dgac.category')"
        :title="$t('projects.dgac.title')"
        :description="$t('projects.dgac.description')"
        :image="dgacImage"
        :technologies="['SonarQube', 'Qualité', 'Gestion de projet']"
      />

      <ProjectCard
        :category="$t('projects.agriculture.category')"
        :title="$t('projects.agriculture.title')"
        :description="$t('projects.agriculture.description')"
        :image="agricultureImage"
        :technologies="['Java', 'Batch', 'SIG', 'SQL']"
      />
    </div>
  </section>
</template>
