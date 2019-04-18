<template>
    <div>
        <textarea class="quote">{{ textValue }}</textarea>
    </div>
</template>
<script>
export default {
    props: {
        textValue: {
            default: 'Insert value'
        },
        id: {
            default: 0
        }
    }
}
</script>
<style scoped>
div{
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 5px;
}

textarea{
    font-style: italic;
    text-align: center;
    width: auto;
    height: auto;
    border: 1px solid lightblue;
    box-shadow: 1px 1px 2px black;
    padding: 5px;
    border-radius: 5px;
}

.quote {
    cursor: pointer;
}

.quote:hover{
    background-color: #ffe2e2;
}
</style>
