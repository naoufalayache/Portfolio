<script setup lang="ts">
import { ref } from "vue";

const localePath = useLocalePath();

const menuOpen = ref(false);

const navigation = [
  {
    path: "/",
    label: "navigation.home",
  },
  {
    path: "/about",
    label: "navigation.about",
  },
  {
    path: "/projects",
    label: "navigation.projects",
  },
  {
    path: "/experience",
    label: "navigation.experience",
  },
  {
    path: "/contact",
    label: "navigation.contact",
  },
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>
<style scoped src="@/assets/css/AppHeader.css"></style>
<template>
  <header class="header">
    <NuxtLink to="/" class="logo" @click="closeMenu">
      NAOUFAL <span>AYACHE</span>
    </NuxtLink>
    <nav class="navigation">
      <NuxtLink
        v-for="item in navigation"
        :key="item.path"
        :to="localePath(item.path)"
      >
        {{ $t(item.label) }}
      </NuxtLink>

      <LangSwitcher />
    </nav>

    <button
      class="burger"
      type="button"
      aria-label="Ouvrir le menu"
      @click="toggleMenu"
    >
      <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
    </button>

    <Transition name="mobile-menu">
      <nav v-if="menuOpen" class="mobile-menu">
        <NuxtLink
          v-for="item in navigation"
          :key="item.path"
          :to="localePath(item.path)"
          @click="closeMenu"
        >
          {{ $t(item.label) }}
        </NuxtLink>

        <div class="mobile-language">
          <LangSwitcher />
        </div>
      </nav>
    </Transition>
  </header>
</template>
