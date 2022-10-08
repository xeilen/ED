import { useApi } from '@/services/api'
import ls from 'localstorage-slim'
import { STORAGE_KEY } from '@/settings/constants'

class AuthService {
  api: any

  constructor() {
    this.api = useApi()
  }

  async initLogin(email: string, password: string) {
    const response = await this.api.post('/login', {
      email,
      password,
    })

    if (!response.ok) {
      console.error('error when login')
      return
    }

    ls.set(STORAGE_KEY, response.data)
  }

  logout() {
    ls.remove(STORAGE_KEY)
  }

  async register(email: string, password: string) {
    return await this.api.post('/registration', {
      email,
      password,
    })
  }
}

export const useAuthService = () => new AuthService()
