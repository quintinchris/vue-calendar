import Vue from 'vue';
import Router from 'vue-router';
import CalendarWeek from '../components/CalendarWeek';
import CalendarEvent from '../components/CalendarEvent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: CalendarWeek,
      CalendarEvent,
    },
  ],
});
