<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Easide/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Easide from "@/components/pages/aside.vue";
import Easide from "@/components/pages/aside2.vue";



export default{
    name:"home",
    components:{
        Easide,
    }
}

</script>

<style scoped>
  .home{
    width:100%;
    height:100%;
    display: flex;
  }
</style>
