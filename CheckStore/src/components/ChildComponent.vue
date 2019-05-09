<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>Value Store : {{ cData }}</h1>
    <span>Store Variable: {{ cData.variables.a }}</span>
    <br><br>
    <button @click="incrementA">Increment A</button>
    <br><br>
    <span>Store Variable: {{ cData.variables.b }}</span>
    <br><br>
    <button @click="incrementB">Increment B</button>
  </div>
</template>

<script>
export default {
  name: 'childComponent',
  props: ['data'],
  data () {
    return {
      msg: 'Child Component',
      cData: this.data
    }
  },
  methods: {
    incrementA () {
      this.cData.variables.a += 1
      this.$emit('incrementA', this.cData.variables.a)
    },
    incrementB () {
      this.cData.variables.b += 1
      this.$emit('incrementB', this.cData.variables.b)
    }
  }
}
</script>

<style scoped>

</style>
