import 'font-awesome/css/font-awesome.css';
import { createApp, defineComponent } from 'vue';
import App from './App.vue';
import AdminLayout from './layouts/AdminLayout.vue';
import HomeLayout from './layouts/HomeLayout.vue';

import router from './router';
import store from './store';

defineComponent('HomeLayout', HomeLayout);
defineComponent('AdminLayout', AdminLayout);

createApp(App).use(store).use(router).mount('#app');
