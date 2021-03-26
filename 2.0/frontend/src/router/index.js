import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePages/HomePage.vue';
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
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: Eventos,
  },
  {
    path: '/fotos',
    name: 'Fotos',
    component: Fotos,
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos,
  },
  {
    path: '/Livros',
    name: 'Livros',
    component: Livros,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
