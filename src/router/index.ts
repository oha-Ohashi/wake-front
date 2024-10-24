import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TestHome.vue')
      //component: HomeView
    },
    {
      path: '/list',
      name: '',
      component: () => import('../views/Test1.vue'),
      props: {report: true, name: "-"}
      //component: HomeView
    },
    {
      path: '/personal/alice',
      name: '',
      component: () => import('../views/Test1.vue'),
      props: {report: true, name: "alice"}
      //component: HomeView
    },
    {
      path: '/personal/bob',
      name: '',
      component: () => import('../views/Test1.vue'),
      props: {report: true, name: "bob"}
      //component: HomeView
    },
    {
      path: '/personal/charlie',
      name: '',
      component: () => import('../views/Test1.vue'),
      props: {report: true, name: "charlie"}
      //component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/req',
      name: 'req',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReqPage.vue')
    }
  ]
})

export default router
