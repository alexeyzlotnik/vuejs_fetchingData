// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.js"


import {
    createApp
} from 'vue'
import App from './App.vue';
import router from './router/index.js';
import {
    createPinia
} from "pinia";

import './assets/main.css'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')