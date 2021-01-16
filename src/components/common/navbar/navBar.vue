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
    position: fixed; 
    top: 0;
    left: 50%; 
    right: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 999;
}
.nav-bar .left  ,  .nav-bar .right {
    width: 60px; 
    height: 45px;
}
.nav-bar .center {
    flex:1 ;
}
</style>