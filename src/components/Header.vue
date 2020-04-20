<template>
    <div class="lgh_header">
        <div class="lgh_search" @click="toSearch">
            <p>搜索</p>
        </div>
    </div>
</template>


<script>
export default {
    methods:{
        toSearch:function(){
            this.$router.push("/search")
        }
    }
}
</script>


<style scoped>

</style>