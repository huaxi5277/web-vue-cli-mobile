<template>
     <div>
         <l-nav pageName="注册" :isShowBack="true"></l-nav>
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
          flag : 'register'
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