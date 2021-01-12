<template>
  <div id="tab-bar">
    <slot></slot>
   </div>
</template>

<script>
export default {
name:'tabBar',
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed; 
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(231, 231, 231);
  border:1px solid #ccc;
  box-shadow:0 -3px 1px 2px rgba(0,0,0,0.01)
}

</style>