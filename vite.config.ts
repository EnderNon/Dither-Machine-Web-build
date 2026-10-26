import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This will ensure that paths are relative to the current directory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
