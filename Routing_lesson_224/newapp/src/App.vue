<template>
  <div id="app">
    <div class="container w-75">
      <app-header></app-header>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>
 
<script> 
import Header from'./components/Header'

export default {
  name: "App",
  components:{
    appHeader: Header
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
