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
        name: 'home',
        component: HomeComponent,
    },
    {
        path: '/registration/event-check-ins/new',
        name: 'event-check-in',
        component: EventCheckInComponent
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: notFoundComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router