import Vue from 'vue';
import Router from 'vue-router';
import CalendarWeek from '../components/CalendarWeek';
import CalendarEntry from '../components/CalendarEntry';
import Navbar from '../components/Navbar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calendar',
      components: {
        default: CalendarWeek,
        nav: Navbar,
        entry: CalendarEntry,
      },
    },
  ],
});
