import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global from './Global'

Vue.prototype.global = global

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
