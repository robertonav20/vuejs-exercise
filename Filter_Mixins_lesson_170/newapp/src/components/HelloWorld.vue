<template>
  <div>
    <div class="jumbotron m-5 p-2">
      <h1 class="display-4">This is a simple filter!</h1>
      <hr class="my-4">
      <div class="input-group input-group-sm m-2 w-25">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Filter</span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            v-model="filter"
          >
        </div>
      </div>
      <br>
      <table class="table table-sm table-bordered table-striped table-hover w-75 mx-auto">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Title</th>
            <th scope="col">Reverse</th>
            <th scope="col">length</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-md-center" :key="item.id" v-for="item in filteredItems">
            <td >{{item.id}}</td>
            <td>{{item.title}}</td>
            <td><em>{{ item.title | filterReverse }}</em></td>
            <td><em>{{ item.title | filterLength }}</em></td>
          </tr>
        </tbody>
      </table>
      <el-pagination
        class="mt-5"
        small
        background
        layout="prev, pager, next"
        :page-size="sizePage"
        :current-page.sync="currentPage"
        :total="response.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import error from "util";
import Axios from "axios";
import {filterMixin} from './FilterMixin';

export default {
  name: "HelloWorld",
  mixins: [filterMixin],
  data() {
    return {
      items: ["First", "Second", "Third", "Fourth", "Fifth"],
      filter: "",
      response: [],
      displayData: [],
      currentPage: 1,
      sizePage: 20,
      sizeTitle: 10
    };
  },
  watch: {
    currentPage: function(page) {
      this.displayData = this.response.slice(
        page * this.sizeTitle - this.sizeTitle,
        page * this.sizeTitle
      );
      this.currentPage = page;
    },
    response: function() {
      this.displayData = this.response.slice(0, this.sizeTitle);
    }
  },
  async mounted() {
    try{
      let response = await Axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        this.response = response.data.map(item => {
          item = { id: item.id, title: item.title };
          return item;
        })
      });
    }
    catch(error){
      console.log(error);
    }
     /*Axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        this.response = response.data.map(item => {
          item = { id: item.id, title: item.title };
          return item;
        });
      })
      .catch(error => console.log(error));*/ 
  },
  computed: {
    filteredItems() {
      return this.displayData.filter(element => {
        return element.title.match(this.filter);
      });
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
</style>
