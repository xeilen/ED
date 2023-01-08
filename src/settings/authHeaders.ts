import ls from 'localstorage-slim'
import type { UserLoginData } from '@/types/interfaces'

export const getAuthHeaders = () => {
  const loginData: UserLoginData | null = ls.get('auth')

  if (loginData && loginData.accessToken) {
    return { Authorization: `Bearer ${loginData.accessToken}` }
  }

  return {}
}
