<template>
  <div class="about">
    <h1>Ruta Protegida</h1>
    {{ token }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default{
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState(['token'])
  }
}
</script>
