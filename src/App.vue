<template>
  <v-app>
    <v-main>
      <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click="drawer=!drawer">

      </v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="cerrarSesion">mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
    class="mx-auto"
    width="300"
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list v-model:opened="open">
      <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>
      <v-list-item prepend-icon="mdi-about" title="About" to="/about"></v-list-item>
      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          ></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Admin"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Actions"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
        </v-list>
      </v-navigation-drawer>
  </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
//IMPORTANTE
//si se quiere llevar a produccion para que lea el histori y no haya errores debes installar
//npm i connect-history-api-fallback esto en el backend,
/* luego se hace un npm buld de la applicacion con vue y los archivos de dist se pegan en la carpeta public del backend, posterior a esto se publica */
/* https://www.youtube.com/watch?v=QUZrjnprVQU&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=58 */
/* https://bluuweb.github.io/node/07-jwt/#consumir-api */
import {mapActions} from 'vuex'
export default {
  name: 'App',

  data: () => ({
    drawer:false,
    open: ['Users'],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
  }),
  methods:{
    ...mapActions(['obtenerToken','cerrarSesion']),
  },
  created(){
    this.obtenerToken()
  }
}
</script>
