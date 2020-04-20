<template>
    <div class="lgh_tabBar">
        <TabBarItem 
        v-for="(item,index) in $store.state.classify" 
        :key = index :item = item 
        :index = index
        :class="{lgh_tabBarItem_active:$store.state.selectIndex === index}"
        />
    </div>
</template>


<script>
import axios from "axios"
import TabBarItem from "../components/TabBarItem"
export default {
    components:{
        TabBarItem
    },
    data:function(){
        return{
            lgh_classify:[],
        }
    },
    mounted:function(){
        axios.get("http://localhost:8080/fenlei.json").then(res=>{
            this.$store.commit("getClassify",res.data.result)
        }).catch(error=>{
            window.console.log(error)
        })
    },
    methods:{
    }
}
</script>


<style scoped>

</style>