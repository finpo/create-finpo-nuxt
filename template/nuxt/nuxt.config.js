<% if (server === 'adonis') { %>
const resolve = require('path').resolve;
<% } %>
module.exports = {
  router: {
    base: '/',
  },
  mode: '<%= mode %>',
<% if (server === 'adonis') { %>
  srcDir: resolve(__dirname, '..', 'resources'),
<% } %>
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    title: '<%= name %>',
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '<%= name %>' },
      { hid: 'description', name: 'description', content: '<%= description %>' },
      { hid: 'og:site_name', property: 'og:site_name', content: '<%= name %>' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'og:title', property: 'og:title', content: '<%= name %>' },
      { hid: 'og:description', property: 'og:description', content: '<%= description %>' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },<% if (ui === 'vuetify') { %>
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },<% } %>
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [<% if (ui === 'element-ui') { %>
    'element-ui/lib/theme-chalk/index.css',<% } else if (ui === 'tailwind') { %>
    '~/assets/css/tailwind.css',<% } else if (ui === 'vuetify') { %>
    '~/assets/style/app.styl',<% } %>
    { src: '~/assets/css/main.styl', lang: 'stylus' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [<% if (ui === 'element-ui') { %>
    '@/plugins/element-ui',<% } else if (ui === 'vuetify') { %>
    '@/plugins/vuetify',<% } %>
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [<% if (axios === 'yes') { %>
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',<% } %><% if (ui === 'bootstrap') { %>
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',<% } %><% if (ui === 'bulma') { %>
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',<% } %><% if (ui === 'buefy') { %>
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',<% } %>
  ],<% if (axios === 'yes') { %>
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },<% } %>
  /*
  ** Build configuration
  */
  build: {<% if (ui === 'bulma') { %>
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },<% } %>
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
            formatter: require('eslint-friendly-formatter'), // eslint-disable-line global-require
          },
        });
      }
    },
  },
};
