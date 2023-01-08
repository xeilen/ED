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
    async getUsers(organizationId) {
      this.error = false
      try {
        const response = await api.post('/users', {
          organization_id: organizationId,
        })
        this.users = response.data
      } catch (e) {
        this.error = true
      }
    },
  },
})
