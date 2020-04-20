<template>
    <div class="lgh_filter">
        <div class="lgh_filter_sort">
            <p @click="onsort" >价格{{lgh_sort_value}} </p>
        </div>
    </div>
</template>


<script>
export default {
    data:function(){
        return{
            lgh_sort_value:"↑",
            lgh_sort_flag:true
        }
    },
    methods:{
        onsort:function(){
            this.lgh_sort_flag = !this.lgh_sort_flag
            
            if(this.lgh_sort_flag){
                this.lgh_sort_value = "↓"
            }else{
                this.lgh_sort_value = "↑"

            }

            this.$store.commit("sort",this.lgh_sort_flag)

        }
    }
}
</script>


<style scoped>

</style>