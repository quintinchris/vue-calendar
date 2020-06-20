<template>
  <div id='calendarWeek' class='container'>
    <div class='columns is-mobile'>
      <CalendarDay v-for="day in sharedState.seedData"
      :key="day.id" :day="day"/>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
import CalendarDay from './CalendarDay';

export default {
  name: 'CalendarWeek',
  data() {
    return {
      sharedState: store.state,
    };
  },
  components: {
    CalendarDay,
  },
};
</script>

<style scoped>

#calendarWeek {
  margin-bottom: 5vh;
}

.column {
  padding: 0;
}

</style>
