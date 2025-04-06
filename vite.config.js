import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 🔹 Esto es importante si estás abriendo el HTML directamente o usando rutas
  plugins: [react()],
})