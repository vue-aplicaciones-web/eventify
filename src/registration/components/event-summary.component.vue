<script>

export default {
  name: 'EventSummary',
  props: {
    event: {
      type: Object,
      required: true
    },
    attendees: {
      type: Array,
      required: true
    }
  },
  computed: {
    registeredAttendees() {
      return this.attendees.filter(a => a.eventId === this.event.id);
    },
    registeredCount() {
      return this.registeredAttendees.length;
    },
    attendancePercentage() {
      const total = this.registeredAttendees.length;
      if (total === 0) return 0;
      const checkedIn = this.registeredAttendees.filter(a => !!a.checkedInAt).length;
      return Math.round((checkedIn / total) * 100);
    }
  }
}
</script>
<template>
  <template>
    <pv-card class="event-card w-full">
      <template #header>
        <div class="card-header">
          {{ event.name }}
        </div>
      </template>

      <template #content>
        <div class="event-description">
          {{ event.description }}
        </div>
      </template>

      <template #footer>
        <div class="footer-content flex justify-content-between align-items-center px-3 py-2">
          <pv-tag severity="info">
            $t()Registered Attendees: {{ registeredCount }}
          </pv-tag>
          <pv-tag severity="success">
            Attendance: {{ attendancePercentage }}%
          </pv-tag>
        </div>
      </template>
    </pv-card>
  </template>
</template>

<style scoped>
.event-card {
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.card-header {
  font-weight: bold;
  font-size: 1.25rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.event-description {
  padding: 1rem;
  font-size: 1rem;
  color: #444;
}

.footer-content {
  border-top: 1px solid #eee;
}
</style>