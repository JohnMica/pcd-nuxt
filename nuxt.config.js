export default {
  mode: 'universal',
  // target: 'static',
  head: {
    title: 'PublicCode Directory',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The federated DataBase of Open Source Software used by public institutions',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'is-grid',
    },
  },
  css: ['~/assets/scss/app'],
  plugins: [
    '~/plugins/truncate',
    '~/plugins/capitalize',
    { src: '~/plugins/validate.js', mode: 'client' },
  ],
  components: [{ path: '~/components', extensions: ['vue'] }],
  buildModules: ['@nuxt/components', '@nuxt/typescript-build'],
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-leaflet',
    '@nuxt/content',
  ],
  generate: {
    fallback: true,
  },
  axios: {},
  content: {
    // nestedProperties: ['author.name'],
    markdown: {
      // https://github.com/remarkjs/remark-external-links#options
      remarkExternalLinks: {
        target: '_self',
        rel: 'nofollow noopener',
      },
    },
  },
  build: {
    babel: {
      presets: [
        [
          '@nuxt/babel-preset-app',
          {
            corejs: 3,
          },
        ],
      ],
    },
    transpile: ['vee-validate/dist/rules'],
  },
  extend(config, ctx) {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      })
    }
  },
}
