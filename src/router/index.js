import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/criar-pedidos',
    name: 'CriarPedido',
    component: () => import(/* webpackChunkName: "criar-pedidos" */ '../views/CriarPedidoView.vue')
  },
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: () => import(/* webpackChunkName: "cadastrar" */ '../views/CadastrarView.vue')
  },
  {
    path: '/entrar',
    name: 'Entrar',
    component: () => import(/* webpackChunkName: "entrar" */ '../views/EntrarView.vue')
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/PedidosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
