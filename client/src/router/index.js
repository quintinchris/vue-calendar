import Vue from 'vue';
import Router from 'vue-router';
import CalendarWeek from '../components/CalendarWeek';
import CalendarEntry from '../components/CalendarEntry';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calendar',
      components: {
        default: CalendarWeek,
        entry: CalendarEntry,
      },
    },
  ],
});
