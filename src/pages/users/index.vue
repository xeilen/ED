<template>
  <div>
    <h1>Users page</h1>
    <n-data-table :data="users" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'

const usersStore = useUsersStore()
const { getUsers } = usersStore
const { users } = storeToRefs(usersStore)
getUsers()

const columns = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Email',
    key: 'email',
  },
]
</script>

<style scoped></style>
