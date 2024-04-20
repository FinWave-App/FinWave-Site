// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    defaultLocale: 'en',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      redirectOn: 'root',
    },

    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.json'
      },
      {
        code: 'ru',
        name: 'Russian',
        file: 'ru-RU.json'
      },
    ],

    langDir: 'lang/',
    vueI18n: './i18n.options.js',
    strategy: "no_prefix"
  },

})
