// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import storeObj from './vuex/index.js'
import router from './router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(iView);

import vueTap from 'v-tap';
Vue.use(vueTap);

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  store: new Vuex.Store(storeObj),
  components: { App },
  template: '<App/>'
})
