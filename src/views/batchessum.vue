<template>
        <div class= "batchessum">
                        batchessum
                <el-input class = "einput" v-model="input" placeholder="请输入内容"></el-input>
        </div>
</template>
            
<script>

export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
        .batchessum{
                height:100%; 
                width: 100%;
                text-align: left; 
        }
        .batchessum input {
                width:30%;
                height:100%;
        }
</style>