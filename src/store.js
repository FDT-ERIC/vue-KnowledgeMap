import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// types
// const types = {
//   SET_LOCATION: "SET_LOCATION",
//   SET_ADDRESS: "SET_ADDRESS"
// }

//state
const state = {
  company_name: "", //公司名称
  news: Object, //存放新闻信息
}

// getters
const getters = {

}

// mutations
const mutations = {

}

// actions
const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
