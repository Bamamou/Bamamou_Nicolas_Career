import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Detect if we're in development mode
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  base: isProduction ? '/Bamamou_Nicolas_Career/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
    strictPort: true,
    proxy: {}, // Add if you need API proxying
  }
})