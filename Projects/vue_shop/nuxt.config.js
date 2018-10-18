const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/Projects/vue_shop/dist/'
  }
} : {}

module.exports = {
  head: {
    title: 'astorun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Astorun shop created by Ruslan Lukianennko with Vue.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/styles/tools/tools.scss'],
    ['nuxt-i18n', {
      defaultLocale: 'ru',
      locales: [{
        code: 'ru',
        iso: 'ru-RU'
      }, {
        code: 'en',
        iso: 'en-US'
      }, {
        code: 'ua',
        iso: 'ua-UA'
      }],
      vueI18n: {
        fallbackLocale: 'ru',
        messages: {
          en: require('./locales/en.json'),
          ru: require('./locales/ru.json'),
          ua: require('./locales/ua.json')
        }
      }
    }],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }, {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }, {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      }]
    }]
  ],
  css: [
    '~/assets/styles/layout/layout.scss'
  ],
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vee-validate', ssr: false }
  ],
  ...routerBase
}
