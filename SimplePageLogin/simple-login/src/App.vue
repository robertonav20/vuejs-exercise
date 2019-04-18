<template>
  <div id="app">
    <h3>Simple Page Login</h3>
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login";
export default {
  name: "app"
};
</script>
  
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
    text-align : left;
    margin: 3%;
    margin-left: 5%;
}
</style>
