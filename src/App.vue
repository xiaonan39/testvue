<template>
  <div id="app">
    <Eheader/>
    <div id = "e-main">
      <div id="nav">
        <router-link to="/home">96孔板</router-link>
        <router-link to="/scan">Scan</router-link>
        <router-link to="/batches">Batches</router-link>
        <router-link to="/batchessum">Batchessum</router-link>
        <router-link to="/reports">Reports</router-link>
      </div>
      <router-view />
      <!-- <Home/> -->
    </div>
  </div>
</template>

<script>
  import Eheader from "@/components/pages/header.vue";
  // import Home from "@/views/Home.vue";

  export default {
    name: "home",
    components: {
      Eheader,
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
}
#e-main{
  display: flex;
  height:100%;

}
#nav {
  padding: 30px;
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
