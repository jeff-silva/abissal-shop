// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { baseURL: '/abissal-shop/' },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/app.scss'],
  ssr: false,

  runtimeConfig: {
    public: {
      DIMONA_API_KEY: process.env.DIMONA_API_KEY,
      STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
      STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY,
      PAGBANK_PUBLIC_KEY: process.env.PAGBANK_PUBLIC_KEY,
      PAGBANK_SANDBOX_PUBLIC_KEY: process.env.PAGBANK_SANDBOX_PUBLIC_KEY,
    },
  },

  modules: [
    ['@nuxtjs/tailwindcss', {}],

    // https://vuefire.vuejs.org/
    // https://vuefire.vuejs.org/nuxt/getting-started.html
    ['nuxt-vuefire', {
      auth: true,
      config: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        appId: process.env.FIREBASE_APP_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      },
    }],
  ],
})
