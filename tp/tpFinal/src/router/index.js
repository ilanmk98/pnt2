import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import InicioConsumidorView from '../views/InicioConsumidorView.vue'
import InicioRestauranteView from '../views/InicioRestaurante.vue'
import OlvidasteContrasena from '../views/OlvidasteContrasena.vue'
import AdminView from '../views/AdminView.vue'


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
      path:'/inicioConsumidor/:user',
      name:'inicioConsumidor',
      component:InicioConsumidorView
    },
    {
      path:'/inicioRestaurante/:user',
      name:'inicioRestaurante',
      component:InicioRestauranteView
    },
    {
      path:'/olvidasteContrasena',
      name:'OlvidasteContrasena',
      component:OlvidasteContrasena
    },
    {
      path:'/admin',
      name:'Admin',
      component:AdminView
    }
  ]
})

export default router
