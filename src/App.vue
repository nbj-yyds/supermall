<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import mainTabBar from './components/content/tabbar/maintabbar'
import navBar from './components/common/navbar/navBar'
export default {
  name:'App' , 
  components: {
    mainTabBar,
  }
}
</script>

<style scoped>
@import 'assets/css/base.css'
</style>
