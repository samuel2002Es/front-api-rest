<template>
  <div class="about">
    <h1>Ruta Protegida</h1>
    {{ token }}
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios'
export default{
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState(['token'])
  },
  created(){
    this.datosProtegidos()
  },
  methods:{
    async datosProtegidos(){
      const config = {
        headers:{
          'Content-Type': 'application/json',
          'auth-token': this.token
        }
      };
      const url = "https://jwt-backend-production.up.railway.app/api/admin";
      await axios.get(url,config)
      .then(res => console.log(res))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
/*       .finally(function () {
      // always executed
      }); */
      /* try {
        const res = await fetch('https://api-prueba-100.herokuapp.com/api/admin', {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.token
          },
        })
        const resDB = await res.json()
        console.log(resDB)
      } catch (error) {
        console.log(error)
      } */
    }
  }
}
</script>
