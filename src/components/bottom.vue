<template>
    <div class="bottom-bar">
        <div v-for="(item , index) in bottomBarList" :key="item.value"  class="bottom-bar-item" @click="changeBar(index)">
              <div class="bottom-bar-item-img-box">
                <img class="bottom-bar-item-img-box-item flex-style" :src="[index == selectIndex ? item.iconSelected : item.icon ]" alt="">
              </div>
              <div :class="['bottom-bar-item-value-box flex-style' , {active : index == selectIndex}]">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
import {bottomBarList} from './config/index'
export default {
   name : 'bottom-bar',
   data(){
     return {
       bottomBarList,
       selectIndex : 0
     }
   },
   methods : {
     changeBar(index){
       this.selectIndex = index 
       this.$emit('changePage' , this.bottomBarList[index].componentName)
     }
   }
}
</script>

<style lang="scss" scoped>
   .bottom-bar{
     z-index: 99;
     width: 100%;
     height: 1.5rem;
     position: fixed;
     bottom: 0;
     display: flex;
     font-size: 0.3rem;
     background-color: #e0e0e030;
     .bottom-bar-item{
       flex: 1;
       display: flex;
       flex-direction: column;
       .flex-style{
          flex: 1;
          
       }
       &-img-box{
           display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.1rem;
        &-item {
         margin-bottom: 0.1rem;
         display: inline-block;
        }
       }
       &-value-box{
          text-align: center;
          color: #bbc1bb;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -0.3rem;
          &.active {
            color: #0c100d96;
          }
       }
     }
   }
</style>
