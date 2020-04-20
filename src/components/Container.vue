<template>
    <div class="lgh_container">
        <ContainerItem 
        v-for="(item,index) in $store.state.list" 
        :key = index 
        :item = item
        />
    </div>
</template>


<script>
import ContainerItem from "../components/ContainerItem"
import axios from "axios"
export default {
    components:{
        ContainerItem
    },
    data:function(){
        return{
            list:[]
        }
    },
    mounted:function(){
        axios.get("http://localhost:8080/list.json").then((res)=>{
            this.list = res.data.result
            window.console.log(this.$store.commit)
            this.getList()
        }).catch((error)=>{
            window.console.log(error)
        })
    },
    methods:{
        getList:function(){
            this.$store.commit("getData",this.list)

        }
    }
}
</script>


<style scoped>

</style>