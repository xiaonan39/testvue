<template>
    <div id = "el-header">
        <div class = "header_logo">
            <img src = "@/assets/u89.png">
        </div>
    </div>
</template>

<script>  
    export default {
        name:"el-header",
    }
</script>

<style scoped>
    #el-header {
        width:100%;
        height:50px;
    }
    .header_logo{
        text-align: left;
        background: #fff;
        height:100%;
        font-size: 20px;
    }
    /* .header_logo img{
        height:100%;
    } */
</style>