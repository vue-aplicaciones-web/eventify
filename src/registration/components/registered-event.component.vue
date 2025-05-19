<script>
import {EventService} from "../services/event.service.js";
import {AttendeeService} from "../services/attendee.service.js";
import EventSummaryComponent from "./event-summary.component.vue";

export default {
  name: "registered-event-component",
  components: {
    EventSummaryComponent
  },
  data() {
    return {
      events: [],
      attendees: [],
      error: null
    }
  },
  created() {
    const eventService = new EventService()
    const attendeeService = new AttendeeService()

    eventService.getAll()
        .then(res => {this.events = res.data})
        .catch(() => {this.error = "Error loading events"})
    attendeeService.getAll()
        .then(res => {this.attendees = res.data})
        .catch(() => {this.error = "Error loading attendees"})
  }
}
</script>

<template>
  <div aria-label = "Registered Events">
    <h1>Registered Events</h1>
    <p v-if="error">{{ error }}</p>
    <div v-if="attendees.length && events.length" v-for="event in events" :key="event.id" >
      <event-summary-component :event="event" :attendees="attendees"/>
    </div>
  </div>
</template>

<style scoped>

</style>