/*
 * @Author: wdy
 * @Date: 2022-01-14 18:04:56
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 18:05:21
 */

export default [
  {
    path: '/test',
    name: 'test',
    meta: {title: 'test'},
    component: () => import('@src/views/test'),
  },
];
