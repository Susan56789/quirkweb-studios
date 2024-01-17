const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = defineConfig({
  transpileDependencies: true,
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

})
