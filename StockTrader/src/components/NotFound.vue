<template>
  <div class="card mx-auto">
    <div class="card-body">
      <h5 class="card-title">Page Not Found</h5>
      <p class="card-text">The component does not exist!</p>
      <router-link class="btn btn-primary" tag="a" to="/HomePage"><a>HomePage</a></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notFound'
}
</script>

<style scoped>
.card {
  width: 500px;
  heigth: auto;
  margin: 20px;
}
</style>
