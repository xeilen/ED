import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import ls from 'localstorage-slim'
import { PUBLIC_PAGES } from '@/settings/constants'
import { staticRoutes } from '@/router/static-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...staticRoutes],
})

router.beforeEach((to) => {
  const authRequired = !PUBLIC_PAGES.includes(to.name as string)
  const loggedIn = !!ls.get('auth')?.accessToken

  if ((loggedIn && to.name === 'login') || to.fullPath === '/')
    return { name: 'dashboard' }

  if (authRequired) {
    if (loggedIn) {
      return true
    }
    return { name: 'login' }
  }

  return true
})

export default router
