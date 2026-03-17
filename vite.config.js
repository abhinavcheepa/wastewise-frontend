import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'wastewise-complete.html'),
        index: resolve(__dirname, 'index.html'),
        scanner: resolve(__dirname, 'scanner.html'),
        dusbin: resolve(__dirname, 'dusbin/index.html')
      }
    }
  },
  server: {
    open: '/wastewise-complete.html',
    port: 3000
  }
})
