<template>
<div>
  <tab-bar>
       <tab-bar-item path='/home'>
       <template #icon-item>
        <div>
         <img src="~assets/img/home.jpg" alt="">
         </div>
       </template>
       <template #icon-item-active>
         <div >
           <img src="~assets/img/home1.png" alt="">
         </div>
       </template>
        <template #item-text>
           首页
         </template>
     </tab-bar-item>
     

       <tab-bar-item path='/category'>
         <template #icon-item>
        <div >
         <img src="~assets/img/category.jpg" alt="">
         </div>
       </template>
        <template #icon-item-active>
         <div >
           <img src="~assets/img/cate1.jpg" alt="">
         </div>
       </template>
        <template #item-text>
           分类
         </template>
         </tab-bar-item>
     
       <tab-bar-item path='/cart'>
         <template #icon-item>
        <div >
         <img src="~assets/img/cart.jpg" alt="">
         </div>
       </template>
        <template #icon-item-active>
         <div >
           <img src="~assets/img/cart1.png" alt="">
         </div>
       </template>
        <template #item-text>
           购物车
         </template></tab-bar-item>
    
      <tab-bar-item path='/my'>
        <template #icon-item>
        <div >
         <img src="~assets/img/wd.jpg" alt="">
         </div>
       </template>
        <template #icon-item-active>
         <div >
           <img src="~assets/img/my1.jpg" alt="">
         </div>
       </template>
        <template #item-text>
           我的
         </template></tab-bar-item>
     
   </tab-bar>
   </div>
</template>

<script>
import tabBar from '../../common/tabbar/tabbar'
import tabBarItem from '../../common/tabbar/tabbaritem'
export default {
    name:'mainTabBar' , 
    components: {
        tabBar, 
        tabBarItem,
    }
}
</script>

<style>

</style>