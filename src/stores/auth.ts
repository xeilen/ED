import { defineStore } from 'pinia'
import { useAuthService } from '@/services/auth_service'
import ls from 'localstorage-slim'
import { STORAGE_KEY } from '@/settings/constants'
import type { UserLoginData } from '@/types/interfaces'

const auth = useAuthService()

const checkIsLoggedIn = (): boolean => {
  const userData: UserLoginData | null = ls.get(STORAGE_KEY)

  return !!(userData && userData.accessToken)
}

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      email: '',
      isLoggedIn: checkIsLoggedIn(),
    }
  },

  actions: {
    async login(email: string, password: string) {
      await auth.initLogin(email, password)
    },

    logout() {
      auth.logout()
    },

    async register(email: string, password: string) {
      const response = await auth.register(email, password)

      return response.ok
    },
  },
})
