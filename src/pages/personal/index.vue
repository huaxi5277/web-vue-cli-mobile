<template>
  <div class="personal">
    <l-nav pageName="个人中心"  :isShowBack="false"></l-nav>
    <div class="person-name-box">
      <div class="person-name-box-top">
        <div class="person-name-box-top-img-left">
          <img class="person-name-box-top-img-box-avator" alt="" src="@/assets/images/avater.png">
        </div>
        <div class="person-name-box-top-img-right">
          <div class="person-name-box-top-img-right-username">
            狗子博
          </div>
          <div class="person-name-box-top-img-right-vip">
            小狗子
          </div>
        </div>
      </div>
        <div class="person-name-box-bottom">
          <div class="person-name-box-bottom-wrap">
            <div class="person-name-box-bottom-wrap-top">7</div>
            <div class="person-name-box-bottom-wrap-bottom">收藏</div>
          </div>
          <div class="person-name-box-bottom-wrap">
             <div class="person-name-box-bottom-wrap-top">6</div>
            <div class="person-name-box-bottom-wrap-bottom">历史记录</div>
          </div>
          <div class="person-name-box-bottom-wrap">
             <div class="person-name-box-bottom-wrap-top">1</div>
            <div class="person-name-box-bottom-wrap-bottom">关注</div>
          </div>
          <div class="person-name-box-bottom-wrap">
             <div class="person-name-box-bottom-wrap-top">0</div>
            <div class="person-name-box-bottom-wrap-bottom">粉丝</div>
          </div>
        </div>
    </div>
    <div class="grey-line"></div>
    <div class="person-buy-box">
      <div class="person-buy-box-top">
        <div class="person-buy-box-top-left">我的交易</div>
      </div>
      <div class="person-buy-box-center">
        <div class="person-buy-box-center-item">
         <div class="person-buy-box-center-item-img-box" style="backgroundColor:#148aea">
            <img src="@/assets/images/publish_s.svg" alt="">
         </div>
          <div class="person-buy-box-center-item-value">我发布的&nbsp;1</div>
        </div>
        <div class="person-buy-box-center-item">
          <div class="person-buy-box-center-item-img-box" style="backgroundColor: rgba(245 , 211 , 12 ,1 )">
             <img src="@/assets/images/sail.svg" alt="">
          </div>
          <div class="person-buy-box-center-item-value">我卖出的&nbsp;1 </div>
        </div>
        <div class="person-buy-box-center-item">
          <div class="person-buy-box-center-item-img-box" style="backgroundColor: rgba(158 , 28 , 145 , 0.43 )">
             <img src="@/assets/images/bug.svg" alt="">
          </div>
          <div class="person-buy-box-center-item-value">我买到的&nbsp;0 </div>
        </div>
      </div>
    </div>
    <div class="plus" :style="{backgroundColor : isMantle ? '#fff' : '#f9f804'}"> 
      <img :src="plus" @click="showMantle"  :class="[{rotate_p : isMantle} , {rotate_x : !isMantle && isFrist}]"  />
    </div>
    <div class="mantle-box" v-if="isMantle" @click="openMantle">
       <ul class="mantle-box-item-container">
         <li class="mantle-box-item-container-li" @click.stop="publish">
           <div class="mantle-box-item-container-li-item">
             <div class="mantle-box-item-container-li-item-img item1" >
               <img src="@/assets/images/publish_message.svg" alt="">
             </div>
             <div class="mantle-box-item-container-li-item-value">发布</div>
           </div>
         </li>
         <li class="mantle-box-item-container-li" @click.stop="password">
           <div class="mantle-box-item-container-li-item">
             <div class="mantle-box-item-container-li-item-img item2">
              <img src="@/assets/images/password.svg" alt="">
             </div>
             <div class="mantle-box-item-container-li-item-value">修改密码</div>
           </div>
         </li>
         <li class="mantle-box-item-container-li" @click.stop="quit">
           <div class="mantle-box-item-container-li-item">
             <div class="mantle-box-item-container-li-item-img item3" >
              <img src="@/assets/images/quit.svg" alt="">
             </div>
             <div class="mantle-box-item-container-li-item-value">退出登录</div>
           </div>
         </li>
       </ul>
    </div>
  </div>
</template>

<script>
import navtationBar from '@/components/navgation.vue'
import plus from '@/assets/images/plus.svg'
import error from '@/assets/images/error.svg'
export default {
  name : 'personal',
  data () {
    return {
       isMantle : false,
       plus,
       error,
       isFrist : false
    }
  },
  methods : {
   showMantle(){
     this.isFrist = true
     this.isMantle = !this.isMantle
   },
   openMantle(){
     this.isFrist = true
     this.isMantle = false
   },
   publish(){},
   password(){},
   quit(){}
  },
  created(){
   let token = localStorage.getItem('token')
   this.$axios.get('api/idle/current').then((ret)=>{
     console.log(ret)
   })
  },
  mounted(){
    
  },
  components : {
    'l-nav' : navtationBar
  }
}

</script>
<style lang="scss" scoped>
 div{
   box-sizing: border-box;
   width: 100%;
   font-size : 14px;
   .person-name-box{
     width: 100%;
     height: 2.8rem;
     padding: 0.2rem;
     padding-left: 0  ;
     padding-bottom: 0  ;
     box-sizing: border-box;
     &-top  {
       width: 100%;
       height: 1.4rem;
       display: flex;
       &-img-left  {
         width: 2rem;
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         img {
           width: 1.3rem;
         }
       } 
       &-img-right {
         flex : 1 ;
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         &-username {
           font-size: 0.4rem ;
           font-weight: 500;
         }
         &-vip {
           color: #8e75758a;
           margin-top: 0.07rem;
         }
       }
     }
     &-bottom {
       width: 100%;
       height: 1.3rem;
       display: flex;
       padding-top: 0.2rem ;
       &-wrap {
         width: 100%;
         height: 100%;
        display: flex;
        flex-direction: column;
        &-top {
          align-self: center;
          text-align: center;
          font-weight: 200;
        }
        &-bottom {
           align-self: center;
          text-align: center;
          color: #8e75758a;
          margin-top: 0.1rem;
        }
       }

     }
   }
   .grey-line{
     width: 100%;
     height: 0.2rem;
     background-color: #7c7d7b1a;
   }
   .person-buy-box{
     width: 100%;
     height: 4rem;
     display: flex;
     flex-direction: column;
     &-top {
       padding-left: 0.3rem;
        padding-top: 0.3rem;
       &-left  {
         font-size: 0.35rem;
         font-weight: 600;
       }
     }
     &-center {
         display: flex;
         &-item{
           display: flex;
           flex: 1;
           height: 2rem;
           flex-direction:column;
           justify-content: center;
           align-items: center;
           position: relative;
           top: 10%;
           &-img-box {
            width: 1rem;
             height: 1rem;
             border-radius: 50% ;
             display: flex;
             justify-content: center;
             align-items: center;
              img{
               width: 0.44rem;
               height: 0.44rem;
            }
           }
           &-value {
             text-align: center;
             margin-top: 0.2rem;
             color: #8e75758a;
           }
           }
     }
   }
   .plus {
     z-index: 9999;
     width: 12%;
     height: 0.8rem;
     position: fixed;
     bottom: 20%;
     right: 0.5rem;
     background-color: #f9f804;
     border-radius: 0.1rem;
     display: flex;
     justify-content: center;
     align-items: center;
      img{
          width: 0.44rem;
          height: 0.44rem;
      }
         .rotate_p {
          animation : rotate_x 1s forwards ;
     }
       .rotate_x {
          animation : rotate_p 1s forwards ;
     }
   }
   .mantle-box{
     z-index: 999;
     width: 100%;
     height: 100%;
     background: rgba(0 , 0  , 0, 0.75);
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
    &-item-container {
       position: relative;
       top: 80% ;
       right: -30%;
       list-style: none;
       &-li {
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:nth-of-type(1) {
            position: fixed;
            right: 3%;
            top: 64%;
            animation: op0-1 0.2s forwards;
        }
         &:nth-of-type(2) {
          position: fixed;
          top: 75%;
          right: 30%;
          opacity: 0;
          animation: op0-1 0.2s  forwards;
          animation-delay: 0.2s;
        }
         &:nth-of-type(3){
          position: fixed;
          right: 3%;
          top: 84%;
           opacity: 0;
          animation: op0-1 0.5s  forwards;
          animation-delay: 0.4s;
        }
        &-item {
         width: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
         .item1{
           background-color: #03f982f0;
         }
         .item2{
           background-color: #f9f804;
         }
         .item3{
           background-color: #04c5f9;
         }
        &-img {
         width: 1.2rem;
         height: 1.2rem;
         border-radius: 50%;
         display: flex;
        justify-content: center;
        align-items: center;
        }
        &-value {
          margin-top:  0.3rem;
          color: #efe9e9;
          text-align: center;
        }
       }
      }
      
    }
   }
 }



 // 动画 
 @keyframes rotate_x {
   from {
     transform: rotate(0deg);
   } 
   to {
     transform: rotate(-45deg);
     background-color: white;
   }
 }
  @keyframes rotate_p {
   from {
     transform: rotate(-45deg);
   } 
   to {
     transform: rotate(0deg);
     background-color: #f9f804;
   }
 }

 // 显隐性控制

 @keyframes op0-1 {
   
     from {
     opacity: 0;
   } 
   to {
     opacity: 1;
   }
 }

</style>