<template>
  <div id="adminPage">
    <h2>Benvenuto {{user}}</h2>
    <router-link to="/Login"><button class="btn btn-primary" @click="logout()">Login</button></router-link>
  </div>
</template>

<script>

export default {
  name: 'AdminPage',
  data : {
        msg: 'Admin page'
  },
  data() {
    return {
        user : 'Admin'
    }
  },
  computed: {
  },
  methods: {
    logout(){
        this.$store.dispatch('logout');
    }
  }
}
</script>
<style scoped>

</style>
