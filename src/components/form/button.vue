<template>
    <div class="btn-group" @click="submit">
        <div class="btn-group-item">提交</div>
    </div>
</template>

<script>
export default {
   name :'button-group',
   data(){
       return{}
   },
   methods :{
       submit(){
           this.$bus.$emit('submit')
       }
   }
}
</script>

<style lang="scss" scoped> 
  .btn-group {
      width: 100%;
      height: 0.6rem;
      border-radius:  0.1rem;
      background-color: #3cfeff;
      display: flex;
      justify-content: center;
      align-items: center;
   .btn-group-item{
      color: white;
      font-size: 0.4rem ;
   }
  }
</style>