<template>
  <div class="container">
      <nav-bar class="home-nav">
        <template #center>
          <h3 class="title">购物街</h3>
        </template>
      </nav-bar>
<home-swiper :banners='banners'></home-swiper> 
<recommend-view :recommends='recommends'></recommend-view>
<feature-view></feature-view>
<tab-control class="tab_Control" :titles='["流行","新款","精选"]' @changeList='changeList'></tab-control>
<goods-list  :goods='showGoods'></goods-list>
  </div>
</template>

<script>
import homeSwiper from '../home/childcomps/homeSwiper'
import RecommendView from "./childcomps/RecommendView"
import featureView from './childcomps/FeatureView'
import goodsList from '../../components/content/tabbar/goods/goodsList'

import navBar from  '../../components/common/navbar/navBar'
import tabControl from '../../components/content//tabbar/tabControl/tabControl'

import {getHomeMultidata,getHomeGoods} from 'network/home'

//引用插件better-scroll  
export default {
   components: {
     homeSwiper,
     RecommendView,
     featureView,
     goodsList,

     navBar,
     tabControl
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
      currentType:'pop'
     }
   },
   
   created() { 
     // 1  请求多个数据
     this.getHomeMultidata();
     // 2 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
   },
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

<style>

 .title {
   font-size: 20px;
   color: #fff;
   text-align: center;
 }
 .tab_Control {
   position: sticky;
   top: 45px;
 }
 
</style>