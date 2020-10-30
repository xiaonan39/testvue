<template>
    <div class = "e-table">
        <table class = "">
            <tr>
                <th v-for="(th,index) in tdlist" :key="index">{{th}}</th>     
            </tr>
            <tr v-for="(tr,index) in trlist" :key="index">
                <td v-for="(th,index) in list?list:tdlist" >
                    <span @click="change" @mouseenter="hover(list)"> 
                        <img :src ="th">
                    </span>
                </td>
            </tr>
        </table>   
    </div>
</template>
  
<script>
    import Details from '@/components/pages/details.vue';
    export default{
        props:[
            'list',
            'showmodal',
            'image',   //测试cytomine的v-bind
            'id',       //测试cytomine的v-bind
        ],
        components: {
            Details
        },
        data(){
            return{
                tdlist:[1,2,3,4,5,6,7,8,9,10,11,12],
                trlist:[1,2,3,4,5,6,7,8],
            }
        },
        watch: {
            
        },
        methods:{
            change(){
                this.$emit('change_modal',"true")
            },
            hover(val){
                this.$emit('td_hover',val)
            }
        },
        created(){
            // console.log(this.viewer+this.image+"----"+this.id)  //测试cytomine的v-bind
        }
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