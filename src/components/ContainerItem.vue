<template>
    <div class="lgh_containerItem" @click="onclick">
        <p>{{item.title}}</p>
        <p>￥{{item.price}}</p>
    </div>
</template>


<script>
export default {
    props:{
        item:Object
    },
    methods:{
        onclick:function(){
            
        }
    }
}
</script>


<style scoped>

</style>