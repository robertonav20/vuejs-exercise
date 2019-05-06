<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-brand">Stock Trader</div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" tag="a" to="/HomePage"><a>HomePage</a></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" tag="a" to="/Portfolios"><a>Portfolio</a></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" tag="a" to="/Stocks"><a>Stocks</a></router-link>
          </li>
        </ul>
        <ul class="navbar-nav form-inline my-2 my-lg-0">
          <li class="nav-item active">
            <a class="nav-link">EndDay</a>
          </li>
          <li class="nav-item dropdown active">
            <div class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Save & Load</div>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" >Save Data</a>
              <a class="dropdown-item" >Load Data</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" >Funds: 10000€</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
  .navbar {
    margin-bottom: 50px;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 2px;
    background-color: lightgrey;
  }
</style>
