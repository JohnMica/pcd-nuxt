export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/scss/app'],
  plugins: [
    '~/plugins/truncate',
    '~/plugins/capitalize',
    { src: '~/plugins/leaflet.js', mode: 'client' },
    { src: '~/plugins/validate.js', mode: 'client' },
  ],
  components: [{ path: '~/components', extensions: ['vue'] }],
  buildModules: ['@nuxt/components', '@nuxt/typescript-build'],
  modules: ['nuxt-buefy', '@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],
  axios: {},
  content: {
    nestedProperties: ['author.name'],
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
