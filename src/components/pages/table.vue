<template>
    <div class = "e-table">
    <table class = "">
        <tr>
            <th v-for="(th,index) in tdlist" :key="index">{{th}}</th>     
        </tr>
        <tr v-for="(tr,index) in trlist" :key="index">
            <td v-for="(th,index) in tdlist" >
                <span @click="change">
                    <img :src = "list">
                </span>
            </td>
        </tr>
    </table>
    
</div>

</template>
  
<script>
    import Details1 from '@/components/pages/details1.vue';
    export default{
        props:[
            'list','showmodal'
        ],
        components: {
            Details1
        },
        data(){
            return{
                tdlist:[1,2,3,4,5,6,7,8,9,10,11,12],
                trlist:[1,2,3,4,5,6,7,8],
                showmodal:false,
            }
        },
        methods:{
            change(){
                this.$emit('change',"true")
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
   table tr td span{
       width:100%;
       height:100%;
   }
   table tr td span img{
       width:65px;
       height:65px;
       border-radius: 50%;
   }
</style>