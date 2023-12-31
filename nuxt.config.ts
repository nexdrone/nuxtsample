// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pages: true,                        // /pages, /layouts ディレクトリを使用するようにする
  css: [                              // UI framework 用の CSS の参照パス
    'quasar/dist/quasar.prod.css'
  ],
  ssr: false,
  pwa: {
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico"],
    client: {
      installPrompt: true,
    },
    manifest: {
      name: 'PWATest',
      description: "PWATest",
      theme_color: "#ffffff",
      lang: "ja",
      short_name: "short_name",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      icons: [
        {
          src: "36x36.png",
          sizes: "36x36",
          type: "image/png"
        },
        {
          src: "48x48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "72x72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "96x96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "128x128.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "152x152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "256x256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "384x384.png",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: "512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },
    workbox: {
      navigateFallback: null
    },
    devOptions: {
      enabled: true,
      type: "module"
    },
  },
})
