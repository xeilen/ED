import { defineStore } from 'pinia'
import { useApi } from '@/services/api'
const api = useApi()

export const useUsersStore = defineStore('usersStore', {
  state: () => {
    return {
      users: [],
      error: false,
    }
  },

  actions: {
    async getUsers() {
      this.error = false
      try {
        const response = await api.get('/users')
        this.users = response.data
      } catch (e) {
        this.error = true
      }
    },
  },
})
