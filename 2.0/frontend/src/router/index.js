import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Admin from '@/views/Admin.vue';
import Videos from '@/views/Videos.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
