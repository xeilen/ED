import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    AutoImport({
      imports: [{ 'naive-ui': ['all'] }],
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/styles/index.sass"`,
      },
    },
  },
  server: {
    host: true,
    port: 9000,
  },

  build: {
    rollupOptions: {},
  },
  optimizeDeps: {
    include: ['naive-ui'],
  },
})
