import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      three: resolve('./node_modules/three'),
    },
  },
  optimizeDeps: {
    include: ['three'], // Make sure three is pre-bundled
  },
})
