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

const api = useApi()
const users = ref([])

const fetchUsers = async () => {
  const response = await api.get('/users')
  if (!response.ok) return

  users.value = response.data
}

fetchUsers()
</script>

<style scoped>

</style>
