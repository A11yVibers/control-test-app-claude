import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works when published under any sub-path
// (e.g. GitHub Pages project/version sub-directories).
export default defineConfig({
  base: './',
  plugins: [react()],
});
