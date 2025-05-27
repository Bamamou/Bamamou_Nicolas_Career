import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Bamamou_Nicolas_Career/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.pdf']
})