<template>
  <div class="container border border-primary rounded p-3">
    <h1>UserEdit Component</h1>
    <hr>
    <button class="btn btn-primary" @click="show = !show">Show</button>
    <br>
    <br>
    <div class="alert alert-info" v-if="show">Alert info</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
<style>
</style>
