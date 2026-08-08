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
  height: 100vh;
  overflow: hidden;
}

.content {
  height: calc(100vh - 90px);
}
</style>
<script></script>
