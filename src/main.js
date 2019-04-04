import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Qs from 'qs'
import axios from 'axios'
/* 改写原型链 */
Vue.prototype.axios = axios
/* 响应超时时间 */
axios.defaults.timeout = 5000
 /* 配置请求头 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
/* 设置基本请求路径 */
axios.defaults.baseURL = 'http://127.0.0.1:3000/' 
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 使用qs对参数进行处理
  config.data = Qs.stringify(config.data) 
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
