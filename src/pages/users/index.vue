<template>
  <div>
    <h1>Users page</h1>
    <n-data-table :data="users" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import {onMounted} from 'vue';
import {useAuthService} from '@/services/auth_service';

const authData = useAuthService().getAuthInfo()
const usersStore = useUsersStore()
const { getUsers } = usersStore
const { users } = storeToRefs(usersStore)

onMounted(() => {
  getUsers(authData.user.organization_id)
})


const columns = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'first_name',
    render: (row) => {
      return `${row.first_name} ${row.last_name}`
    }
  },
  {
    title: 'Email',
    key: 'email',
  },
]
</script>

<style scoped></style>
