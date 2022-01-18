import * as types from '../mutation-types';

export default {
  state: {
    userinfo: {},
  },
  mutations: {
    [types.SET_USERINFO](state, userinfo) {
      state.userinfo = userinfo;
    },
  },
  getters: {
    userinfo: state => state.userinfo,
  },
  actions: {
    setUserinfo({commit}, userinfo) {
      commit(types.SET_USERINFO, userinfo);
    },
  },
};
