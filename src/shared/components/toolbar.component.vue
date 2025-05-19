<template>
  <div class="card">
    <pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
      <template #start>
        <img :src="logoUrl" class="logo" alt="logo">
        <h2 aria-label="Application title">ISO 27001:2022 certified</h2>
      </template>

      <template #center>
        <ul class="nav-list">
          <li v-for="option in navOptions" :key="option.label" style="">
            <RouterLink :to="option.route" class="nav-item">
              <span class="nav-label">{{ option.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </template>

      <template #end>
        <LanguageSwitcher/>
      </template>
    </pv-toolbar>
  </div>
</template>

<script>
import LanguageSwitcher from "./language-switcher.component.vue";
import { RouterLink } from 'vue-router'
import {LogoApiService} from "../services/logo-api.service.js";

const routeEventify = "https://google.com/";

export default {
  name: "toolbar-component",
  components: {
    LanguageSwitcher,
    RouterLink,
    LogoApiService
  },
  data() {
    return {
      logoUrl: '',
      navOptions: [
        { label: 'Home', route: '/home' },
        { label: 'Check-In', route: '/registration/event-check-ins/new' },
      ]
    }
  },
  mounted() {
    const logoApiService = new LogoApiService();
    this.logoUrl = logoApiService.getUrlToLogo(routeEventify)
  }
}
</script>

<style scoped>
.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
}
</style>