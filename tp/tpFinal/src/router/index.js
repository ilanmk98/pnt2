import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import InicioConsumidorView from '../views/InicioConsumidorView.vue'
import DetalleComida from '../views/detalleComida.vue'
import InicioRestauranteView from '../views/InicioRestaurante.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:'/register',
      name:'register',
      component:RegisterView
    },
    {
      path:'/inicioConsumidor',
      name:'inicioConsumidor',
      component:InicioConsumidorView
    },
    {
      path:'/inicioRestaurante',
      name:'inicioRestaurante',
      component:InicioRestauranteView
    }
  ]
})

export default router
