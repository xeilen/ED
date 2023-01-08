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

    const [, token] = response.headers.get('Authorization').split(' ')

    if (!response.ok) {
      console.error('error when login')
      return
    }

    ls.set(STORAGE_KEY, {
      ...response.data,
      accessToken: token,
    })

    return response.data
  }

  logout() {
    ls.remove(STORAGE_KEY)
  }

  async register(model) {
    return await this.api.post('/registration', model)
  }

  getAuthInfo() {
    const data: {
      user: { organization_id: string }
      organization: { id: number; name: string; type: string }
    } = ls.get(STORAGE_KEY)
    if (data)
      return {
        user: data.user,
        organization: data.organization,
      }
  }
}

export const useAuthService = () => new AuthService()
