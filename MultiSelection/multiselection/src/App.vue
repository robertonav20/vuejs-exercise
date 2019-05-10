<template>
  <div id="app">
    <app-table></app-table>
  </div>
</template>

<script>
import Table from './components/Table'

export default {
  name: 'App',
  components: {
    appTable : Table
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
