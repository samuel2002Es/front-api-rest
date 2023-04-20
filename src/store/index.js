import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    token: null,
  },
  getters: {
  },
  mutations: {
    /* cuando hicimos el commit llega al payload y lo mete en el state que guarda en el token */
    setToken(state, payload){
      state.token = payload;
    },
  },
  actions: {
    /* esto es para que cuando refresquemos busque obtener el token del local storage y lo llamamos desde la pagina padre en este caso app.vue*/
    obtenerToken({ commit }){
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null) 
      }
    },
    async login({commit},usuario){
      /* el commit nos va a servir para llamar a una mutacion */
      try {
        /* peticion hecha con fetch */
/*         let body1 = JSON.stringify(usuario);

        const res = await fetch('https://jwt-backend-production.up.railway.app/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body1
        })
        const usuarioDB = await res.json()
        console.log(usuarioDB);
        console.log(usuarioDB.data.token) */


        /* peticion hecha con axios */
        let url = `https://jwt-backend-production.up.railway.app/api/user/login`;

        let body = JSON.stringify(usuario);

        const authOptions = {
          method: "post",
          url: url,
          data: body,
          headers: {
          "Content-Type": "application/json",
        },
          json: true,
        };

        axios(authOptions)
          .then((resp) => {
          console.log("response :- ",resp);
/*           console.log(resp.data); */
          console.log(resp.data.data.token);
          /* hacemos una commit para llamar a una mutacion y cambiar el state */
          commit('setToken', resp.data.data.token)
          /* para que cuando se refresque la pagina no se pierda el token utilizamos el localstorage */
          localStorage.setItem('token', resp.data.data.token)
          })
          .catch((error) => {
            alert(error);
          });
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
