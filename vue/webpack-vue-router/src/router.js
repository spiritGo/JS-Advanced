import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'
import VueRouter from 'vue-router'

// 创建路由对象
var router = new VueRouter({
    routes: [{
            path: '/account',
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        },
        { path: '/goodslist', component: goodslist }
    ]
});

export default router;