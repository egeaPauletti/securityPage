import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // permite acesso pela rede
    port: 5173  // opcional: define a porta
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
})
