<template>
    <div class="input-container">
        <input :type="type" :value="value" @input="onInput"/>
    </div>
</template>

<script>
import emmiter from '@/plugins/emmiter.js'
export default {
    name : 'input-form',
    data(){
        return {}
    },
    model :{
    prop : 'value',
    event : 'input'
    },
    mixins : [emmiter],
    props : {
        type : {
            type : String,
            default : 'text'
        },
        value : {
            type :String,
            default : ""
        },
    },
    methods : {
        onInput(e){
            this.$emit('input' , e.target.value)
            this.dispatch('validate')
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
.input-container{
    width: 100%;
    height: 1.2rem;
     input {
       padding: 0.05rem;
       width: 100%;
       height: 0.5rem;
       font-size: 0.3rem ;
       border: none;
       border-bottom: 1px solid #d6c9c9 ;
       outline: none;
   }
}
</style>