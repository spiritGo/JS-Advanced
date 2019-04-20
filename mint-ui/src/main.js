// main.js
import Vue from 'vue';
import app from './app.vue';
import router from './router.js';
import VueRouter from 'vue-router';
import { Button } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(VueRouter);

Vue.component(Button.name, Button);

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
});