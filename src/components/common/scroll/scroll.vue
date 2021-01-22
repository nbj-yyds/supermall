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
    //1  创建BScroll对象
this.scroll=new BScroll(this.$refs.wrapper, {
    probeType:this.probeType , 
    click:true,
    pullUpLoad:this.pullUpLoad,
}) 
//2.监听滚动位置
if(this.probeType===2 || this.probeType===3) {
this.scroll.on("scroll" , (position)=> {
    console.log(position);
    this.$emit('scroll' , position)
}) 
}


//3.监听滚动到底部
if(this.pullUpLoad) {
this.scroll.on('pullingUp' , ()=>{
    console.log('到了底部');
    this.$emit('loadmore'); 
})
}

}, 
methods: {
    scrollTo(x,y,time) {
        this.scroll&&this.scroll.scrollTo(x,y,time);
    }, 
  finishPullUp() {
    this.scroll&&this.scroll.finishPullUp()
  } , 
  refresh() {
      this.scroll&&this.scroll.refresh()
      console.log('----');
  }, 
  getScrollY() {
      return this.scroll?this.scroll.y : 0 ;
  }
}

}
</script>

<style scoped>

</style>