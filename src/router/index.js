import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/UserCreateView.vue'),
  },
  {
    path: '/search_stock',
    name: 'search',
    component: () => import('@/views/SearchStockView.vue'),
  },
  {
    path: '/stock_info/:stocknum',
    component: () => import('@/views/StockInfoView.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue'),
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach 

export default router
