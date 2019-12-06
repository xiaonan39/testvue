<template>
  <div id="app">
    <Eheader/>
    <div id = "e-main">
      <div id="nav">
        <div class = "nav_coat">
            <router-link to="/home">Dashboard</router-link>
            <router-link to="/scan">Scan</router-link>
            <router-link to="/report">Report</router-link>
        </div>
      </div>
      <router-view />
      <!-- <Home/> -->
    </div>
  </div>
</template>

<script>
  import Eheader from "@/components/pages/header.vue";
  import Easide from '@/components/pages/aside.vue';
  import Scan from '@/views/scan.vue';
  import Report from '@/views/report.vue';
  // import Home from "@/views/Home.vue";

  export default {
    name: "home",
    components: {
      Eheader,Easide,Scan,Report
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
  /* display: flex; */
  flex-direction: column;
}
#e-main{
  display: flex;
  /* height:100%; */
}
#nav {
  width: 9%;
  background: #fff;
  height:100%;
}
.nav_coat{
  margin:10px;
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
