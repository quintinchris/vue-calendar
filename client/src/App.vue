<template>
  <div id="app">
    <div id='calendarEntry'></div>
    <router-view/>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import CalendarWeek from './components/CalendarWeek';
import CalendarEntry from './components/CalendarEntry';
import CalendarDay from './components/CalendarDay';
import CalendarEvent from './components/CalendarEvent';

export default {
  name: 'App',
  components: {
    CalendarWeek,
    CalendarEntry,
    CalendarDay,
    CalendarEvent,
  },
};
</script>

<style>
html, body {
  height: 100%;
  overflow-x: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
