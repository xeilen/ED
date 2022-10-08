import http from 'redaxios'
import { getAuthHeaders } from '@/settings/authHeaders'

export const useApi = () =>
  http.create({
    baseURL: 'http://localhost:7070',
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
})
