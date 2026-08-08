<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import LangSwitcher from './LangSwitcher.vue'
import './../assets/AppHeader.css'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>
<template>
  <header class="header">
    <RouterLink to="/" class="logo" @click="closeMenu"> NAOUFAL <span>AYACHE</span> </RouterLink>
    <nav class="navigation">
      <RouterLink to="/">ACCUEIL</RouterLink> <RouterLink to="/AboutMe">A PROPOS DE MOI</RouterLink>
      <RouterLink to="/projects">PROJETS</RouterLink>
      <RouterLink to="/experience">EXPÉRIENCE</RouterLink>
      <RouterLink to="/contacts">CONTACT</RouterLink> <LangSwitcher />
    </nav>
    <button class="burger" type="button" aria-label="Ouvrir le menu" @click="toggleMenu">
      <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
    </button>
    <Transition name="mobile-menu">
      <nav v-if="menuOpen" class="mobile-menu">
        <RouterLink to="/" @click="closeMenu">ACCUEIL</RouterLink>
        <RouterLink to="/AboutMe" @click="closeMenu">A PROPOS DE MOI</RouterLink>
        <RouterLink to="/projects" @click="closeMenu">PROJETS</RouterLink>
        <RouterLink to="/experience" @click="closeMenu">EXPÉRIENCE</RouterLink>
        <RouterLink to="/contacts" @click="closeMenu">CONTACT</RouterLink>

        <div class="mobile-language">
          <LangSwitcher />
        </div>
      </nav>
    </Transition>
  </header>
</template>
