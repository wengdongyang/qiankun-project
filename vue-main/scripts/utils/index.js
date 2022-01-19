/*
 * @Author: wdy
 * @Date: 2022-01-07 14:41:11
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-11 14:29:12
 */
const {capitalizeWord} = require('./name');
const {mkdirSync, writeFileSync, copyFolderSync, copyGitKeepSync} = require('./files');

module.exports = {
  capitalizeWord,
  mkdirSync,
  copyGitKeepSync,
  writeFileSync,
  copyFolderSync,
};
