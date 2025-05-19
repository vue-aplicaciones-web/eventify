<script>
import ToolbarComponent from "../../shared/components/toolbar.component.vue";
import EventSummary from "../../registration/components/event-summary.component.vue";
import RegisteredEventComponent from "../../registration/components/registered-event.component.vue";

export default {
  name: "home-component",
  components: {RegisteredEventComponent, EventSummary, ToolbarComponent}
}
</script>

<template>
  <h1>Home</h1>
  <p>Welcome to Eventify</p>
  <registered-event-component/>
</template>

<style scoped>

</style>