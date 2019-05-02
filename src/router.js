import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'blogHome', component: () => import('@/views/Blog-Home.vue')},
    {path: '/addBlog', name: 'addBlog', component: () => import('@/components/Blog-Add.vue')},
    {path: '/blogContent/:id',name: 'blogContent', component: () => import('@/components/BlogContent.vue')}
  ]
})
