<template>
  <div>
    <h1>{{ msg }}</h1>
    <span>Local Variable: {{ a }}</span>
    <span>Store Variable: {{ varA }}</span>
    <br><br>
    <button @click="incrementA">Increment A</button>
    <br><br>
    <span>Local Variable: {{ b }}</span>
    <span>Store Variable: {{ varB }}</span>
    <br><br>
    <button @click="incrementB">Increment B</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'childComponent',
  data () {
    return {
      msg: 'Child Component',
      a: 0,
      b: 0
    }
  },
  computed: {
    ...mapGetters({
      varA: 'getA',
      varB: 'getB'
    })
  },
  methods: {
    incrementA () {
      this.a = this.varA
      this.a += 1
      this.$emit('incrementA', this.a)
    },
    incrementB () {
      this.b = this.varB++
      this.b += 1
      this.$emit('incrementB', this.b)
    }
  }
}
</script>

<style scoped>

</style>
