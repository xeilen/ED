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
import { useMessage } from 'naive-ui'
import ls from 'localstorage-slim'
import { STORAGE_KEY } from '@/settings/constants'

const route = useRoute()
const router = useRouter()
const api = useApi()
const authStore = useAuthStore()
const message = useMessage()

onMounted(async () => {
  try {
    const response = await api.get(route.fullPath)

    if (!response.data.accessToken) {
      message.error('Activation Error')
      router.push('/login')

      return
    }

    ls.set(STORAGE_KEY, response.data)
    message.success('Activation success!')
    router.push('/')
  } catch (e) {
    message.error('Activation Error')

    await router.push('/login')
  }
})
</script>

<style scoped lang="sass"></style>
