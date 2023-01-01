<template>
  <div>
    <n-layout-header
      style="padding: 10px"
      bordered
      position="absolute"
      class="header"
    >
      <n-space justify="end" align="center">
        <div>{{ firstName }} {{ lastName }}, {{ organizationName }}</div>
        <n-button @click="initLogout">Logout</n-button>
      </n-space>
    </n-layout-header>
    <div style="padding-top: 64px"></div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { firstName, lastName, organizationName } = storeToRefs(authStore)
const { logout } = authStore
const router = useRouter()

const initLogout = () => {
  logout()
  router.push('/login')
}
</script>

<style scoped lang="sass">
.header
  z-index: 2
</style>
