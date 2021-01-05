import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './plugins/font-size.js'
import router from './router/index.js'
import bus from '@/plugins/bus.js'
import  '@/plugins/interceptor.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(bus)
Vue.use(Mint)
new Vue({
  router ,
  render: h => h(App),
}).$mount('#app')
