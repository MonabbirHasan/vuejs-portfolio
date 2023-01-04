<template>
    <HeaderVue/>
<router-view></router-view>
</template>

<script>
import HeaderVue from './components/Header.vue';
export default {
name:"app",
components:{
    HeaderVue
}
}
</script>

<style>

</style>