import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { h } from 'vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView'
import PostView from '../views/PostView'

const News = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/news',
    name: 'news',
    component: { render: () => h(RouterView)},
    children: [
      {
        path: '',
        name: 'newsIndex',
        component: NewsView,
        props: true
      },
      {
        path: ':slug',
        name: 'post',
        component: PostView,
        props: true
      }
    ]
  },
  {
    path: '/preview/:slug',
    name: 'preview',
  }
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: NewsView,
  // },
  // {
  //   path: '/news/:slug',
  //   name: 'post',
  //   component: PostView,
  //   props: true
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  scrollBehavior(to, from, savedPosition) {
    return {
      // could also be
      // el: document.getElementById('main'),
      el: '#app'
    }
  },
})

export default router
