import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './',
  root: './src',
  build: {
    // Specify the output directory for the build. This path is relative to your project root.
    outDir: '../dist',
  },
  server: {
    port: 5173,
  },
  plugins: [
    tailwindcss(),
  ]
});