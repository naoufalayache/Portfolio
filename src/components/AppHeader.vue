<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LangSwitcher from './LangSwitcher.vue'
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo"> NAOUFAL <span>AYACHE</span> </RouterLink>

    <nav class="navigation">
      <RouterLink to="/">ACCUEIL</RouterLink>
      <RouterLink to="/AboutMe">A PROPOS DE MOI</RouterLink>
      <RouterLink to="/projects">PROJETS</RouterLink>
      <RouterLink to="/experience">EXPÉRIENCE</RouterLink>
      <RouterLink to="/contacts">CONTACT</RouterLink>
      <LangSwitcher />
    </nav>
  </header>
</template>

<style scoped>
.header {
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4vw;

  border-bottom: 1px solid var(--border);
}

.logo {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.logo span {
  color: var(--crimson);
}

.navigation {
  display: flex;
  gap: 32px;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.navigation .router-link-active {
  color: var(--crimson);
}
</style>
