<template>
  <div>
      <nav-bar>
        <template #center>
          <h3 class="title">购物街</h3>
        </template>
      </nav-bar>
  </div>
</template>

<script>
import navBar from  '../../components/common/navbar/navBar'
import {getHomeMultidata} from 'network/home'
export default {
   components: {
     navBar,
   } , 
   data() {
     return {
      banners:[] ,
      recommends:[]
     }
   },
   created() { 
     // 1  请求多个数据
     getHomeMultidata().then(res=>{
       console.log(res);
       //保存数据  
       this.banners=res.data.banner.list ;
       this.recommends=res.data.recommend.list;
     })
   }
}
</script>

<style>
 .title {
   font-size: 20px;
   color: #fff;
   text-align: center;
 }
</style>