import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(
  createPinia().use((context) => {
    return {
      $myApp: context.app,
    }
  })
)

app.mount('#app')
