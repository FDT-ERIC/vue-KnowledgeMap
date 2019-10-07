import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from "./router.js";
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.prototype.$axios = axios; // 可以全局使用它进行接口调用

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
