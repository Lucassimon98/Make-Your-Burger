import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  { //definição da rota home
    path: '/',
    name: 'Home',
    component: Home
  },
  { //definição da rota de criação de pedidos
    path: '/criar-pedidos',
    name: 'CriarPedido',
    component: () => import(/* webpackChunkName: "criar-pedidos" */ '../views/CriarPedidoView.vue')
  },
  { //definição da rota de cadastros
    path: '/cadastrar',
    name: 'Cadastrar',
    component: () => import(/* webpackChunkName: "cadastrar" */ '../views/CadastrarView.vue')
  },
  { //definição da rota de entrar
    path: '/entrar',
    name: 'Entrar',
    component: () => import(/* webpackChunkName: "entrar" */ '../views/EntrarView.vue')
  },
  { //definição da rota de pedidos
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
