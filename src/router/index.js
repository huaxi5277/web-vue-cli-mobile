import Vue from "vue";
import Router from "vue-router";
import personal from '../pages/personal/index.vue'

Vue.use(Router)




export default new Router({
    routes : [
        {
            path : "/",
            name : 'personal',
            component : personal
        }
    ]
})