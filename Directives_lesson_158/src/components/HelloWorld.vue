<template>
  <div class="hello container">
    <div class="row justify-content-center">
      <div class="card m-2">
        <div class="card-header align-baseline d-flex justify-content-between">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">Choose Color</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div class="dropdown-item" @click="color='lightgreen'">LigthGreen</div>
              <div class="dropdown-item" @click="color='lightred'">LigthRed</div>
              <div class="dropdown-item" @click="color='lightblue'">LigthBlue</div>
              <div class="dropdown-divider">
              <div class="dropdown-item" @click="color='black'">Black</div>
              </div>
            </div>
          </div>
          <div style="width: auto; height: auto">Color : {{color}}</div>
        </div>
        <div class="card-body" v-custom-directive:change="[color,delay]">
          <h5 class="card-title">Test custom directive</h5>
          <p class="card-text">Paragraph 1 custom directive.......</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      color: 'black',
      delay: 5000
    };
  },
  directives: {
    "custom-directive": {
      bind(el, binding) {
        setTimeout(() => {
          el.style.color = binding.value[0];
        }, binding.value[1]);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

.card-body {
  min-width: 700px;
  min-height: 200px;
}
</style>
