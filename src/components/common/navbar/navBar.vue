<template>
  <div class="nav-bar">
<div class='left'><slot name="left"></slot></div>
<div class='center'><slot name="center"></slot></div>
<div class='right'><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:'navBar'
}
</script>

<style scoped>
.nav-bar {
    display: flex;
    background-color: var(--color-tint);
    line-height: 45px;
    box-shadow: 0 1px 1px #fff;
}
.nav-bar .left  ,  .nav-bar .right {
    width: 60px; 
    height: 45px;
}
.nav-bar .center {
    flex:1 ;
}
</style>