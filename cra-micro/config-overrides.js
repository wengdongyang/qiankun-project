// /*
//  * @Author: wdy
//  * @Date: 2020-05-07 15:54:41
//  * @Last Modified by: wdy
//  * @Last Modified time: 2020-12-07 11:10:08
//  */

const path = require('path');
const { name } = require('./package');
const { override, addLessLoader, useEslintRc } = require('customize-cra');
module.exports = {
  webpack: (config, env) => {
    const { output } = config;

    const _output = Object.assign({}, output, {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    });
    return Object.assign(
      {},
      config,
      override(
        useEslintRc(path.resolve(__dirname, './.eslintrc.js')),
        addLessLoader({
          lessOptions: {
            javascriptEnabled: true
          }
        })
      )(config),
      {
        output: _output
      }
    );
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*'
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  }
};
