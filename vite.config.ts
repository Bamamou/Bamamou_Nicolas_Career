import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load env files based on mode
  const env = loadEnv(mode, process.cwd(), '')
  const deployTarget = process.env.DEPLOY_TARGET || 'vercel'

  return {
    plugins: [react()],
    base: deployTarget === 'github' ? '/Bamamou_Nicolas_Career/' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    assetsInclude: ['**/*.pdf'],
    define: {
      __EMAILJS_SERVICE_ID__: JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
      __EMAILJS_TEMPLATE_ID__: JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID),
      __EMAILJS_PUBLIC_KEY__: JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY)
    }
  }
})