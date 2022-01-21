/*
 * @Author: wdy
 * @Date: 2021-03-12 11:13:29
 * @Last Modified by: wdy
 * @Last Modified time: 2021-03-12 11:25:55
 */

interface TypeTreeDataNode {
  title?: string;
  key: string;
  children?: TypeTreeDataNode[];
  [key: string]: any;
}

/**
 * 生成树形数据的展开项的keys
 */
const createTreeExpandedKeysBySelectedKeys = (treeDatas: TypeTreeDataNode[], selectedKeys: string[]): string[] => {
  let expandedKeys: string[] = [];
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
