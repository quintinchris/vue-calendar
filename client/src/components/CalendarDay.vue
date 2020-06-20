<!-- eslint-disable linebreak-style -->
<template>
    <div class='day column' @click='setActiveDay(day.id)'>
        <div class='day-banner has-text-centered'> {{day.abv}} </div>
        <div class='day-details'>
            <div class="day-number"> {{day.id}} </div>
            <CalendarEvent v-for="(event, index) in day.events"
            :key="index" :event="event" :day="day" />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { store } from '../store';
import CalendarEvent from './CalendarEvent';

export default {
  name: 'CalendarDay',
  props: ['day'],
  methods: {
    setActiveDay(dayID) {
      store.setActiveDay(dayID);
    },
  },
  components: {
    CalendarEvent,
  },
};
</script>

<style>
.day {
    background-color: #4A4A4A;
    color: #FFF;
    border-left: 1px solid #8F8F8F;
    font-size: 12px;
}

.day:hover {
    background-color: #292929;
    cursor: pointer;
}

.day-banner {
    background-color: #333333;
    color: #FFF;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
}

.day-details {
    padding: 10px;
}

</style>
