const {resolve} = require('path');
const {name} = require('./package.json');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {'@src': resolve(__dirname, 'src')},
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: '8888',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
