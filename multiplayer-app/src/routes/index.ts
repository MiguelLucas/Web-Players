import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import Videojs from '@/components/Videojs.vue';
import ROUTES from '@/routes/routes'

const routes = [
  {
    path: ROUTES.Home.path,
    name: ROUTES.Home.name,
    component: HomePage
  },
  {
    path: ROUTES.Videojs.path,
    name: ROUTES.Videojs.name,
    component: Videojs,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;