import Vue from "vue";
import Router from "vue-router";
import layout from "./views/layout.vue"
import home from "./views/home/home.vue"
import company from "./views/general/general.vue"
import news from "./views/news/news.vue"
import detail from "./views/detail/detail.vue"
import search from "./views/search/search.vue"
import test from "./views/testt/testt.vue"
import login from "./views/login/login.vue"

Vue.use(Router)

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}/${view}.vue`)
}

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: '/home',
            component: layout,
            children: [
                {
                    path:'/home',
                    name: 'home',
                    component: loadView('home')
                    // component: home
                },
                {
                    path:'/company',
                    name: 'company',
                    component: loadView('general')
                    // component: company
                },
                {
                    path:'/news',
                    name: 'news',
                    // component: loadView('news')
                    component: news
                },
                {
                    path:'/detail',
                    name: 'detail',
                    // component: loadView('detail')
                    component: detail
                },
                {
                    path:'/search',
                    name: 'search',
                    // component: loadView('search')
                    component: search
                },
                {
                    path:'/test',
                    name: 'test',
                    // component: loadView('test')
                    component: test
                },
            ]
        },
        {
            path:'/login',
            name: 'login',
            // component: loadView('login')
            component: login
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