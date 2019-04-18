import App from "./App.vue";
import User from "./components/user/User.vue";
import UserEdit from "./components/user/UserEdit.vue";
import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/UserDetail.vue";

export const routes = [
  { path: "/user", component: User, name: "user"},
  { path: "/userEdit", component: UserEdit, name: "userEdit" },
  { path: "/userStart", component: UserStart, name: "userStart" },
  { path: "/userDetail", component: UserDetail, name: "userDetail" },
  { path: '*', redirect: '/user'}
];
