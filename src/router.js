import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

const router = new Router({
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
                    path:'/company',
                    name: 'company',
                    component: () => import('./views/general/general.vue')
                },
                {
                    path:'/news',
                    name: 'news',
                    component: () => import('./views/news/news.vue')
                },
                {
                    path:'/detail',
                    name: 'detail',
                    component: () => import('./views/detail/detail.vue')
                },
                {
                    path:'/search',
                    name: 'search',
                    component: () => import('./views/search/search.vue')
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

// 路由守卫
// router.beforeEach((to, from, next) => {
//   // 判断是否存在 sv_login 这是在登录后产生的
//   const hasCompanyName = this.$store.state.company_name
//   if (to.path == '/home') {
//     next();
//   } else {
//     // 是否在登录状态下
//     hasCompanyName ? next() : next('/home');
//   }
// });

export default router;