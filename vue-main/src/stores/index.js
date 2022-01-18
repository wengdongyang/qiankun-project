/*
 * @Author: wdy
 * @Date: 2022-01-17 10:52:03
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-17 11:18:34
 */
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import user from './modules/user';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {user},
  plugins: [vuexLocal.plugin],
});
