<template>
  <swiper>
      <swiper-item v-for="(item,index) in banners" :key='index'>
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
      </swiper-item>
  </swiper>
</template>

<script>
import {swiper , swiperItem} from '../../../components/common/swiper/index'
export default {
  components: { 
      swiper, 
  swiperItem , 
  },
  name:'homeSwiper' ,
  props: {
      banners:{
          type:Array , 
          default() {
              return []
          }
      }
  }
}
</script>

<style>

</style>