// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [ react() ],
//   server: {
//     headers: {
//       "Cross-Origin-Embedder-Policy": "require-corp",
//       "Cross-Origin-Opener-Policy": "same-origin"
//     },
//     proxy: {
//       '/cdn': {
//         target: 'https://unpkg.com',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/cdn/, '')
//       }
//     }
//   }
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Enable crossOriginIsolation in dev and production
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
