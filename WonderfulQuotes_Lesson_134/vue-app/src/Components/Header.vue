<template>
    <div class="row">
        <div class="col-sm-12">
            <b-progress :value="currentValue" :max="maxValue" show-progress animated></b-progress>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        currentValue: {
            default: 0
        },
        maxValue: {
            default: 10
        }
    }
}
</script>
<style scoped>
div {
    margin: 2px 0px;
    width: auto;
}
</style>
