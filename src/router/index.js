import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/Hello';
import Statistic from '../components/statistic';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
        path: '/statistic',
        name: 'statistic',
        component: Statistic,
    },
  ],
});
