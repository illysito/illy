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
    //   // 👇 multiple entry points
    //   input: {
    //     main: './src/main.js',
    //     gol: './src/gol_entry_point.js',
    //     // shaders: './src/shaders_entry_point.js', // add more here
    //   },
    //   output: {
    //     // 👇 let Vite/Rollup emit 1 file per entry
    //     entryFileNames: '[name].js',
    //     // format: 'umd',      // ❌ remove
    //     // esModule: false,    // ❌ remove
    //     // compact: true,      // (optional) you can keep minify at top
    //     // globals: { jquery: '$' }, // ❌ only for UMD
    //   },
    //   external: ['jquery'], // ✅ keep this
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
