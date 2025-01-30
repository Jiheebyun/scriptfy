import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src/demo/client'),
  publicDir: path.resolve(__dirname, 'src/demo/public'),
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/demo/client'),
      'library': path.resolve(__dirname, 'src/library')
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist/demo/client'),
    emptyOutDir: true
  },
});
