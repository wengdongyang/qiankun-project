/*
 * @Author: wdy
 * @Date: 2022-01-14 17:57:51
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 11:58:37
 */
import 'ant-design-vue/dist/antd.css';
import '@src/styles/reset/index.less';
import Vue from 'vue';
import Antd from 'ant-design-vue';

import App from './App.vue';
import router from './router';
import stores from './stores';

Vue.config.productionTip = false;

Vue.use(Antd);

/* eslint-disable */
// if (process.env.NODE_ENV !== 'production') {
//   require('@/mock');
// }

new Vue({
  router,
  store: stores,
  render: h => h(App),
}).$mount('#app');
// registerMicroApps([
//   {
//     name: 'sub-vue',
//     entry: '//localhost:8888',
//     container: '#qiankunContainer',
//     activeRule: '/root/qiankun',
//   },
// ]);
// start();

// registerMicroApps(
//   [
//     {
//       name: 'sub-vue',
//       entry: {scripts: ['//localhost:8888']},
//       container: '#qiankun',
//       activeRule: '/qiankun',
//       render(app) {
//         console.info(app);
//       },
//     },
//   ],
//   {
//     beforeLoad: app => {
//       console.log('before load app.name====>>>>>', app.name);
//     },
//     beforeMount: [
//       app => {
//         console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
//       },
//     ],
//     afterMount: [
//       app => {
//         console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
//       },
//     ],
//     afterUnmount: [
//       app => {
//         console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
//       },
//     ],
//   }
// );
// console.info('start=============', window);
// start();
