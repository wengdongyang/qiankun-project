/*
 * @Author: wdy
 * @Date: 2022-01-19 16:49:26
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 16:51:11
 */
const fs = require('fs');
const path = require('path');
const projectRootPath = path.resolve(__dirname, '../../');
/**
 * 生成文件夹
 * @param {*} dirname
 */
const mkdirSync = async dirname => {
  if (fs.existsSync(dirname)) {
  } else {
    fs.mkdirSync(dirname, {recursive: false});
  }
};
/**
 * 写入文件
 * @param {*} fileName
 * @param {*} fileContent
 * @param {*} isOver 是否强制覆盖
 */
const writeFileSync = async (fileName, fileContent, isOver) => {
  if (fs.existsSync(fileName)) {
    if (isOver) {
      fs.rmSync(fileName);
      fs.writeFileSync(fileName, fileContent);
    }
  } else {
    fs.writeFileSync(fileName, fileContent);
  }
};
/**
 * 拷贝文件夹
 * @param {*} source
 * @param {*} dest
 */
const copyFolderSync = async (source, dest, filter) => {
  fs.readdir(source, (err, paths) => {
    if (err) {
      throw err;
    }
    paths.forEach(path => {
      const _source = `${source}/${path}`;
      const _dest = `${dest}/${path}`;

      if (filter && !filter(path)) {
        return;
      }

      fs.stat(_source, (err, st) => {
        if (err) {
          throw err;
        }

        if (st.isFile()) {
          fs.copyFileSync(_source, _dest);
        } else if (st.isDirectory()) {
          fs.mkdirSync(_dest, {recursive: false});
          copyFolderSync(_source, _dest, filter);
        }
      });
    });
  });
};
/**
 * 拷贝文件
 * @param {*} fileContent
 */
const copyGitKeepSync = async fileContent => {
  if (fs.existsSync(`${fileContent}/.gitkeep`)) {
  } else {
    fs.copyFileSync(`${projectRootPath}/scripts/.gitkeep`, `${fileContent}/.gitkeep`);
  }
};

module.exports = {
  mkdirSync,
  writeFileSync,
  copyFolderSync,
  copyGitKeepSync,
};
