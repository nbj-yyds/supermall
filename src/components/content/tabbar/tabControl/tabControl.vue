<template>
  <div id="tab-control">
      <div v-for="(item,index) in titles" :key="item" class="tab-control-item">
          <span @click='focus(index)' :class="{active:isClick===index}">{{item}}</span>
      </div>
  </div>
</template>

<script>
//文字不同的时候没必要用插槽
export default {
name:'tabControl' , 
data() {
    return {
        isClick:0,
    }
},
props : {
    titles: {
        type:Array , 
        default() {
            return []
        }
    }
} ,  
methods: {
    focus(index) {
        this.isClick=index;
        this.$emit('changeList', index)
    }
}

}
</script>

<style scoped>
#tab-control {
    width: 100%;
    display: flex;
    background:rgba(255, 255, 255, 0.932);
}
.tab-control-item {
    flex:1;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
}
.active {
    color:hotpink ; 
    border-bottom: 2px solid hotpink;
    padding: 5px;
}

</style>