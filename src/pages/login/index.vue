<template>
     <div class="login-container">
         <l-nav pageName="登录" :isShowBack="false"></l-nav>
         <div class="title-container">
             <div  class="title">Hi~~ 欢迎登陆e闲置</div>
         </div>
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

<style lang="scss" scoped>
.login-container{
    box-sizing: border-box;
.title-container{
       padding-top: 10% ;
        padding-left: 8% ;
       font-size: 0.4rem;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       .title{
           align-self: flex-start;
           color: #696363;
       }
   }
}
   
</style>