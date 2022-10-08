import type { RouteRecordRaw } from 'vue-router'

export const staticRoutes: {
  path: string
  component: Promise<{}>
  name: string
}[] = [
  {
    path: '/:path(.*)*',
    name: 'not-found',
    component: import('../pages/404.vue'),
  },
]
