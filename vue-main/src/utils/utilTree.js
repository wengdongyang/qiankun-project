/*
 * @Author: wdy
 * @Date: 2021-03-12 11:13:29
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 15:10:32
 */

/**
 * 生成树形数据的展开项的keys
 */
const createTreeExpandedKeysBySelectedKeys = (treeDatas, selectedKeys) => {
  let expandedKeys = [];
  treeDatas.forEach(treeData => {
    const {children = []} = treeData;
    children.forEach(child => {
      if (selectedKeys.includes(child.key)) {
        expandedKeys.push(treeData.key);
      }
    });
    expandedKeys = expandedKeys.concat(createTreeExpandedKeysBySelectedKeys(children, selectedKeys));
  });
  return expandedKeys;
};
export {createTreeExpandedKeysBySelectedKeys};
