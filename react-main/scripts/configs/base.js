/*
 * @Author: wdy
 * @Date: 2022-01-07 14:16:42
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 16:39:42
 */
const basePages = [
  {
    path: 'base',
    name: '基础功能包',
    pages: [
      {
        path: 'menuConfigs',
        name: '菜单管理',
        components: ['addMenuModal', 'editMenuInfoModal', 'editMenuRouteBindModal', 'menus'],
      }, // wdy
      {path: 'roleMenuConfigs', name: '角色菜单管理', components: ['editRoleModal', 'editRoleMenuConfigModal']}, // wdy
      {path: 'employeeServerPermissions', name: '员工服务器管理'}, // wdy
      {path: 'employeeConfigs', name: '员工管理', components: ['editEmployeeInfoModal']}, // xsc
      {path: 'homeSetting', name: '首页设置'}, // xsc
      {
        path: 'home',
        name: '首页',
        components: [
          'eventEuipDistribution',
          'eventDispose',
          'job',
          'message',
          'collectEquipmentHealth',
          'eventDetail',
          'nodeSituation',
          'componentHealth',
          'locationHealth',
          'equipmentHealth',
          'resourceOccupancy',
          'eventWarnDistribution',
          'eventType',
          'eventStatistical',
          'nodeInfo',
          'personnelAccess',
          'maxGas',
          'maxFiberTemperature',
          'maxCirculationCurrent',
        ],
      }, // xsc
    ],
  },
];

module.exports = basePages;
