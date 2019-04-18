
<template>
<div>
    <div id="on" @click="switched(true)" :class="{active : isOn}">On</div>
    <div id="off" @click="switched(false)" :class="{active : !isOn}">Off</div>
</div>
</template>

<script>
export default {
    props: {
        isOn: true
    },
    methods:{
        switched (v) {
            this.isOn = v;
            this.$emit('input', this.isOn);
        }
    }
}
</script>
<style scoped>
    #on, #off{
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        text-align: center;
        box-sizing: content-box;
        cursor: pointer;
        margin: 10px -2px;
    }

    #on:hover, #on.active{
        background-color: lightgreen;
    }

    #off:hover, #off.active{
        background-color: lightcoral;
    }
</style>