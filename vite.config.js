import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: doit correspondre exactement au nom du repo GitHub (ici: "Jojo")
  base: process.env.GITHUB_PAGES ? '/Jojo/' : '/',
})

