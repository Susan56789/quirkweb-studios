const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://email-server-woad.vercel.app/',
  },
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: 'https://quirkwebstudios.netlify.app',
        paths: [

          '/',
          '/#about-us',
          '/#contact',
          '/#pricing',
          '/#done-websites'
        ],
        options: {
          filename: 'sitemap.xml',
        },
      }),
    ],
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = true;
      return args;
    });
  },

})
