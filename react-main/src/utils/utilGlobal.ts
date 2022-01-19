/*
 * @Author: wdy
 * @Date: 2019-10-18 15:54:04
 * @Last Modified by: xsc
 * @Last Modified time: 2021-12-18 13:56:36
 */
import {isEmpty} from 'lodash';
// types
// configs
// apis
// utils
// stores
// components
interface TypeOption {
  [key: string]: any;
}
interface TypeTreeData {
  children?: TypeTreeData[];
  [key: string]: any;
}
const createSelectOptions = (options: TypeOption[], config?: {labelKey: string; valueKey: string}) => {
  const {labelKey = 'label', valueKey = 'value'} = config || {labelKey: 'label', valueKey: 'value'};
  return options.map(el => ({label: el[labelKey], value: el[valueKey]}));
};
/**
 * 类似于select的组件，传入配置文件，value，获取对应的option
 * @param {*} options
 * @param {*} value
 * @param {*} config
 */
const getSelectOptionByValue = (options: TypeOption[], value: any, config?: {valueKey: string}): TypeOption => {
  const {valueKey} = config || {valueKey: 'value'};
  return options.find(el => el[valueKey] === value) || {};
};
/**
 * 类似于select的组件，传入配置文件，value，获取对应的label
 * @param options
 * @param value
 * @param config
 * @returns
 */
const getSelectLabelByValue = (options: TypeOption[], value: any, config?: {labelKey: string; valueKey: string}): any => {
  const {labelKey} = config || {labelKey: 'label', valueKey: 'value'};
  const selectOption = getSelectOptionByValue(options, value, config);
  return selectOption[labelKey] || '';
};
/**
 * 获取指定的树形数据
 * @param treeDatas
 * @param value
 * @param config
 * @returns
 */
const getTreeDataByKey = (treeDatas: TypeTreeData[], value: any, config?: {keyKey: string; childrenKey: string}): TypeTreeData => {
  const {keyKey, childrenKey} = config || {keyKey: 'key', childrenKey: 'children'};
  let selectNode: {[key: string]: any} = {};
  for (let index = 0; index < treeDatas.length; index++) {
    const activeTreeData = treeDatas[index];
    if (activeTreeData[keyKey] === value) {
      selectNode = activeTreeData;
    }
    if (selectNode && !isEmpty(selectNode)) {
      break;
    } else {
      const childrenTreeDatas = activeTreeData[childrenKey];
      if (childrenTreeDatas?.length) {
        selectNode = getTreeDataByKey(childrenTreeDatas, value, config);
      }
    }
    if (selectNode && !isEmpty(selectNode)) {
      break;
    }
  }
  return selectNode;
};
/**
 * 获取树形数据的title
 * @param treeDatas
 * @param value
 * @param config
 * @returns
 */
const getTreeDataTitleByKey = (treeDatas: TypeTreeData[], value: any, config?: {titleKey: string; keyKey: string; childrenKey: string}): any => {
  const {titleKey} = config || {titleKey: 'title', keyKey: 'key', childrenKey: 'children'};
  const selectNode: {[key: string]: any} = getTreeDataByKey(treeDatas, value, config);
  return selectNode[titleKey] || '';
};

/**
 * 获取parent
 * @param treeDatas
 * @param value
 * @param config
 * @returns
 */
const getTreeDataParentByKey = (treeDatas: TypeTreeData[], value: any, config?: {keyKey: string; childrenKey: string}): any => {
  const {keyKey, childrenKey} = config || {keyKey: 'key', childrenKey: 'children'};
  let selectNode: {[key: string]: any} = {};
  for (let index = 0; index < treeDatas.length; index++) {
    const activeTreeData = treeDatas[index];
    const children = activeTreeData[childrenKey] || [];
    if (children?.length > 0) {
      selectNode = getTreeDataParentByKey(children, value, config);
      if (!isEmpty(selectNode)) {
        break;
      }
      if (children.some((child: TypeTreeData) => child[keyKey] === value)) {
        selectNode = activeTreeData;
        break;
      }
    }
  }
  return selectNode;
};

export {createSelectOptions, getSelectOptionByValue, getSelectLabelByValue, getTreeDataByKey, getTreeDataTitleByKey, getTreeDataParentByKey};
