/*
 * @Author: wdy
 * @Date: 2022-01-14 18:04:56
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-17 18:08:38
 */

export default [
  {
    path: '/test',
    name: 'test',
    meta: {title: 'test'},
    component: () => import('@src/views/test'),
  },
];
