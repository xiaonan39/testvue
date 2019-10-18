<template>
    <!-- <div class = "e-table"> -->
    <table style="width:100%;background: powderblue;">
        <tr>
            <th v-for="(th,index) in tdlist" :key="index">{{th}}</th>     
        </tr>
        <tr v-for="(tr,index) in trlist" :key="index">
            <td v-for="(th,index) in tdlist" :key="index">
                <a href = "" v-on:click="godetail">
                    {{name}}
                    <img src = "">
                </a>
            </td>
        </tr>
    </table>
    <!-- </div> -->

</template>

<script>
    export default{
        props:{
            name
        },
        data(){
            return{
                tdlist:[1,2,3,4,5,6,7,8,9,10,11,12],
                trlist:[1,2,3,4,5,6,7,8]
            }
        },
        methods:{
            godetail(){
                this.$router.push('/home/detail')
            }
        },
        mounted(){
            
        }
    }
</script>

<style scoped>
   table{

   }
   table tr th,table tr td{
       width:8%;
       text-align: center;
   }
   table tr td{
       height:50px;
       background: lightblue;
   }
</style>