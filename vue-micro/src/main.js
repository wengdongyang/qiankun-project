import './public-path';
import Vue from 'vue';
import App from './App.vue';
import routes from './router';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
let instance = null;

const render = (props = {}) => {
  const {container, routerBase} = props;

  console.info(window.__POWERED_BY_QIANKUN__);
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/root/qiankunVue/' : '/',
    mode: 'history',
    routes,
  });
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export const bootstrap = async () => {
  console.log('[vue] vue app bootstraped');
};
export const mount = async props => {
  render(props);
};
export const unmount = async () => {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
};
