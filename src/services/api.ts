import http from 'redaxios'
import { getAuthHeaders } from '@/settings/authHeaders'

export const useApi = () =>
  http.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
})
