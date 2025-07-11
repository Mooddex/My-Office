import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server:{
    port:3000,
      proxy: {
    '/auth': {
      target: 'http://localhost:2121',
      changeOrigin: true,
 },
      '/api': {
        target: 'http://localhost:2121',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
