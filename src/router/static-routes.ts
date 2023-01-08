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
