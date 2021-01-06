<template>
     <div>
         <l-nav pageName="问题" :isShowBack="true" @goBack="goBack"></l-nav>
       
     </div>
</template>

<script>
import navtationBar from '@/components/navgation.vue'
export default {
    name : "question",
    data(){
        return {
        }
    },
    components : {
        'l-nav' : navtationBar,
    },
    mounted(){
    },
    methods :{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>