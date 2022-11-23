const { defineConfig } = require('@vue/cli-service')

const url = process.env.VUE_APP_API_URL

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].SDK_URL = url
      return args
    })
  },
})
