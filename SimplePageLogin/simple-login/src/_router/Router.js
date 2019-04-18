import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import AdminPage from "../components/AdminPage.vue";
import NotFound from "../components/NotFound.vue";
import { store } from "../_store/Store";
import { LoginServices } from "../_services/LoginServices";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {path: "/NotFound", component: NotFound, name: "NotFound"},
    {path: "/AdminPage", component: AdminPage, name: "AdminPage"},
    {path: "/Login", component: Login, name: "Login"},
    { path: "/", redirect: "/Login" }
  ]
});

router.beforeEach((to, from, next) => {
  let logged = localStorage.getItem("logged");
  let user = localStorage.getItem("user");
  let pwd = localStorage.getItem("pwd");
  let response = "";

  if (to.path === "/Login") next();

  if (to.path === "/NotFound") next();

  if (to.path === "/AdminPage" && logged === "true") next();

  if (to.path === "/AdminPage" && logged === "false") next("/Login");

  if (from.path === "/Login" && to.path === "/AdminPage"){
    response = LoginServices.checkLogin(user, pwd);
    if (response === 'OK') {
      store.dispatch("login",true);
      next();
    }
    else{
      next("/Login");
    }
  }

});
