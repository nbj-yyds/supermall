<template>
  <div class="recommend">
      <div class="item" v-for='(item,index) in recommends' :key='index'>
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"RecommendView" , 
    props: {
        recommends: {
            type:Array , 
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend {
    display: flex;
    margin-top: 20px;
    border-bottom: 8px solid rgba(206, 203, 203,0.4
    );
}
.recommend .item {
    flex:1 ;
    margin:5px;
    display: flex;
    flex-direction: column ; 
    align-items: center;
    text-align: center;
}
.item a , .item img {
    width: 100%;
}
.item div {
    margin-top: 5px;
}
</style>