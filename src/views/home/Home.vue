<template>
  <div class="container">
      <nav-bar class="home-nav">
        <template #center>
          <h3 class="title">购物街</h3>
        </template>
      </nav-bar>
      <tab-control   class="tab_Control" ref='tabControl0'  :titles='["流行","新款","精选"]' @changeList='changeList' v-show='isTabFixed'></tab-control>
      <scroll @scroll='hideThenShow'   class="content" ref="scroll" :probe-type="3" :pull-up-load='true' @loadmore='loadmore'>
<home-swiper @swiperImgLoad='swiperImgLoad'  :banners='banners'></home-swiper> 
<recommend-view :recommends='recommends'></recommend-view>
<feature-view></feature-view>
<tab-control   class="tab_Control" ref='tabControl' :titles='["流行","新款","精选"]' @changeList='changeList' ></tab-control>
<goods-list  :goods='showGoods'></goods-list>
</scroll>
<back-top v-show="show" @click.native='backtop'></back-top>
  </div>
</template>

<script>
import homeSwiper from '../home/childcomps/homeSwiper'
import RecommendView from "./childcomps/RecommendView"
import featureView from './childcomps/FeatureView'
import goodsList from '../../components/content/tabbar/goods/goodsList'

import navBar from  '../../components/common/navbar/navBar'
import scroll from '../../components/common/scroll/scroll'
import tabControl from '../../components/content//tabbar/tabControl/tabControl'
import  backTop from '../../components/content/backTop/backtop'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import debounce from 'common/utils.js'

//引用插件better-scroll  
export default {
   components: {
     homeSwiper,
     RecommendView,
     featureView,
     goodsList,

     navBar,
     tabControl,
     scroll,
     backTop,
   } , 
   data() {
     return {
      banners:[] ,
      recommends:[] , 
      goods:{
        "pop":{page:0 , list:[]},
        "new":{page:0 , list:[]},
        "sell":{page:0 , list:[]}
      }, 
      currentType:'pop' , 
      show:false,
      tabOffSetTop:'' , 
      isTabFixed:false , 
      saveY:''
     }
   },
   
   created() { 
     // 1  请求多个数据
     this.getHomeMultidata();
     // 2 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
     //3. 监听item中图片加载完成  
   
   }, 
   activated() {
     this.$refs.scroll.scrollTo(0,this.saveY ,0)
     this.$refs.scroll.refresh();
   },  
   deactivated() {
     this.saveY=this.$refs.scroll.getScrollY()
     console.log(this.saveY);
   },
   mounted() {
this.$bus.$on('itemImageLoad',()=> {
  debounce(this.$refs.scroll.refresh , 500); 
  // console.log(this.$refs.tabControl.$el.offsetTop);
   })
   },
  //  updated() {
  //    this.$refs.scroll.scroll.refresh()
  //  },
   methods: {  //把处理数据逻辑单独拿出来
   /* 事件相关 */ 
   changeList(index) {
     switch(index) {
       case 0 : 
       this.currentType='pop'; 
       break ; 
       case 1: 
       this.currentType='new' ; 
       break ; 
       case 2 : 
       this.currentType='sell';
       break ; 

     }
     this.$refs.tabControl0.isClick=index; 
     this.$refs.tabControl.isClick=index; 
     this.$refs.scroll.scrollTo(0,-this.tabOffSetTop,200)
   }, 
   backtop() {
     this.$refs.scroll.scrollTo(0,0,500); //500ms到达指定位置
   },
   hideThenShow(position) {
     //判断backTop的显示隐藏
       if(Math.abs(position.y)>=1000) {
         this.show=true;
       } 
       else {
         this.show=false;
       }     
       // 决定tabContrl是否吸顶  (position fixed)
       this.isTabFixed=(-position.y)>this.tabOffSetTop ;

   },
   loadmore() {
     console.log('上拉加载中');
     this.getHomeGoods(this.currentType)
     this.$refs.scroll.finishPullUp()
   },
   swiperImgLoad() {
  console.log(this.$refs.tabControl.$el.offsetTop); 
  this.tabOffSetTop =this.$refs.tabControl.$el.offsetTop ; 

   },


   //以下是网络请求相关代码
     getHomeMultidata() {
 getHomeMultidata().then(res=>{
       console.log(res);
       //保存数据  
       this.banners=res.data.banner.list ;
       this.recommends=res.data.recommend.list;
     })
     },
     getHomeGoods(type) {
       let page=this.goods[type].page+1;
        getHomeGoods(type ,page).then(res=>{
        this.goods[type].list.push(...res.data.list); 
        console.log(res);
        this.goods[type].page=page;
        // this.goods[type].list=this.goods[type].list.concat(res.data.list)
     })
     },
     
   
   }, 
   computed : {
     showGoods() {
       return  this.goods[this.currentType].list
     }
   }
}
</script>

<style scoped>
.container {
  height: 100vh;
  padding-top: 44px;
  position: relative;
}
 .title {
   font-size: 20px;
   color: #fff;
   text-align: center;
 }
 /* .tab_Control {
   position: sticky;
   top: 45px;
 } */
.content {
  /* height:100%;
  overflow: hidden;
  margin-top:44px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
.tab_Control {
  position: relative;
  z-index:999
}
</style>