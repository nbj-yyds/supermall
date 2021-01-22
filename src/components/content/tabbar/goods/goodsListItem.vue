<template>
  <div class="item">
      <img :src="goodsItem.show.img" alt="" @load='imgload' @click="itemclick">
      <div>
          <p class="txt-cut">{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}元</span>
          <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:'goodsListItem' ,
props: {
    goodsItem: {
        type:Object , 
        default() {
            return  {}
        }
    }
}, 
methods: {
    imgload() {
        //事件总线  
        this.$bus.$emit('itemImageLoad')
    } , 
    itemclick() {
        this.$router.push({path:'/detail' , query:{iid:this.goodsItem.iid}})
    }
}
}
</script>

<style scoped>
.item {
  flex:45%;
  margin: 5px; 
}
.item img {
    width: 100%;
  border-radius: 10px;

}
.price {
    color:rgb(205, 92, 120);
    margin-left:60px
}
.cfav {
    float: right;
    margin-right:26px
}
</style>