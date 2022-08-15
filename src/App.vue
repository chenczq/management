<template>
  <div id="app">
  <!-- <Mapview></Mapview> -->
    <router-view/>
  </div>
</template>

<script>
//import Mapview from "./components/view/MapContainer"
export default {
  name: 'App',
  //  components: {
  //   Mapview
  // }
}

</script>

<style>
/* @import "../src/assets/ttf/font.css"; */
body{
  padding:0;
  margin:0;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>


