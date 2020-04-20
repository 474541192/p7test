<template>
    <div class="lgh_home">
        <Header />
        <TabBar />
        <Filte />
        <Container />
    </div>
</template>


<script>
import "../style/home.css";
import TabBar from "../components/TabBar"
import Header from "../components/Header"
import Filte from "../components/Filte"
import Container from "../components/Container"
export default {
    components:{
        Header,
        TabBar,
        Filte,
        Container
    }
}
</script>


<style scoped>

</style>