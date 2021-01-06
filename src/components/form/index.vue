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
                <l-input type="password" v-model="model.password"></l-input>
            </l-form-item>
             <l-form-item>
                <l-button ></l-button>
            </l-form-item>
        </l-form>
     <div class="bottom-container" v-if="flag == 'login'">
         <a class="a-style" @click="goRegister">注册账号</a>
         <span> | </span>
          <a  class="a-style" @click="goQuestion">遇到问题</a>
     </div>
    </div>
   </div>
</template>

<script>
import form from '@/components/form/form.vue'
import formItem from '@/components/form/form-item.vue'
import input from '@/components/form/input.vue'
import button from '@/components/form/button.vue'
import {Toast} from 'mint-ui'
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
               username : [{required : true , message : "用户名必填!" , tigger : 'blur'} ,],
               email : [{required : true , message : "邮箱必填!" , tigger : 'blur'} ,  { type: 'email', message: '邮箱格式不正确!', trigger: 'blur' }],  // { type: 'email', message: '邮箱格式不正确!', trigger: 'blur' }
               password : [{required : true , message : "密码必填!" , tigger : 'blur'} ,  { min : 6, max : 8, message: `长度在6~8个字符`, trigger: 'blur' } ]  // { min : 6, max : 8, message: `长度在6~8个字符`, trigger: 'blur' }
           }
        }
    },
    props : {
     flag : {
         type : String,
         default : ''
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
        goRegister(e){
         e.preventDefault()
         this.$router.push({
             name : 'register',
             params : {
                routerType: 'push',   
             }
         })
        },
        goQuestion(){
             this.$router.push({
             name : 'question',
             params : {
                routerType: 'push',   
             }
         })
        },
         octopus(type){
             if(type == 'register') {
                  this.register()
             } else if(type == 'login') {
                 this.login()
             }
        },
        submit(){
  
            this.$nextTick(()=>{
                if(this.$refs.form) {
                      this.$refs.form.validateForm(isValid =>{
                if(isValid) {
                    this.octopus(this.flag)
                }
            })
                }
              
            })
        },
        register(){
            this.$axios.post('api/idle/register' , this.model).then((ret)=>{ 
                             Toast({
                              message: ret.data.message,
                              position: 'middle',
                              duration: 1000
                            });
                        if(ret.data.code == 200 ) {
                             this.$router.push('/login')
                        }  
                       
                    })
        },
        login(){
            this.$axios.post('api/idle/login' , this.model).then((ret)=>{
                 Toast({
                              message: ret.data.message,
                              position: 'middle',
                              duration: 1000
                            });
                        if(ret.data.code == 404 ) {
                            this.$router.push('/register')
                        } else if (ret.data.code == 400 ) {
                            this.model = {
                                username : "",
                                password : "",
                                email : ""
                            }
                        } else {
                            localStorage.setItem("token"  , ret.data.token )
                            localStorage.setItem("id"  , ret.data.id )
                            this.$router.push('/')
                        }
                    })
        }
    },

}
</script>

<style lang="scss" scoped>
/deep/ .mint-indicator {
    &-wrapper {
        z-index: 9999999;
    }
}
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
         color: #3cfeff;
     }
     }
 }
}

</style>