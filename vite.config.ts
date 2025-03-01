import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths
  build: {
    outDir: 'dist',
    sourcemap: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  assetsInclude: ['**/*.PNG', '**/*.JPG'],
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 3000
  }
});
