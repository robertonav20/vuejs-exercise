<template>
    <div>
            <h1>AppOne</h1>
            <slot name="title"></slot>
    </div>
</template>
<script>
export default {
    name: 'appOne'
}
</script>
<style scoped>

div {
  border: 2px solid gainsboro ;
  width: auto;
  background-color: lightblue;
  padding: 10px;
  margin: 5px;
  text-align: center;
  box-shadow: 1px 1px 2px black;
}

</style>