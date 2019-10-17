<template>
    <!-- <div class = "e-table"> -->
    <table style="width:100%;height:100%;background: powderblue;">
        <tr v-for="(tr,index) in trlist" :key="index">{{tr}}
            <th v-for="(th,index) in tdlist" :key="index">{{th}}</th>     
        </tr>
        <tr>
            <td>
                <a href = "">
                    1
                    <img src = "">
                </a>
            </td>
        </tr>
    </table>
    <!-- </div> -->

</template>

<script>
    export default{
        data(){
            return{
                trlist:[1,2,3,4,5,6,7,8,9,10,11,12],
                tdlist:12
            }
        },
        method:{
            trloop(){
                var tr = trlist;
                console.log(tr)
            }
        },
        mounted(){
            this.trloop()
        }
    }
</script>

<style scoped>
   table{

   }
   table tr th,table tr td{
       width:9%;
       text-align: center;
   }
   table tr td{
       height:50px;
       background: lightblue;
   }
</style>