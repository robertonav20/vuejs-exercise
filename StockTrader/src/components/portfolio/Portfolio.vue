<template>
  <div class="body">
    <el-table v-if="data.length != 0 || data != undefined "
      ref="filterTable"
      :data="data"
      style="width: 100%">
      <el-table-column prop="category" label="Category" width="150"></el-table-column>
      <el-table-column prop="name" label="Name" width="150"></el-table-column>
      <el-table-column prop="description" label="Description" width="500"></el-table-column>
      <el-table-column prop="quantity" label="Quantity" align="right"></el-table-column>
      <el-table-column prop="price" label="Price" filter-placement="bottom-end" align="right">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" circle @click="remove(scope.$index)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'portfolio',
  props: {
    data: []
  },
  methods: {
    remove (i) {
      this.$store.dispatch('DELETE_MYOBJ', i)
    }
  }
}
</script>

<style scoped>
  .body {
    text-align: left;
    margin: 5px;
  }
</style>
