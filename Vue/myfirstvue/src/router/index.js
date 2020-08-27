import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import HeadNav from '../views/HeadNav.vue';
import News from '../views/News';
// import Movie from '../views/Movie';
// import Music from '../views/Music';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'Layout',
    // component: () => import('@/views/Layout'),
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/news',
        // name: 'Home',
        // component: Home,
      },
      {
        path: '/news',
        name: 'News',
        component: News,
      },
      {
        path: '/movie',
        name: 'movie',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Movie.vue'),
      },
      {
        path: '/music',
        name: 'music',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Music.vue'),
      },
      {
        path: '/jokes',
        name: 'jokes',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Jokes.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
