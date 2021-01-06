<template>
  <div id="app">
   <transition :name="transitionName">
     <keep-alive :include="keepAliveName">
      <router-view />
   </keep-alive>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  return {
    transitionName : 'fold-left',
    keepAliveName : ['main'],
  }
  },
  watch : {
    '$route' (to , from) {
      let routerType = to.params.routerType 
      if(routerType == 'push') {
        this.keepAliveName.push(to.name)
        this.transitionName = 'fold-left'
      } else {
        this.keepAliveName.pop()
        this.transitionName = 'fold-right'
      }
    }
  }
}
</script>

<style lang="scss" scoped> 
    // push 页面动画 
    // 新页面进入
    .fold-left-enter-active {
      animation-name: fold-left-in;
      animation-duration: .4ss;
    }
    // 老页面移出
    .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .4s;
    }


    // 回退 
     .fold-right-enter-active {
     animation-name: fold-right-in;
     animation-duration: .4s;
    }
    .fold-right-leave-active {
     animation-name: fold-right-out;
     animation-duration: .4s;
    }


    @keyframes fold-left-in {
      0% {
      transform: translate(100% , 0);
      }
      100% {
      transform: translate(0 , 0);
      }
      
    }
     @keyframes fold-left-out {
       0% {
      transform: translate(0 , 0);
      }
      100% {
      transform: translate(-100% , 0);
      }
    }


      @keyframes fold-right-in {
       0% {
      transform: translate(-100% , 0);
      }
      100% {
      transform: translate(0 , 0);
      }
    }
      @keyframes fold-right-out {
       0% {
      transform: translate(0 , 0);
      }
      100% {
      transform: translate(100% , 0);
      }
    }
</style>
