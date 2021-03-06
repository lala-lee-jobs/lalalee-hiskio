const path = require('path');
const dotenv = require('dotenv');

let fileUrl;
switch (process.env.DEPLOY_ENV) {
  case 'develop':
    fileUrl = path.resolve('.env.develop');
    break;
  default:
    fileUrl = path.resolve('.env.develop');
}
dotenv.config({ path: fileUrl });

export default {
  env: {
    apiBaseUrl: process.env.API_BASE_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lalalee-hiskio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.js',
    // '@/plugins/axios-mock-adapter.js',
    { src: '@/plugins/utils.js'},
    { src: '@/plugins/createPersistedState.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  eslint: {
    fix: true,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Nuxt-Storybook configuration: https://storybook.nuxtjs.org/api/options/
  storybook: {
    // Run Storybook on localhost:4000
    port: 4000
    // By default @nuxtjs/storybook load all stories inside ~/components. 
    // You don't need to add this directory.
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
