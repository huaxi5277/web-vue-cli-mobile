<template>
     <div>
         <l-nav pageName="登录" :isShowBack="false"></l-nav>
         <l-form></l-form> 
     </div>
</template>

<script>
import navtationBar from '@/components/navgation.vue'
import form from '@/components/form'
export default {
    name : "login",
    data(){
        return {

        }
    },
    components : {
        'l-nav' : navtationBar,
        'l-form' : form
    }
}
</script>

<style>

</style>