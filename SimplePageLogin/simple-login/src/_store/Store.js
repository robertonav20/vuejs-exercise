import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      token: "fake_token",
      user: "",
      pwd: "",
      loggedIn: false
    },
    mutations: {
      UPDATE_USER(state, val) {
        state.user = val;
        localStorage.setItem('user', val);
      },
      UPDATE_PWD(state, val) {
        state.pwd = val;
        localStorage.setItem('pwd', val);
      },
      UPDATE_LOGGED(state, val) {
        state.loggedIn = val;
        localStorage.setItem('logged', val);
      }
    },
    actions: {
      UPDATE_USER: (context, val) => {
        // Add this:
        context.commit("UPDATE_USER", val);
      },
      UPDATE_PWD: (context, val) => {
        // Add this:
        context.commit("UPDATE_PWD", val);
      },
      login: (context, user, pwd) => {
        context.commit("UPDATE_LOGGED",true);
      },
      logout:
        (context) => {
          context.commit("UPDATE_LOGGED", false);
        }
    },
    getters: {
      LOGGED: 
        state => {
        return state.loggedIn;
      },
      USER:
        state => {
          return state.user;
        },
      PWD:
        state => {
          return state.pwd;
        },
      TOKEN:
        state => {
          return state.token;
        }
    }
  })
;
