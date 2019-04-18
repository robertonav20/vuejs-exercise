<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h4>{{ componentSelected }}</h4>
    <h4>{{ component }}</h4>
    <button @click="componentSelected = 'appOne'">One</button>
    <button @click="componentSelected = 'appTwo'">Two</button>
    <button @click="componentSelected = 'appThree'">Three</button>
    <hr>
    <component :is="component">
      <p slot="title">{{componentSelected}}</p>
    </component>
  </div>
</template>

<script>
import One from './Components/One.vue'
import Two from './Components/Two.vue';
import Three from './Components/Three.vue';

export default {
  name: 'app',
  components: {
      appOne: One,
      appTwo: Two,
      appThree: Three
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      componentSelected: 'appOne',
      component: 'appOne',
    }
  },
  watch: {
    componentSelected: function() {
        console.log('Changed!')
        this.component =  this.componentSelected;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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

button {
  margin: 5px;
}

component {
    border: 2px solid gainsboro ;
    width: auto;
    background-color: red;
}
</style>
