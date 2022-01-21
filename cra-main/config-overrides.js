// /*
//  * @Author: wdy
//  * @Date: 2020-05-07 15:54:41
//  * @Last Modified by: wdy
//  * @Last Modified time: 2020-12-07 11:10:08
//  */
const path = require('path');
const { override, overrideDevServer, addLessLoader, useEslintRc, addWebpackAlias } = require('customize-cra');
const addProxy = () => (config) => {
  config.proxy = {
    '/api': { target: 'https://hstest.aseitapps.cn', changeOrigin: true }
  };
  return config;
};
module.exports = {
  webpack: override(
    useEslintRc(),
    addLessLoader({ lessOptions: { javascriptEnabled: true } }),
    addWebpackAlias({
      '@src': path.resolve(__dirname, 'src')
    })
  ),
  devServer: overrideDevServer(addProxy())
};
