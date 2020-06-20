<template>
  <div id="app">
    <div id='calendarEntry'></div>
    <router-view/>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';

export default {
  name: 'App',
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
