/*
 * @Author: wdy
 * @Date: 2022-01-14 18:00:02
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-18 09:54:59
 */

const {resolve} = require('path');
module.exports = {
  // publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {'@src': resolve(__dirname, 'src')},
    },
  },
};
