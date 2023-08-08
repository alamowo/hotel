// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    quality: 80,
    format: ['avif', 'webp']
  },
  googleFonts: {
    families: {
      'Germania One': true, 
    },
    display: 'swap',
    text: 'Hotel Deutschland - keine Kartenzahlung',
    download: true,
    base64: true,
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ]
})
