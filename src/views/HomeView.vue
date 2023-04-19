<template>
  <v-sheet width="300" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="login(usuario)">
      <v-text-field
        v-model="usuario.email"
        label="Correo Electronico"
      ></v-text-field>
      <v-text-field
        v-model="usuario.password"
        label="COntraseña"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
/* siempre los map accion van en los metodos */

// Components
import { mapActions} from 'vuex'

export default {
  name: 'HomeView',
  data(){
    return{
      usuario:{
        email: '',
        password: '',
      }
    }
  },
  components: {
  },
  methods: {
    ...mapActions(['login'])
  }
};
</script>
