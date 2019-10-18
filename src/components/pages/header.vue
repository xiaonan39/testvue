<template>
    <div id = "e-header">
        <div class = "header_logo">
            <p>生仝智能</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"header",
    }
</script>

<style scoped>
    #e-header {
        width:100%;
        height:10%;
    }
    .header_logo{
        background: lightblue;
        height:100%;
        font-size: 20px;
        padding:20px;
    }
    .header_logo p{
        height:100%;
        text-align: left;
        line-height: 2rem;
    }
</style>