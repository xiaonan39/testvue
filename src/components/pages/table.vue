<template>
    <!-- <div class = "e-table"> -->
    <table class = "">
        <tr>
            <th v-for="(th,index) in tdlist" :key="index">{{th}}</th>     
        </tr>
        <tr v-for="(tr,index) in trlist" :key="index">
            <td v-for="(th,index) in tdlist" >
                <a href = "" @click="godetail"
                @mouseover="hover_data">
                    <img :src = "list">
                </a>
            </td>
        </tr>
    </table>
    <!-- </div> -->

</template>

<script>
    export default{
        props:[
            'list'
        ],
        data(){
            return{
                tdlist:[1,2,3,4,5,6,7,8,9,10,11,12],
                trlist:[1,2,3,4,5,6,7,8]
            }
        },
        methods:{
            godetail(){
                this.$router.push('/home/detail')
            },
            hover_data(){
                console.log()
            }
        },
    }
</script>

<style scoped>
    
   table tr th,table tr td{
       width:8%;
       text-align: center;
   }
   table tr td{
       background: lightblue;
       border-radius: 50%;
   }
   table tr td a{
       width:100%;
       height:100%;
   }
   table tr td a img{
       width:65px;
       height:65px;
       border-radius: 50%;
   }
</style>