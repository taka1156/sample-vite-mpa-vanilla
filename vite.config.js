import { defineConfig } from 'vite';
import path from 'path';
import legacy from '@vitejs/plugin-legacy';
const json = require('./path.config.json');

export default defineConfig({
  root: 'src',
  base: 'taka1156/sample-vite-mpa-vanilla',
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html'),
        ...json
      }
    },
    outDir: '../docs'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ]
});
