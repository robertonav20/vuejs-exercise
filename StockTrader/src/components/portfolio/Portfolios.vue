<template>
  <div class="jumbotron">
    <div class="header">
      <h5 class="font-weight-bold">Portfolios</h5>
    </div>
    <div class="body">
      <app-portfolio :data="items"></app-portfolio>
    </div>
  </div>
</template>

<script>
import Portfolio from './portfolio'
import { mapGetters } from 'vuex'

export default {
  name: 'portfolios',
  components: {
    appPortfolio: Portfolio
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      items: 'getMyObj'
    })
  }
}
</script>

<style scoped>
  .header{
  }
  .body{
    margin: 15px;
  }
</style>
