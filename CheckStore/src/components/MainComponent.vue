<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <span>Store A : {{ cData.variables.a }}</span>
    <span>Store B : {{ cData.variables.b }}</span>
    <app-child :data="cData" ><!--@incrementA="incrementA" @incrementB="incrementB"--></app-child>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
  name: 'mainComponent',
  data () {
    return {
      msg: 'Main Component'
    }
  },
  components: {
    appChild: ChildComponent
  },
  computed: {
    cData () {
      return this.$store.getters.getData
    }
  },
  methods: {
    incrementA (val) {
      alert('A ' + val)
      this.a = val
    },
    incrementB (val) {
      alert('B ' + val)
      this.b = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
