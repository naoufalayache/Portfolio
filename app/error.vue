<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="error-page">
    <div class="error-content">
      <span class="error-code">{{ error.statusCode }}</span>

      <h1>PAGE INTROUVABLE</h1>

      <p>
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>

      <button @click="handleError">
        ← RETOUR À L'ACCUEIL
      </button>
    </div>
  </main>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-content {
  text-align: center;
  max-width: 700px;
}

.error-code {
  display: block;
  font-size: clamp(7rem, 20vw, 14rem);
  font-weight: 900;
  line-height: 0.9;
  color: var(--red);
}

h1 {
  margin: 2rem 0 1rem;
  font-size: clamp(2rem, 5vw, 4rem);
}

p {
  margin-bottom: 2rem;
  opacity: 0.7;
}

button {
  border: 0;
  cursor: pointer;
  padding: 1rem 1.5rem;
  font: inherit;
  font-weight: 700;
}
</style>