// router.js

import VueRouter from 'vue-router'
import login from './components/login.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: login }
    ]
});

export default router;