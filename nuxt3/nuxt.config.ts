// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { baseURL: '/abissal-shop/' },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/app.scss'],
  ssr: false,

  modules: [
    ['@nuxtjs/tailwindcss', {}],
  ],
})
