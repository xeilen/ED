import { defineStore } from 'pinia'
import { useAuthService } from '@/services/auth_service'
import ls from 'localstorage-slim'
import { STORAGE_KEY } from '@/settings/constants'
import type { UserLoginData } from '@/types/interfaces'

const auth = useAuthService()

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      email: '',
      firstName: '',
      lastName: '',
      organizationName: '',
    }
  },

  actions: {
    async login(email: string, password: string) {
      const authData = await auth.initLogin(email, password)
      console.log(authData)
      
      if (authData) this.setAuthData(authData)
    },

    logout() {
      auth.logout()
    },

    async register(model: any) {
      const response = await auth.register(model)

      return response.ok
    },
    
    setAuthData(authData) {
      this.email = authData.user.email
      this.firstName = authData.user.first_name
      this.lastName = authData.user.last_name
      this.organizationName = authData.organization.name
    },
  
    checkIsLoggedIn() {
      const userData: UserLoginData | null = ls.get(STORAGE_KEY)
      
      if (userData && userData.accessToken) {
        this.setAuthData(userData)
        return true
      }
      
      return false
    }
    
  },
})
