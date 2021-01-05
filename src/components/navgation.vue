<template>
   <div class="nav-bar" :style="navBarStyle" :class="[{'bottom-line' : pageName}]">
        <div class="left" @click="$emit('goBack')">
            <!-- 默认状态 -->
             <img :src="back" v-if="isDefault&&isShowBack"  />
             <!-- 具名插槽 -->
             <slot name="nav-left"></slot>
        </div>
        <div class="center">
            <span v-if="isDefault" class="page-title">{{pageName}}</span>
             <slot name="nav-left"></slot>
        </div>
        <div class="right">
             <slot name="nav-right"></slot>
        </div>
   </div>
</template>

<script>
import back from '@/assets/images/back.svg'
export default {
     name : 'nav-bar',
     props : {
         isDefault : {
             default : true,
             type : Boolean
         },
         isShowBack : {
             default : true,
             type : Boolean
         },
         pageName : {
             default : '',
             type : String
         },
         navBarStyle : {
             type : Object,
             default : function(){
                 return {
                     backgroundColor : 'white'
                 }
             }
         }
     },
     data(){
         return {
             back
         }
     }

}
</script>

<style lang="scss" scoped> 
   
   .nav-bar {
       width: 100%;
       height: 0.88rem;
       line-height: 0.88rem;
       display: flex;
       justify-content: space-between;
       .left , .right {
           height: 100%;
           width: 0.6rem;
           img {
               width: 100%;
               height: 100%;
               align-self: center;
           }
       }
       .right {
           width: 0.8rem;
       }
       .center {
           display: flex;
           flex-grow: 1;
           height: 100%;
           .page-title {
               align-self: center;
               margin: 0 auto;
               font-size: 0.32rem;
           }
       }
   }



   .bottom-line{
       border-bottom: 1px solid  $lineColor  ;
   }

</style>