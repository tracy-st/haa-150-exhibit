import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
<<<<<<< Updated upstream:haa-150-exhibit/vite.config.ts
      base: process.env.GITHUB_PAGES ? '/haa-150-exhibit/' : '/',
      plugins: [react()],
 });
=======
  base: process.env.GITHUB_PAGES ? '/haa-150-exhibit/' : '/',
  plugins: [react()],
})
>>>>>>> Stashed changes:site/vite.config.ts
