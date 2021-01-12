<template>
<div @click='active' class="item">
    
    <div v-if="!isActive">
        <slot   name='icon-item'></slot>
    </div>
    <div v-else>
         <slot  name="icon-item-active"></slot>
    </div>
        <div :style="activeStyle">
        <slot  name="item-text"></slot>
        </div>
         </div>
</template>

<script>
//插槽最好都外面包装一层div
export default {
name:'tabBarItem' ,
data() {
return {
}
},
props:{
    path:String,
    activeColor: {
        type:String , 
        default:'red'
    }
},
methods: {
    active() {
        this.$router.replace(this.path).catch(()=>{})
        // console.log(this.$route.path);   带斜杠的
    }
}, 
computed: {
    isActive() {
        // return this.$route.path===this.path;
        // return this.$route.path.includes(this.path) 
        return this.$route.path.indexOf(this.path)!==-1
    }, 
    activeStyle() {
        return  this.isActive?{color:this.activeColor}:{}
    }
}
}
</script>

<style scoped>
#tab-bar .item {
 flex:1; 
 text-align: center;
 height: 50px;
 font-size: 14px;
}
#tab-bar .item img {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
}
.active {
    color:red;
}
</style>