<template>
    <div>
        <div v-if="label" class="title" >{{label}}</div>
        <slot></slot>
        <p v-if="errorMessage" class="error-msg">{{errorMessage}}</p>
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    name : 'form-item',
    props : {
     label : {
         type : String,
         default : ''
     },
     prop : {
        type : String,
        default : ''
     }
    },
    inject : ['form'],
    data(){
        return {
            errorMessage : ""
        }
    },
    methods : {
        validateFormItem(){
          const rules = this.form.rules[this.prop]
          const value = this.form.model[this.prop]
          // 校验
          const desc = {
              [this.prop] : rules
          }
          const schema = new Schema(desc) 
          return schema.validate({[this.prop] : value} , errors =>{
              if(errors){
                  this.errorMessage = errors[0].message 
              } else {
                  this.errorMessage = ''
              }
          })
        }
    },
    mounted(){
        console.log(this.label)
        this.$on('validate' , ()=>{
            this.validateFormItem()
        })
    }
}
</script>

<style lang="scss" scoped>
  .title {
      font-size: 0.35rem ;
      color: #968e88;
  }
  .error-msg{
      font-size: 0.3rem;
      margin-top: -0.3rem ;
      color: red;
  }

</style>