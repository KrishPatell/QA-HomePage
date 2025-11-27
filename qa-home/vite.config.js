import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'quickads-hero-designs.html'),
      },
    },
    outDir: 'dist',
  },
});
