<script setup lang="ts">
const { locale, setLocale } = useI18n()

type Locale = 'fr' | 'en'

const changeLocale = async (lang: Locale) => {
  await setLocale(lang)
}
</script>
<style scoped src="@/assets/css/LangSwitcher.css"></style>
<template>
  <div class="lang-switcher">
    <button
      :class="{ active: locale === 'fr' }"
      class="flag-button"
      @click="changeLocale('fr')"
    >
      <img
        src="~/assets/flags/FR_flag.svg"
        alt="Français"
      />
    </button>

    <span class="separator">/</span>

    <button
      :class="{ active: locale === 'en' }"
      class="flag-button"
      @click="changeLocale('en')"
    >
      <img
        src="~/assets/flags/UK_flag.svg"
        alt="English"
      />
    </button>
  </div>
</template>