<template>
  <div class="not-found-container flex flex-column align-items-center justify-content-center text-center">
    <h1>404 - Page Not Found</h1>
    <p>The route "<strong>{{ route.path }}</strong>" does not exist.</p>
    <Button label="Go to Home" icon="pi pi-home" @click="goHome" class="mt-3" />
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import Button from 'primevue/button';

export default {
  name: 'not-found.component',
  components: {
    Button
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const goHome = () => {
      router.push({ name: 'home' }); // Asegúrate de que la ruta 'home' esté registrada con ese name
    };

    return {
      route,
      goHome
    };
  }
};
</script>

<style scoped>
.not-found-container {
  height: 100vh;
  padding: 2rem;
  background-color: #fdfdfd;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #c0392b;
}

p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #555;
}
</style>
