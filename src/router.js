import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: '/home',
            component: () => import('./views/layout.vue'),
            children: [
                {
                    path:'/home',
                    name: 'home',
                    component: () => import('./views/home/home.vue')
                },
                {
                    path:'/general',
                    name: 'general',
                    component: () => import('./views/general/general.vue')
                },
                {
                    path:'/detail',
                    name: 'detail',
                    component: () => import('./views/detail/detail.vue')
                },
            ]
        },
        {
            path:'/login',
            name: 'login',
            component: () => import('./views/login/login.vue')
        }
    ]
})