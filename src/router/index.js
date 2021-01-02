import Vue from "vue";
import Router from "vue-router";
import login from '@/pages/login/index.vue'
import main from '@/pages/index.vue'
import register from '@/pages/register/index.vue'
Vue.use(Router)




export default new Router({
    routes : [
        {
            path : "/",
            component : main
        },
        {
            path : "/login",
            name : 'login',
            component : login
        },
        {
            path : '/register',
            name : 'register',
            component : register
        }
    ]
})