import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:4,
  },
  mutations: {
    addCounter(state, num){
      state.counter += num;
    }
  },
  actions: {
    addCounter(context, num){
      context.commit("addCounter", num);
    }
  },
  modules: {
  }
})
