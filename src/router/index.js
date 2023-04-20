import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import store, { Store } from '../store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {rutaProtegida:true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  /* si existe ruta protegida rutaEsProtegida es true, si no hay ruta protegida es False */
  const rutaEsProtegida = to.matched.some(item => item.meta.rutaProtegida)
  if (rutaEsProtegida && store.state.token ===null) {
    /* si no hay token y la ruta es protegida vete a inicio */
            // ruta protegida es true
        // token es nulo true, por ende redirigimos al inicio
    next('/')
    console.log("protegida");
  }else{
    next()
    console.log("no es protegida")
  }
})

export default router
