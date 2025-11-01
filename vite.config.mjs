import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

// vite.config.js
export default defineConfig({
  publicDir: 'imgs_cdn', // ← this line tells Vite to serve that folder publicly
  plugins: [eslintPlugin({ cache: false })],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    manifest: true,
    // rollupOptions: {
    //   input: './src/main.js',
    //   external: ['jquery'], // ✅ keep this
    //   // 👈 no custom output here
    // },
    rollupOptions: {
      // input: './src/main.js',
      input: {
        main: './src/main.js',
        gol: './src/gol_entry_point.js',
      },
      output: {
        format: 'umd',
        entryFileNames: 'main.js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
})
