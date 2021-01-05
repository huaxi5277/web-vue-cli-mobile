<template>
     <div>
         <l-nav pageName="登录" :isShowBack="false"></l-nav>
         <l-form :flag="flag"></l-form> 
     </div>
</template>

<script>
import navtationBar from '@/components/navgation.vue'
import form from '@/components/form'
export default {
    name : "login",
    data(){
        return {
         flag : 'login'
        }
    },
    components : {
        'l-nav' : navtationBar,
        'l-form' : form
    },
    mounted(){
    }
}
</script>

<style>

</style>