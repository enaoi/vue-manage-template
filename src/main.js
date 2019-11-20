import 'babel-polyfill'
import promise from 'es6-promise'

import Vue from 'vue'
import App from './App.vue'
import { Input } from 'element-ui'
import router from '@/router'
import store from '@/store'
import "./icons";


promise.polyfill()
// 全局配置
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 9999 };
Vue.use(Input);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
