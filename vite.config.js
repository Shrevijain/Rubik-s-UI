import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      input: './src/index.js'
      // output: [
      //   {
      //     file: 'dist/index.js',
      //     format: 'cjs'
      //   },
      //   {
      //     file: 'dist/index.es.js',
      //     format: 'es',
      //     exports: 'named'
      //   }
      // ]
    }
  },
  plugins: [react()]
});
