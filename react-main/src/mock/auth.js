/*
 * @Author: wdy
 * @Date: 2022-01-17 10:40:21
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 11:13:21
 */
const mockApiPostAuthLogin = req => {
  return {
    code: '200',
    data: {
      name: 'admin',
      user_id: '2',
      token: 'admin',
      avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4',
    },
  };
};

const mockApiGetAuthMenuTree = () => {
  return {
    code: '200',
    data: [
      {
        id: '6630d3b1a8a148e49b0887f08bae0782',
        parentId: '0',
        name: '自身模块',
        isLeaf: false,
        children: [
          {
            id: '7142e5de89074a75aabd06637dac7292',
            parentId: '6630d3b1a8a148e49b0887f08bae0782',
            name: '首页',
            isLeaf: true,
            route: {name: '首页', type: 'self', path: '/base/home'},
          },
          {
            id: 'ece178fafa784483887326c6697d9a26',
            parentId: '6630d3b1a8a148e49b0887f08bae0782',
            name: '首页设置',
            isLeaf: true,
            route: {name: '首页设置', type: 'self', path: '/base/homeSetting'},
          },
        ],
      },
      {
        id: '4b40bf4fa4dc47cba091f5496ea03feb',
        parentId: '0',
        name: '外部模块',
        isLeaf: false,
        children: [
          {
            id: '4dbe5b1cd2cc48ccac14fadb39a97f8a',
            parentId: '4b40bf4fa4dc47cba091f5496ea03feb',
            name: '菜单管理',
            isLeaf: true,
            route: {name: '菜单管理', type: 'qiankun', path: '/qiankunVue/menuConfigs'},
          },
          {
            id: '5b8c0d3d73454b96803b64116f1ecdb3',
            parentId: '4b40bf4fa4dc47cba091f5496ea03feb',
            name: '功能包管理',
            isLeaf: true,
            route: {name: '功能包管理', type: 'qiankun', path: '/qiankunVue/packManagements'},
          },
        ],
      },
      {
        id: '5d2b340763844b40a35d8102317b959e',
        parentId: '4b40bf4fa4dc47cba091f5496ea03feb',
        name: '外部模块2',
        isLeaf: false,
        children: [
          {
            id: '5139c08baa19449bae50c3c07c7ae98e',
            parentId: '5d2b340763844b40a35d8102317b959e',
            name: '传感器设备管理',
            isLeaf: true,
            route: {name: '传感设备管理', type: 'qiankun', path: '/qiankunReact/sensingDeviceEquipments'},
          },
          {
            id: '321b154f7b89452d997f88926bc12c9b',
            parentId: '5d2b340763844b40a35d8102317b959e',
            name: '普通视频摄像头管理',
            isLeaf: true,
            route: {name: '普通视频摄像头管理', type: 'qiankun', path: '/qiankunReact/cameraEquipments'},
          },
        ],
      },
    ],
  };
};

export {mockApiPostAuthLogin, mockApiGetAuthMenuTree};
