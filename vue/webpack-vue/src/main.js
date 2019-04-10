// main.js


// import Vue from '../node_modules/vue/dist/vue.js';
// 常规写法 ↑	优雅写法↓
import Vue from 'vue';

var login = {
    template: '<h1>这是一个h1组件</h1>'
}

var vm = new Vue({
    el: '#app',
    data: {
        msg: 'ok'
    },
    components: {
        login
    }
});