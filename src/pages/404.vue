<template>
  <div class="not-found">
    <h1>Page not found (404)</h1>
    <n-button type="info" @click="() => router.replace('/dashboard')">
      Go to dashboard page
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<style scoped lang="sass">
.not-found
  margin-top: 250px
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
</style>
