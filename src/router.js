import Vue from "vue";
import Router from "vue-router";
// import layout from "./views/layout.vue"
// import home from "./views/home/home.vue"
// import company from "./views/general/general.vue"
// import news from "./views/news/news.vue"
// import detail from "./views/detail/detail.vue"
// import search from "./views/search/search.vue"
// import test from "./views/testt/testt.vue"
// import login from "./views/login/login.vue"

Vue.use(Router)

// 路由懒加载
// function loadView(view) {
//     return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}/${view}.vue`)
// }

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: '/home',
            component: resolve=>(require(["./views/layout.vue"], resolve)),
            children: [
                {
                    path:'/home',
                    name: 'home',
                    // component: loadView('home'),
                    // component: home
                    component: resolve=>(require(["./views/home/home.vue"], resolve))
                },
                {
                    path:'/company',
                    name: 'company',
                    // component: loadView('general'),
                    // component: company
                    component: resolve=>(require(["./views/general/general.vue"], resolve))
                },
                {
                    path:'/news',
                    name: 'news',
                    // component: loadView('news'),
                    // component: news
                    component: resolve=>(require(["./views/news/news.vue"], resolve))
                },
                {
                    path:'/detail',
                    name: 'detail',
                    // component: loadView('detail'),
                    // component: detail
                    component: resolve=>(require(["./views/detail/detail.vue"], resolve))
                },
                {
                    path:'/search',
                    name: 'search',
                    // component: loadView('search'),
                    // component: search
                    component: resolve=>(require(["./views/search/search.vue"], resolve))
                },
                {
                    path:'/test',
                    name: 'test',
                    // component: loadView('test'),
                    // component: test
                    component: resolve=>(require(["./views/testt/testt.vue"], resolve))
                },
            ]
        },
        {
            path:'/login',
            name: 'login',
            // component: loadView('login'),
            // component: login
            component: resolve=>(require(["./views/login/login.vue"], resolve))
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