import tailwindcssPlugin from '@tailwindcss/vite';
import viteReactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    reportCompressedSize: false,
    commonjsOptions: { transformMixedEsModules: true },
  },
  plugins: [
    tailwindcssPlugin(),
    viteReactPlugin(),
    // eslint-disable-next-line no-undef
    process.env.INLINE ? viteSingleFile() : null,
  ].filter(Boolean),
  test: {
    globals: true,
    environment: 'happy-dom'
  },
});