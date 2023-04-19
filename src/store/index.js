import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
  },
  getters: {
  },
  mutations: {
    setToken(state, payload){
      state.token = payload;
    },
  },
  actions: {
    async login({commit},usuario){
      try {
        const res = await fetch('https://jwt-backend-production.up.railway.app/api/user/login')
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
