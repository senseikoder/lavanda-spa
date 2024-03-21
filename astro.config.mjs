import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
   server: { port: 4323 },
   build: {
      format: 'file',
   }
});
