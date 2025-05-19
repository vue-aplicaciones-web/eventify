import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import i18n from './i18n'
import router from "../router/index.js";

import {
    Avatar, Button, Card, Drawer, Image,
    InputText, Menu, Menubar, Select, SelectButton,
    Toolbar, Tooltip, DataTable, Column, Checkbox
} from 'primevue'



const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    },
})
    .component('pv-button', Button)
    .component('pv-input-text', InputText)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-drawer', Drawer)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-tooltip', Tooltip)
    .component('pv-image', Image)
    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-checkbox', Checkbox)
    .component('pv-select', Select)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .component('Button', Button)
    .use(i18n)
    .use(router)
    .mount('#app')


    // .component('pv-dialog', Dialog)
    // .component('pv-textarea', Textarea)
    // .component('pv-paginator', Paginator)
