<template>
<div>
  <router-view/>
  <FooterMusic/>
</div>
</template>


<script>
import FooterMusic from '@/components/item/FooterMusic.vue'

export default {
    setup() {
        
    },
    components:{
       FooterMusic, 
    }
}
</script>
<style lang="less">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.icon{
    width: .5rem;  //25px
    height: .5rem;
}
</style>
