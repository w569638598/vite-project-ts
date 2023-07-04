import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true
  },
  build: {
    outDir: 'docs',
    target: 'es2015'
  },
  base: '/vite-project-ts/',
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  }
})
