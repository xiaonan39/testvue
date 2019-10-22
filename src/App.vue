<template>
  <div id="app">
    <Eheader/>
    <div id = "e-main">
      <div id="nav">
        <router-link to="/home">96孔板</router-link>
      </div>
      <Easide/>
      <!-- <router-view /> -->
      <!-- <Home/> -->
    </div>
  </div>
</template>

<script>
  import Eheader from "@/components/pages/header.vue";
  import Easide from '@/components/pages/aside.vue';
  // import Home from "@/views/Home.vue";

  export default {
    name: "home",
    components: {
      Eheader,Easide
    }
  };

</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  display: flex;
  flex-direction: column;
}
#e-main{
  display: flex;
  height:100%;

}
#nav {
  width: 4%;
  padding:10px 30px 0;
  background: #ccc;
  height:100%;
}

#nav a {
  text-align: left;
  display: block;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #2c3e50;
  word-break:keep-all;
  white-space:nowrap; 
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
