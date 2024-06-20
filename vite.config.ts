import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'multiplayer-app',
  publicDir: 'multiplayer-app/public',
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'multiplayer-app/src/styles/quasar-variables.sass'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'multiplayer-app/src')
    }
  },
  build: {
    outDir: '../../dist'
  },
  server: {
    port: 6001,
  }
})
