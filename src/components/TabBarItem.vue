<template>
    <div 
    class="lgh_tabBarItem" 
    @click="onselect"
    >
        {{item.title}}
    </div>
</template>


<script>
export default {
    props:{
        item:Object,
        index:Number
    },
    data:function(){
        return{
            
        }
    },
    methods:{
        onselect:function(){
            this.$store.commit("select",this.index)
        }
    }
}
</script>


<style scoped>

</style>