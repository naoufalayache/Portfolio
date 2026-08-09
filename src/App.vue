<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
}

.content {
  min-height: calc(100vh - 90px);
}

@media (max-width: 768px) {
  .content {
    min-height: calc(100vh - 70px);
  }
}
</style>
<script></script>
