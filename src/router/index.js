import {
    createRouter,
    createWebHistory
} from 'vue-router';

import Home from '../views/Home.vue';
import Trello from '../views/Trello.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: "Home",
            component: Home,
        },
        {
            path: '/trello',
            name: "Trello",
            component: Trello,
        }
    ]
})