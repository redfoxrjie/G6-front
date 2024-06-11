import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/trips',
      name: 'trips',
      component: () => import('../views/TripsView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('../views/TicketsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/allTrips',
      name: 'allTrips',
      component: () => import('../views/AllTripsView.vue')
    },
    {
      path: '/memberMain',
      name: 'memberMain',
      component: () => import('../views/MemberMainView.vue')
    },
    {

      path: '/tripsSearchResult',
      name: 'tripsSearchResult',
      component: () => import('../views/TripsSearchResultView.vue')
    },
    
    {

      path: '/blogSearchResult',
      name: 'blogSearchResult',
      component: () => import('../views/BlogSearchResultView.vue')
    },

{
      path: '/newsPage',
      name: 'newsPage',
      component: () => import('../views/NewsPageView.vue')
    }
    ,

    {
      // path內冒號後面就是自己設定的,之後頁面內可以用useRoute 讀取路由id是多少
          path: '/testInner/:id',
          name: 'testInner',
          component: () => import('../views/TestInnerView.vue')
        }
    
  ]
})

export default router
