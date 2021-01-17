<template>
  <div class="wrapper" ref="wrapper">
      <!-- ref一般绑定给子组件 -->
      <div class="content">
      <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import pullingUp from '@better-scroll/pull-up'
export default {
name:"Scroll" , 
props: {
    probeType: {
  type:Number , 
    default:0,
    }, 
    pullUpLoad: {
        type:Boolean , 
        default:false,
    }
  
},
data(){
    return {
        scroll:'',
    }
},
mounted() {
this.scroll=new BScroll(this.$refs.wrapper, {
    probeType:this.probeType , 
    click:true,
    pullUpLoad:this.pullUpLoad,
}) , 
this.scroll.on("scroll" , (position)=> {
    // console.log(position);
    this.$emit('scroll' , position)
}) 
this.scroll.on('pullingUp' , ()=>{
    console.log('到了底部');
    this.$emit('loadmore'); 
    
})
}, 
methods: {
    scrollTo(x,y,time) {
        this.scroll.scrollTo(x,y,time);
    }, 
  finishPullUp() {
      this.scroll.finishPullUp()
  }
}

}
</script>

<style scoped>

</style>