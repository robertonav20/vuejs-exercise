<template>
  <div class="jumbotron">
    <div class="header">
      <h5 class="font-weight-bold">Stocks</h5>
    </div>
    <div class="body d-flex flex-row">
      <div class="card">
        <div class="card-header">Car</div>
        <div class="card-body">
          <h5 class="card-title">Audi</h5>
          <p class="card-text">Das auto buy it!</p>
        </div>
        <div class="card-footer">
          <div class="d-flex flex-row">
            <div class="p-2 text-muted">Quantity: 10pcs</div>
            <div class="p-2 text-muted">Price: 85000€</div>
            <button class="p-2 ml-auto btn btn-primary" type="button">Buy</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Car</div>
        <div class="card-body">
          <h5 class="card-title">BMW</h5>
          <p class="card-text">BMWWWWWWWWWWWWW auto buy it!</p>
        </div>
        <div class="card-footer">
          <div class="d-flex flex-row">
            <div class="p-2 text-muted">Quantity: 10pcs</div>
            <div class="p-2 text-muted">Price: 24000€</div>
            <button class="p-2 ml-auto btn btn-primary" type="button">Buy</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Car</div>
        <div class="card-body">
          <h5 class="card-title">Panda</h5>
          <p class="card-text">Fiat auto buy it!</p>
        </div>
        <div class="card-footer">
          <div class="d-flex flex-row">
            <div class="p-2 text-muted">Quantity: 10pcs</div>
            <div class="p-2 text-muted">Price: 11000€</div>
            <button class="p-2 ml-auto btn btn-primary" type="button">Buy</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Car</div>
        <div class="card-body">
          <h5 class="card-title">Porsche</h5>
          <p class="card-text">Fiat auto buy it!</p>
        </div>
        <div class="card-footer">
          <div class="d-flex flex-row">
            <div class="p-2 text-muted">Quantity: 10pcs</div>
            <div class="p-2 text-muted">Price: 110000€</div>
            <button class="p-2 ml-auto btn btn-primary" type="button">Buy</button>
          </div>
        </div>
      </div>
    </div>
    <div class="body d-flex flex-row">
      <div class="card">
        <div class="card-header">Food</div>
        <div class="card-body">
          <h5 class="card-title">Cannolo</h5>
          <p class="card-text">It's good!</p>
        </div>
        <div class="card-footer">
          <div class="d-flex flex-row">
            <div class="p-2 text-muted">Quantity: 10pcs</div>
            <div class="p-2 text-muted">Price: 2.5€</div>
            <button class="p-2 ml-auto btn btn-primary" type="button">Buy</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Food</div>
        <div class="card-body">
          <h5 class="card-title">Arancina</h5>
          <p class="card-text">AWWWWWWWWWW buy it!</p>
        </div>
        <div class="card-footer">
          <div class="d-flex flex-row">
            <div class="p-2 text-muted">Quantity: 10pcs</div>
            <div class="p-2 text-muted">Price: 1.50€</div>
            <button class="p-2 ml-auto btn btn-primary" type="button">Buy</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Food</div>
        <div class="card-body">
          <h5 class="card-title">Cassata</h5>
          <p class="card-text">Fiat auto buy it!</p>
        </div>
        <div class="card-footer">
          <div class="d-flex flex-row">
            <div class="p-2 text-muted">Quantity: 10pcs</div>
            <div class="p-2 text-muted">Price: 11000€</div>
            <button class="p-2 ml-auto btn btn-primary" type="button">Buy</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Food</div>
        <div class="card-body">
          <h5 class="card-title">Arrosticini</h5>
          <p class="card-text">It's good!</p>
        </div>
        <div class="card-footer">
          <div class="d-flex flex-row">
            <div class="p-2 text-muted">Quantity: 10pcs</div>
            <div class="p-2 text-muted">Price: 1€</div>
            <button class="p-2 ml-auto btn btn-primary" type="button">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stocks'
}
</script>

<style scoped>
  .card {
    width: 500px;
    heigth: auto;
    margin: 20px;
  }

  .jumbotron {
    text-align: left;
    .header{
      background-color: tomato;
    }
    .body{
      background-color: red;
    }
  }
</style>
