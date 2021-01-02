<template>
   <div class="form-box">
        <div class="form-container">
        <l-form :rules="rules" :model="model" ref="form">
            <l-form-item label="用户名：" prop="username">
                <l-input  v-model="model.username"></l-input>
            </l-form-item>
             <l-form-item label="邮箱：" prop="email">
                <l-input  v-model="model.email"></l-input>
            </l-form-item>
             <l-form-item label="密码：" prop="password">
                <l-input type="password"></l-input>
            </l-form-item>
             <l-form-item>
                <l-button  v-model="model.password"></l-button>
            </l-form-item>
        </l-form>
     <div class="bottom-container">
         <router-link to="/register" class="a-style">注册账号</router-link>
         <span> | </span>
          <router-link to="/question" class="a-style">遇到问题</router-link>
     </div>
    </div>
   </div>
</template>

<script>
import form from '@/components/form/form.vue'
import formItem from '@/components/form/form-item.vue'
import input from '@/components/form/input.vue'
import button from '@/components/form/button.vue'
export default {
    name : 'form-root',
    data(){
        return {
           model :{
            username : "",
            email : "",
            password : ""
           },
           rules : {
               username : [{required : true , message : "用户名必填!"}],
               email : [{required : true , message : "邮箱必填!"}],
               password : [{required : true , message : "密码必填!"}]
           }
        }
    },
    components :{
        'l-form' : form,
        'l-form-item' : formItem,
        'l-input' : input,
        'l-button' : button
    },
    mounted(){
        this.$bus.$on('submit' , ()=>{
            this.submit()
        })
    },
    methods :{
        submit(){
            this.$refs.form.validate(isValid =>{
                if(isValid) {
                    alert('登录成功')
                } else {
                    alert('登录失败')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.form-box{
     .form-container{
     width: 100%;
     height: 94.4vh;
     padding: 0.5rem;
     box-sizing: border-box;
     overflow: hidden;
     .bottom-container{
         position: fixed;
         bottom: 10%;
         left: 30%;
          span {
         color: #948871;
         font-size: 0.3rem ;
     }
     .a-style{
         font-size: 0.3rem ;
         text-decoration: none;
         color: #16d2bd70;
     }
     }
 }
}

</style>