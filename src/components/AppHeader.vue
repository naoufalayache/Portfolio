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
      <RouterLink to="/">
        {{ $t('navigation.home') }}
      </RouterLink>

      <RouterLink to="/AboutMe">
        {{ $t('navigation.about') }}
      </RouterLink>

      <RouterLink to="/projects">
        {{ $t('navigation.projects') }}
      </RouterLink>

      <RouterLink to="/experience">
        {{ $t('navigation.experience') }}
      </RouterLink>

      <RouterLink to="/contacts">
        {{ $t('navigation.contact') }}
      </RouterLink>

      <LangSwitcher />
    </nav>

    <button class="burger" type="button" aria-label="Ouvrir le menu" @click="toggleMenu">
      <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
    </button>

    <Transition name="mobile-menu">
      <nav v-if="menuOpen" class="mobile-menu">
        <RouterLink to="/" @click="closeMenu">
          {{ $t('navigation.home') }}
        </RouterLink>

        <RouterLink to="/AboutMe" @click="closeMenu">
          {{ $t('navigation.about') }}
        </RouterLink>

        <RouterLink to="/projects" @click="closeMenu">
          {{ $t('navigation.projects') }}
        </RouterLink>

        <RouterLink to="/experience" @click="closeMenu">
          {{ $t('navigation.experience') }}
        </RouterLink>

        <RouterLink to="/contacts" @click="closeMenu">
          {{ $t('navigation.contact') }}
        </RouterLink>

        <div class="mobile-language">
          <LangSwitcher />
        </div>
      </nav>
    </Transition>
  </header>
</template>
