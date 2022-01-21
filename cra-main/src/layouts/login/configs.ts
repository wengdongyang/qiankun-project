/*
 * @Author: wdy
 * @Date: 2021-01-07 15:15:22
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 16:43:29
 */
import { TypeMenu } from './Login.d';

import { MENU, INTERNAL_PAGE, ASEIT_INSPECTION_PAGE, ASEIT_SETTING_PAGE, FRIEND_INNER_IFREAM, FRIEND_INNER_PAGE, FRIEND_BLANK_PAGE } from '../../constants';

export const baseMenuConfigs: TypeMenu[] = [
  { type: INTERNAL_PAGE, name: '首页', owner: 'self', path: 'home' },
  {
    type: MENU,
    name: '巡检组合',
    path: '',
    children: [
      { type: ASEIT_INSPECTION_PAGE, name: '巡检点概况', owner: 'asInspection', path: 'inspections' },
      { type: ASEIT_INSPECTION_PAGE, name: '机器人巡检', owner: 'asInspection', path: 'robotInspection' }
    ]
  },
  {
    type: MENU,
    name: '配置组合',
    path: '',
    children: [
      { type: ASEIT_SETTING_PAGE, name: '站线设备台账配置', owner: 'asSetting', path: 'equipments' },
      { type: ASEIT_SETTING_PAGE, name: '巡检点注册', owner: 'asSetting', path: 'inspectionPointRegist' }
    ]
  },
  {
    type: MENU,
    name: '三方链接',
    path: '',
    children: [
      { type: FRIEND_INNER_IFREAM, name: '三方iframe', owner: 'haoyuan', path: 'https://www.baidu.com/' },
      { type: FRIEND_INNER_PAGE, name: '三方内置页面', owner: 'haoyuan', path: 'http://192.168.2.60:10090/#/login' },
      { type: FRIEND_BLANK_PAGE, name: '三方外置页面', owner: 'haoyuan', path: 'http://192.168.2.60:10090/#/login' }
    ]
  }
];
/**
 * 菜单定义
 */
const menuConfigs: TypeMenu[] = baseMenuConfigs.map((menu) => {
  const { children = [], ...other } = menu;
  const _children = children.map((child) => ({ ...child, id: (Math.random() * 10000000000).toFixed(0) }));
  return { ...other, children: _children, id: (Math.random() * 10000000000).toFixed(0) };
});

export { menuConfigs };
