import * as types from '../mutation-types';

export default {
  state: {
    userInfo: {},
  },
  mutations: {
    [types.SET_USERINFO](state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  getters: {
    userInfo: state => state.userInfo,
  },
  actions: {
    setUserinfo({commit}, userInfo) {
      commit(types.SET_USERINFO, userInfo);
    },
  },
};
