import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "../src/public/pages/home.component.vue";
import EventCheckInComponent from "../src/registration/pages/event-check-in.component.vue";
import notFoundComponent from "../src/public/pages/not-found.component.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/home',
        component: HomeComponent,
    },
    {
        path: '/registration/event-check-ins/new',
        component: EventCheckInComponent
    },
    {
      path: "/**",
      component: notFoundComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router