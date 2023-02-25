import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'

import VueRouter from 'vue-router';
    
Vue.use(VueRouter);
 
Vue.config.productionTip = false

new Vue({
  el: "#app",
  router: router,
  render: h => h(App),
})




