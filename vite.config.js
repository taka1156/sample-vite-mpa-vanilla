import { defineConfig } from 'vite';
import { resolve } from 'path';
import legacy from '@vitejs/plugin-legacy';
import { viteMpaPlugin } from './plugin/mpa';

export default defineConfig(({ mode }) => {
  return {
    root: 'src',
    base: mode !== 'serve' ? '/sample-vite-mpa-vanilla/' : './',
    build: {
      outDir: '../docs',
      emptyOutDir: true
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    plugins: [
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      viteMpaPlugin
    ]
  };
});
