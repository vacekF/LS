const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path')
const IfPlugin = require('if-webpack-plugin')
const defaultLanguage = require('./settings/publish-settings').defaultLanguage
const languageCompile  = require('./settings/publish-settings').languageCompile

module.exports = {
  transpileDependencies: [
    'simple-core',
    'simple-assessment'
  ],
  devServer: {
    proxy: {
      "/simple": {
        target: "http://localhost:8081",
        ws: true,
        changeOrigin: true
      }
    }
  },
  outputDir: languageCompile
    ? 'dist'
    : 'dist/' + defaultLanguage,
  baseUrl: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          oneOf: [
            {
              exclude: path.join(process.cwd(), '/src/assets/svg/noInline'),
              use: 'svg-inline-loader'
            },
            {
              include: path.join(process.cwd(), '/src/assets/svg/noInline'),
              use: 'file-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new IfPlugin(
        process.env.NODE_ENV === 'development',
        new WebpackShellPlugin({
          onBuildStart: ['node ./settings/pre-build.config']
        }),
        new WebpackShellPlugin({
          onBuildStart: ['node ./settings/pre-build.config'],
          onBuildEnd: ['node ./settings/post-build.config']
        })
      )
    ]
  }
}
