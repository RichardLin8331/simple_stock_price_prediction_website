import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggined_in: false,
    username: "",
    accesstoken: "",
    profile_picture: "",
    favorite_list: [],


  
  },
  getters: {
    get_login(state) {
      return state.loggined_in
    },
    get_username (state) {
      return state.username
    },
    get_accesstoken(state) {
      return state.accesstoken
    },
    get_profile_picture(state) {
      return state.profile_picture
    },
    get_favorite_list(state) {
      return state.favorite_list
    },
    get_stock_in_favorite: (state) =>(stocknum) => {
      return state.favorite_list.indexOf(stocknum)
    },
  },
  mutations: {
    login_mut(state, payload) {
      state.loggined_in = payload.ulog
      state.username = payload.uname
      state.profile_picture = payload.profile_picture
      state.accesstoken = payload.accesstoken
      state.favorite_list = payload.favorite_list
      console.log(state.loggined_in)
    },
    accesstoken_mut (state, newaccesstoken) {
      state.accesstoken = newaccesstoken
    },
    addfavorite_mut (state, stocknum) {
      state.favorite_list.push(stocknum)
    },
    deletefavorite_mut (state, stocknum) {
      state.favorite_list.splice(state.favorite_list.indexOf(stocknum), 1)
    },
  },
  actions: {
    login_act (context, payload) {
      console.log(payload.ulog)
      context.commit("login_mut", payload)
    },
    accesstoken_act (context, newaccesstoken) {
      context.commit("accesstoken_mut", newaccesstoken)
    },
    reset_act (context) {
      var payload = {'uname': "", 'ulog': false, "profile_picture": ""}
      context.commit("login_mut", payload)
      context.commit("accesstoken_mut", "")
    }, 
    addfavorite_act (context, stocknum) {
      context.commit("addfavorite_mut", stocknum)
    },
    deletefavorite_act (context, stocknum) {
      context.commit("deletefavorite_mut", stocknum)
    },
  },
  modules: {
  },
  plugins: [
      createPersistedState({       
        storage: window.sessionStorage   
    })
  ]
})
