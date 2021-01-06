import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './plugins/font-size.js'
import router from './router/index.js'
import bus from '@/plugins/bus.js'
import  '@/plugins/interceptor.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'ant-design-vue/dist/antd.css';
import { Input , Button , Form } from 'ant-design-vue';
import md5 from 'js-md5';
Vue.config.productionTip = false
Vue.use(bus)
Vue.use(Mint)
Vue.use(Button);
Vue.use(Input);
Vue.use(Form)
Vue.prototype.$md5 = md5
new Vue({
  router ,
  render: h => h(App),
}).$mount('#app')
