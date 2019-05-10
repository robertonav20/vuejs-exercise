<template>
  <div>
    {{ multipleSelection }}
    <el-table
      :data="tableData"
      style="width: 80%"
    >
      <el-table-column
        width="80">
        <template slot-scope="scope">
          <span @click="checkboxSelected(scope.$index)"><el-checkbox v-model="multipleSelection[scope.$index]" :checked="multipleSelection[scope.$index]">{{scope.$index}}</el-checkbox></span>
        </template>
      </el-table-column>
      <el-table-column
        label="Date"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        property="name"
        label="Name"
        width="120">
      </el-table-column>
      <el-table-column
        property="address"
        label="Address"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">Toggle selection status of second and third
        rows
      </el-button>
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        multipleSelection: []
      }
    },
    mounted() {
      this.tableData.forEach(() => {
        this.multipleSelection.push(false)
      })
    },
    methods: {
      checkboxSelected(i) {
        this.multipleSelection.forEach((e, index) => {
          this.multipleSelection[index] = i === index;
        });
      }
    }
  }
</script>


