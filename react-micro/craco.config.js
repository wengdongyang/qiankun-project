/*
 * @Author: wdy
 * @Date: 2022-01-12 14:12:10
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 18:08:01
 */
const {name} = require('./package.json');
const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');
const resolveUrlLoader = require('craco-resolve-url-loader');

module.exports = {
  devServer: {
    headers: {'Access-Control-Allow-Origin': '*'},
    injectClient: false,
    // hot: false,
    // liveReload: false,
    // watchContentBase: false,
    // historyApiFallback: true,
    port: 3333,
    proxy: {
      '/api': {target: 'https://hstest.aseitapps.cn', changeOrigin: true},
      '/media': {target: 'https://hstest.aseitapps.cn', changeOrigin: true},
      '/node/db38d88c559a48eb936dc81736ce866c/api': {target: 'https://hstest.aseitapps.cn', changeOrigin: true},
      '/node/db38d88c559a48eb936dc81736ce866c/ws': {target: 'wss://hstest.aseitapps.cn', changeOrigin: true},
    },
  },
  plugins: [
    {plugin: resolveUrlLoader},
    {plugin: CracoAlias, options: {source: 'options', baseUrl: './', aliases: {'@src': './src'}}},
    {plugin: CracoLessPlugin, options: {lessLoaderOptions: {lessOptions: {javascriptEnabled: true}}}},
  ],
  babel: {
    plugins: [['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}]],
  },
  output: {
    library: `${name}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${name}`,
  },
};
