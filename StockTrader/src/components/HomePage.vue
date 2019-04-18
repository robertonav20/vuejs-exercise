<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Home Page</h1>
      <p class="lead">This is stock trader for buy and sell</p>
      <p class="lead">
        <router-link class="btn btn-primary" tag="a" to="/Stocks"><a>Visit Stocks</a></router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Home Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
