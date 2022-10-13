import http from 'redaxios'
import { getAuthHeaders } from '@/settings/authHeaders'

export const useApi = () =>
  http.create({
    baseURL: 'https://ed--api.herokuapp.com',
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
})
