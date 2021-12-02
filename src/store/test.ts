// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     test: 'test state aaa',
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   getters: {
//     stateTest(state) {
//       return 'getters aaa ' + state.test;
//     }
//   },
//   modules: {
//   }
// })
type testState = {
  test: string;
}

export const testModule = {
  namespaced: true,
  state: {
    test: 'module test',
  },
  mutations: {
    testMutation(state: testState): void {
      state.test = 'bb';
    }
  },
  getters: {
    stateTest(state: testState): string {
      return 'getters aaa ' + state.test;
    }
  },
}
