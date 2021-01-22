<template>
<div id="detail">
    <detail-nav-bar></detail-nav-bar>
</div>
</template>

<script>
import DetailNavBar from './ChildComp/detailNavBar' ; 
import {getDetails} from 'network/detail.js'
export default {
name:"detail",
components: {
    DetailNavBar ,
},
data(){
    return {
        iid:'',
    }
} ,
created() { //在创建时候发送请求
    this.iid=this.$route.query.iid ; 
    this.getDetails();
} , 

methods: {
    getDetails() {
        getDetails(this.iid).then(res=>{
            console.log(res);
        })
    }
}
}

</script>

<style scoped>

</style>