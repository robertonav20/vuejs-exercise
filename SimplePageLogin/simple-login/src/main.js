import Vue from 'vue'
import App from './App.vue'
import {router} from './_router/Router'
import {store} from './_store/Store'
//import { LoginServices } from './_services';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

Vue.config.productionTip = false

let app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
