<template>
  <div id="app" class="container col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <h1>Wonderful Quote</h1>
    <app-header :currentValue="currentQuote" :maxValue="maxQuote"></app-header>
    <switch-component v-model="enableButton"></switch-component>
    <div class="input" >
      <b-input-group size="sm" center prepend="Edit the MaxQuote">
        <b-form-input v-model="maxQuote"></b-form-input>
        <b-input-group-append>
          <b-btn :disabled="!enableButton" variant="success" @click="insertQuote">Button</b-btn>
        </b-input-group-append>
      </b-input-group>
    </div>
    <app-quote-grid :quotes="quotes" @delQuote="deleteQuote($event)"></app-quote-grid>
  </div>
</template>

<script>
import Quote from './Components/Quote.vue';
import QuoteGrid from './Components/QuoteGrid.vue';
import Header from './Components/Header.vue';
import Switch from './Components/Switch.vue';

export default {
  name: 'app',
  data () {
    return {
      maxQuote:10,
      currentQuote: 0,
      quotes: [],
      enableButton: true
    }
  },
  components: {
    appQuote: Quote,
    appQuoteGrid: QuoteGrid,
    appHeader: Header,
    switchComponent: Switch
  },
  methods:{
    insertQuote(){
      if (this.currentQuote == this.maxQuote) {
          console.log('You reached the maxQuote')
      }
      else{
          console.log(this.currentQuote)
          this.currentQuote++;
          this.quotes.push(this.currentQuote);
      } 
    },
    deleteQuote(index) {
      this.quotes.splice(index,1)
      this.currentQuote--;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 10px;
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

.input {
  font-style: italic;
  min-width: 500px;
  width: 15%;
  text-align: center;
}


</style>
