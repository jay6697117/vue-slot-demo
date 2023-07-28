import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    callObj: {}
  },
  mutations: {
    setCallObj(state, pay) {
      // console.log('setCallObj pay', pay);
      state.callObj = pay;
      // state.callObj = JSON.parse(JSON.stringify(pay));
    }
  },
  actions: {
    setCallObjAsync({commit}, pay) {
      // console.log('setCallObjAsync pay', pay);
      commit('setCallObj', pay);
    }
  },
  modules: {}
});
