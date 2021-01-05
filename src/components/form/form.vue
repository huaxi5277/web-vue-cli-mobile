<template>
   <div>
       <slot></slot>
   </div>
</template>

<script>
export default {
    name : 'form',
    provide(){
        return {
            form : this
        }
    },
    props :{
        model :{
            type : Object ,
            required : true
        },
        rules : {
            type : Object
        }
    },
    methods : {
        validateForm(cb) {
         const task = this.$children.filter(item => item.prop).map(item=>item.validateFormItem()) 
         Promise.all(task).then(()=>{
           cb(true)
         }).catch(()=>{
             cb(false)
         })
        }
    }
}
</script>

<style>

</style>