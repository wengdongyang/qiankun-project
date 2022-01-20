/*
 * @Author: wdy
 * @Date: 2019-10-18 15:54:04
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 15:10:12
 */
import {isEmpty} from 'lodash';
// types
// configs
// apis
// utils
// stores
// components
const createSelectOptions = (options, config) => {
  const {labelKey = 'label', valueKey = 'value'} = config || {labelKey: 'label', valueKey: 'value'};
  return options.map(el => ({label: el[labelKey], value: el[valueKey]}));
};
/**
 * 类似于select的组件，传入配置文件，value，获取对应的option
 * @param {*} options
 * @param {*} value
 * @param {*} config
 */
const getSelectOptionByValue = (options, value, config) => {
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
const getSelectLabelByValue = (options, value, config) => {
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
const getTreeDataByKey = (treeDatas, value, config) => {
  const {keyKey, childrenKey} = config || {keyKey: 'key', childrenKey: 'children'};
  let selectNode = {};
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
const getTreeDataTitleByKey = (treeDatas, value, config) => {
  const {titleKey} = config || {titleKey: 'title', keyKey: 'key', childrenKey: 'children'};
  const selectNode = getTreeDataByKey(treeDatas, value, config);
  return selectNode[titleKey] || '';
};

/**
 * 获取parent
 * @param treeDatas
 * @param value
 * @param config
 * @returns
 */
const getTreeDataParentByKey = (treeDatas, value, config) => {
  const {keyKey, childrenKey} = config || {keyKey: 'key', childrenKey: 'children'};
  let selectNode = {};
  for (let index = 0; index < treeDatas.length; index++) {
    const activeTreeData = treeDatas[index];
    const children = activeTreeData[childrenKey] || [];
    if (children?.length > 0) {
      selectNode = getTreeDataParentByKey(children, value, config);
      if (!isEmpty(selectNode)) {
        break;
      }
      if (children.some(child => child[keyKey] === value)) {
        selectNode = activeTreeData;
        break;
      }
    }
  }
  return selectNode;
};

export {createSelectOptions, getSelectOptionByValue, getSelectLabelByValue, getTreeDataByKey, getTreeDataTitleByKey, getTreeDataParentByKey};
