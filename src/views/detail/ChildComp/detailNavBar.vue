<template>
  <div>
      <nav-bar class="nav-bar">
        <template #left>
          <div class="return" @click="returnHome">
          <img  src="~assets/img/back.svg" alt="">
          </div>
        </template>
        <template #center>
        <ul class="list">
          <li v-for='(item,index) in titles' @click='currentIndex=index' :key='item' :class="{active:currentIndex===index}">{{item}}</li>
        </ul>
        </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/navBar'
export default {
name:"DetailNavBar" , 
components: {
    NavBar ,
} , 
data() {
  return {
    titles:['商品','参数','评论','推荐'] , 
    currentIndex:0,
  }
},
methods: {
  returnHome() {
    this.$router.push('/home')
  }
}
}  

</script>

<style scoped>
 .nav-bar {
   position: fixed;
   width: 100%;
   background-color:#fff;
 } 
 .nav-bar img {
   height: 40px ; 
   margin-top: 2px; 
 }
 .return {
   float: left; 
   margin-left:20px;
 }
 .list {
   float: left;
 }
 .list li {
   float: left;
   padding: 0 8px;
   font-size: 16px;
 } 
 .active {
   color:rgb(214, 93, 164)
 }
</style>