<template>
    <div class="row">
            <app-quote v-for="(q, index) in quotes" :id="q" :textValue="'Component' + q" @click.native="removeQuote(index)"></app-quote>
    </div>
</template>
<script>
import Quote from './Quote.vue';

export default {
    props: ['quotes'],
    components:{
        appQuote: Quote
    },
    methods: {
        removeQuote: function(index) {
            this.$emit('delQuote',index);
        }
    }
}
</script>
<style>

</style>
