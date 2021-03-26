import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePages/HomePage.vue';
import Admin from '@/views/AdminPages/Admin.vue';
import Eventos from '@/views/HomePages/Eventos.vue';
import Fotos from '@/views/HomePages/Fotos.vue';
import Videos from '@/views/HomePages/Videos.vue';
import Livros from '@/views/HomePages/Livros.vue';
import Contato from '@/views/HomePages/Contato.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      layout: 'home',
    },
  },
  {
    path: '/Eventos',
    name: 'Eventos',
    component: Eventos,
    meta: {
      layout: 'home',
    },
  },
  {
    path: '/fotos',
    name: 'Fotos',
    component: Fotos,
    meta: {
      layout: 'home',
    },
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
    meta: {
      layout: 'home',
    },
  },
  {
    path: '/livros',
    name: 'Livros',
    component: Livros,
    meta: {
      layout: 'home',
    },
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos,
    meta: {
      layout: 'home',
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      layout: 'admin',
    },
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
