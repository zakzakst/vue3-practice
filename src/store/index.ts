import { createStore } from 'vuex'
import { testModule } from './test'

export default createStore({
  state: {
    test: 'test state',
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    stateTest(state) {
      return 'getters ' + state.test;
    }
  },
  modules: {
    testModule: testModule,
  },
})
