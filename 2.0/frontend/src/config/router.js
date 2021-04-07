import Vue from 'vue'
import VueRouter from 'vue-router'

import Admin from '../components/admin/Admin.vue';
import Events from '../components/admin/Events.vue';
import Others from '../components/admin/Others.vue';

Vue.use(VueRouter)

const routes = [
  {
    name: 'admin',
    path: '/',
    component: Admin
  }, 
  {
    name: 'adminEvents',
    path: '/admin/eventos',
    component: Events
  },
  {
    name: 'others',
    path: '/admin/outros',
    component: Others
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router