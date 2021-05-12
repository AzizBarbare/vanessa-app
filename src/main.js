import Vue from 'vue'
import App from './App.vue'
import router from "./router.js";

Vue.config.productionTip = false

import '@/assets/main.css';

//Bootstrap v5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//Fontawesome
import "font-awesome/css/font-awesome.min.css";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
