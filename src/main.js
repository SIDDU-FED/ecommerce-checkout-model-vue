// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
require('./assets/css/main.css');
Vue.config.productionTip = false

const authData = localStorage.getItem("auth");

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: function () {
    return {
        auth: authData ? JSON.parse(authData) : {}
    }
  },
  router,
   store,
  components: { App },
  template: '<App/>'
})
