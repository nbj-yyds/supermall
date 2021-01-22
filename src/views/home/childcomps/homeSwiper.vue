<template>
  <swiper>
      <swiper-item v-for="(item,index) in banners" :key='index'>
          <a :href="item.link">
              <img :src="item.image" alt="" @load="imgLoad">
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
  data(){
      return {
          isLoad:false
      }
  },
  props: {
      banners:{
          type:Array , 
          default() {
              return []
          }
      }
  } , 
  methods: {
      imgLoad() {
          if(!this.isLoad) {
          this.$emit('swiperImgLoad')
          this.isLoad=true ;
          }
      }
  }
}
</script>

<style>

</style>