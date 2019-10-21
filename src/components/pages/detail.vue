<template>
    <div class = "detail">
            <el-page-header @back="goBack" content="详情页面">
            </el-page-header>
    </div>
</template>

<script>
    export default{
        goBack() {
            console.log('go back');
        }
    }
</script>



<style scoped>

    .detail{
        background:paleturquoise;
    }

</style>