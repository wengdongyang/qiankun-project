/*
 * @Author: wdy
 * @Date: 2022-01-07 14:16:42
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 17:23:29
 */
const basePages = [
  {
    path: 'base',
    name: '自身模块',
    pages: [
      {path: 'menuConfigs', name: '菜单管理'},
      {path: 'roleMenuConfigs', name: '角色菜单管理'},
      {path: 'employeeServerPermissions', name: '员工服务器管理'},
      {path: 'employeeConfigs', name: '员工管理'},
      {path: 'homeSetting', name: '首页设置'},
      {path: 'home', name: '首页'},
    ],
  },
];

module.exports = basePages;
