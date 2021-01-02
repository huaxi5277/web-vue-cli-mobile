import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './plugins/font-size.js'
import router from './router/index.js'
import bus from '@/plugins/bus.js'
Vue.config.productionTip = false
Vue.use(bus)
new Vue({
  router ,
  render: h => h(App),
}).$mount('#app')
