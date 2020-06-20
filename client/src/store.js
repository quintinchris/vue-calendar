/* eslint-disable */
import { seedData } from './seed';

export const store = {
  state: {
    seedData,
  },
  getActiveDay() {
    return this.state.seedData.find((day) => day.active);
  },
  setActiveDay() {
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayID ? dayObj.active = true : dayObj.active = false;
    });
  },
  getEventObj (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayID);
    return dayObj.events.find(event => event.details === eventDetails);
  },
};
