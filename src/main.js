import Vue from 'vue'
import App from './App'
import router from './router'
// 请求数据插件 axios
import axios from 'axios'
// 工具方法、api配置
import api from './assets/api/api.js'
import utils from './assets/utils/utils.js'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$utils = utils;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
