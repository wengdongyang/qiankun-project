// /*
//  * @Author: wdy
//  * @Date: 2020-05-07 15:54:41
//  * @Last Modified by: wdy
//  * @Last Modified time: 2020-12-07 11:10:08
//  */
const path = require('path');
const { override, addLessLoader, useEslintRc } = require('customize-cra');
module.exports = override(
  useEslintRc(path.resolve(__dirname, './.eslintrc.js')),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true
    }
  })
);
