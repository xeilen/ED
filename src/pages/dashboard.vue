<template>
  <div>
    <h1>Main home componet</h1>

    <div v-for="user in users" :key="user.id">
      <div>{{ user }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApi } from '@/services/api'
import { ref } from 'vue'
import { useAuthService } from '@/services/auth_service'

const api = useApi()
const { user } = useAuthService().getAuthInfo()

const users = ref([])

const fetchUsers = async () => {
  const response = await api.post('/users', {
    organization_id: user.organization_id,
  })
  if (!response.ok) return

  users.value = response.data
}

fetchUsers()
</script>

<style scoped></style>
