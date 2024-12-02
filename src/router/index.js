import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/Order/index.vue')
    },
    {
      path: '/receipt/:id',
      name: 'receipt',
      component: () => import('@/views/Receipt/index.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search/index.vue')
    },
    {
      path: '/create-post',
      name: 'create-post',
      component: () => import('@/views/CreatePost/index.vue')
    },
    {
      path: '/edit-post/:id',
      name: 'edit-post',
      component: () => import('@/views/EditPost/index.vue')
    },
    {
      path: '/house/:id',
      name: 'house',
      component: () => import('@/views/House/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFound/index.vue'),
    },
  ]
})


export default router