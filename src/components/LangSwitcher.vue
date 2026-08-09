<template>
  <div class="lang-switcher">
    <button :class="{ active: locale === 'fr' }" @click="setLocale('fr')" class="flag-button">
      <img src="@/assets/flags/FR_flag.svg" alt="France" />
    </button>

    <span class="separator">/</span>

    <button :class="{ active: locale === 'en' }" @click="setLocale('en')" class="flag-button">
      <img src="@/assets/flags/UK_flag.svg" alt="English" />
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function setLocale(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
  document.documentElement.setAttribute('lang', lang)
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 700;
}

.flag-button img {
  display: block;
  width: 16px;
  height: 12px;
  object-fit: cover;
}

.lang-switcher button {
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  cursor: pointer;
  color: var(--ink);
  opacity: 0.4;
  padding: 4px;
}

.lang-switcher button.active {
  opacity: 1;
  color: var(--crimson);
}

.separator {
  opacity: 0.3;
}
</style>
