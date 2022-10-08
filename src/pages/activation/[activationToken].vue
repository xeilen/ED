<template>
  <div>
    <h1 class="some">Activation...</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/services/api'
import { onBeforeMount, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const api = useApi()
const authStore = useAuthStore()

onMounted(async () => {
  try {
    const activationResponse = await api.get(route.fullPath)

    // not secure
    await authStore.login(
      activationResponse.data.email,
      activationResponse.data.password
    )
    await router.push('/home')
  } catch (e) {
    authStore.logout()
    await router.push('/login')
  }
})
</script>

<style scoped lang="sass">
</style>
