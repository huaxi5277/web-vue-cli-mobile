import Vue from "vue";
import Router from "vue-router";
import login from '@/pages/login/index.vue'
import main from '@/pages/index.vue'
import register from '@/pages/register/index.vue'
import question from '@/pages/personal/question.vue'
Vue.use(Router)




export default new Router({
    routes : [
        {
            path : "/",
            name : 'main',
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
        },
        {
            path : '/question',
            name : 'question',
            component : question
        }
    ]
})