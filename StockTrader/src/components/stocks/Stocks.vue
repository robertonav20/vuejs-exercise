<template>
  <div class="jumbotron">
    <div class="header">
      <h5 class="font-weight-bold">Stocks</h5>
    </div>
    <div class="body">
      <app-stock v-if="cars.length !== 0" v-for="(car, i) in cars" :key="i" :category="car.category" :name="car.name" :description="car.description" :price="car.price" :quantity="car.quantity"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from './stock'
import { mapGetters } from 'vuex'

export default {
  name: 'stocks',
  data () {
    return {
    }
  },
  components: {
    appStock: Stock
  },
  created () {
    this.$store.dispatch('GET_CARS')
  },
  computed: {
    ...mapGetters({
      cars: 'getObj'
    })
  },
  methods: {
  }
}
</script>

<style scoped>

  .jumbotron {
    text-align: left;
  }

  .header{
  }

  .body{
    flex-flow: row wrap;
    display: flex;
    flex-direction: row;
  }
</style>
