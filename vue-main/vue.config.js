/*
 * @Author: wdy
 * @Date: 2022-01-14 18:00:02
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 11:49:41
 */

const {resolve} = require('path');
module.exports = {
  // publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {'@src': resolve(__dirname, 'src')},
    },
  },
  devServer: {
    port: '8000',
  },
};
