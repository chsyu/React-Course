import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /(.*?)\.(png|jpe?g|svg|gif|webp)/, 
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
            },
          },
        ],
     },
     includeAssets: ['favicon.svg'],
     manifest: {
       name: 'ShoppingCart',
       short_name: 'ShoppingCart',
       description: 'A shopping cart example',
       theme_color: '#ffffff',
       icons: [
         {
           src: 'pwa-192x192.png', // <== don't add slash, for testing
           sizes: '192x192',
           type: 'image/png',
         },
         {
           src: '/pwa-512x512.png', // <== don't remove slash, for testing
           sizes: '512x512',
           type: 'image/png',
         },
         {
           src: 'pwa-512x512.png', // <== don't add slash, for testing
           sizes: '512x512',
           type: 'image/png',
           purpose: 'any maskable',
         },
       ],
     }
    })
  ],
})
