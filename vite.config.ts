import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Get deployment target from environment variable
const deployTarget = process.env.DEPLOY_TARGET || 'vercel'

export default defineConfig({
  plugins: [react()],
  // Use base path only for GitHub Pages
  base: deployTarget === 'github' ? '/Bamamou_Nicolas_Career/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.pdf']
})