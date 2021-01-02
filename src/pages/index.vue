<template>
   <div>
       <component :is="isComponent"></component>
       <l-bottom @changePage="changePage"></l-bottom>
   </div>
</template>

<script>
import bottom from '@/components/bottom.vue'
import personal from '@/pages/personal/index.vue'
import cart from '@/pages/cart/index.vue'
import ground from '@/pages/ground/index.vue'
import message from '@/pages/message/index.vue'
export default {
    name : 'main',
    data () {
        return   {
           isComponent : 'ground'
        }
    },
    components : {
        'l-bottom' : bottom,
         'personal' : personal,
         'message' : message,
         'ground' : ground,
         'cart' : cart

    },
    methods : {
        changePage($event){
            this.isComponent = $event
        }
    }
}
</script>

<style>

</style>