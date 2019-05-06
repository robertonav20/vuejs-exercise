<template>
  <div class="card">
    <div class="card-header">{{ category }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
    <div class="card-footer">
      <div class="d-flex flex-row">
        <div class="p-2 text-muted">Quantity: {{ quantity }}pcs</div>
        <div class="p-2 text-muted">Price: {{ price }}€</div>
        <button class="p-2 ml-auto btn btn-primary" type="button" @click="buy">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stock',
  props: {
    category: String,
    name: String,
    description: String,
    quantity: Number,
    price: Number
  },
  methods: {
    buy () {
      this.$store.dispatch('ADD_MYOBJ', {
        category: this.category,
        name: this.name,
        description: this.description,
        quantity: this.quantity,
        price: this.price
      })
    }
  }
}
</script>

<style scoped>
.card{
  text-align: left;
  margin: 5px;
}
</style>
