<template>
    <div class = "main_aside" >
        <div class = "main_aside_left">
            <table>
                <tr>
                    <th>Data</th>
                    <th>Progect ID</th>
                    <th>Type</th>
                </tr>
                <tr class = "table_session">
                    <td colspan="3">
                        <li>2019/10/21
                            <b>3</b>
                            <span>session</span>
                        </li>
                    </td>
                </tr>
                <tr v-for="item in tableData">
                    <td>{{item.date}}</td>
                    <td @click="obtain_data(item.project.list)">{{item.project.Id}}</td>
                    <td>{{item.type}}</td>
                </tr>
            </table>
                <!-- <el-table
                ref="singleTable"
                :data="tableData"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 100%">
                <el-table-column
                  property="date"
                  label="date"
                  width="40%">
                </el-table-column>
                <el-table-column
                  property="name"
                  label="project ID"
                  width="30%">
                </el-table-column>
                <el-table-column
                  property="address"
                  label="type">
                </el-table-column>
              </el-table> -->
        </div>
        <div class = "main_aside_right">  
            <div class = "main_aside_right_top">
                <ul>
                    <li>
                        <div class = "main_aside_right_top_img">
                            <b>Timepoints:</b>
                            <img src = "" >
                        </div>
                    </li>
                    <li>
                        <b>Barcode:</b>
                        <span></span>                            
                    </li>
                    <li>
                        <b>Scanned:</b>
                        <span></span>
                    </li>
                    <li>
                        <b>ID:</b>
                        <span></span>
                    </li>
                    <li>
                        <b>Scan profile:</b>
                        <span></span>
                    </li>
                    <li>
                        <b>Microplate:</b>
                        <span></span>
                    </li>
                    <li>
                        <b>Operator:</b>
                        <span></span>
                    </li>
                </ul>
                <div class = "main_aside_right_top_notes" >
                    <b>Notes:</b>
                    <img style="width:100px;height:100px;float:right;" src = "" >
                </div>
                <div class = "main_aside_right_top_buttons">
                    <button> Open Full Results</button>
                    <button> Save Report…</button>
                    <button> Export clone list…</button>
                </div>
            </div>
            <div class = "main_aside_right_table">
                {{showmodal}}
                <Etable :list="list" :showmodal="showmodal" v-on:change_modal="change_fater"
                />  
            </div>
        </div>   
        <Detail v-if="showmodal" :showmodal="showmodal" @change_detail="change_fater"/>  
    </div>
</template>

<script>
    import Etable from '@/components/pages/table.vue';
    import Api from '@/common/api/api.js';
    import Detail from '@/components/pages/details.vue';

export default {
    name:"main_aside",
    components: {
        Etable,Detail
    },
    data() {
      return {
        list:null,
        showmodal:false,
        tableData: [{
          date: '2019-10-17',
          project:{"Id":"sheng","list":{"list":"http://p.qpic.cn/music_cover/2BoMq9QFI0489p1qIiaDYek4UlGibZ8yztm3XH9LapLYHwWldaTOYt1g/600?n=1","tim":"img","bar":"one","sca":"two","Id":"ID","scan":"three","mic":"four","oper":"five"}
    },
          type: 'Costar96'
        }, {
          date: '2019-10-17',
          project: {"Id":"tong",
            "array":"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E7%BB%BF%E8%89%B2%E5%A3%81%E7%BA%B8&hs=2&pn=1&spn=0&di=99440&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=2477295793%2C3932990727&os=2275448177%2C4154071541&simid=4129018881%2C650689467&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=wallpaper&bdtype=0&oriquery=%E7%BB%BF%E8%89%B2%E5%A3%81%E7%BA%B8&objurl=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F4%2F55753eac4f746.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Botg9aaa_z%26e3Bv54AzdH3Fowssrwrj6_kt2_m9m8a_z%26e3Bip4s&gsm=&islist=&querylist="
        },
          type: 'Costar96'
        }, {
          date: '2019-10-17',
          project:{Id:"zhi","array":
      ["http://p.qpic.cn/music_cover/8eiaDBJ27yYicpMibYZmmEdNEPOTSqwhACUXzSmicaorPE0grcic0ibrqA9A/600?n=1",
      "http://p.qpic.cn/music_cover/drZnBOxDNzaK3s5ZzZNDxdZ4HdXiaRbCwTkJktgC0JRUwJA6JAJAZ6g/600?n=1",
      "http://p.qpic.cn/music_cover/AhbCa0vazSRDjEJhYwthgjxuuCvKe2gibhbfdQrrrcLaOFjFFiceBNpw/600?n=1",
      "http://p.qpic.cn/music_cover/0YKXV0pAP6fzSlwyxGcKKdYYDFZkhQSNM9KeEibFajvgp3tnlvdpAlg/600?n=1"]
    },
          type: 'Costar96'
        }, {
          date: '2019-10-17',
          project:{Id:"neng",array:[
      "http://p.qpic.cn/music_cover/8eiaDBJ27yYicpMibYZmmEdNEPOTSqwhACUXzSmicaorPE0grcic0ibrqA9A/600?n=1",
      "http://p.qpic.cn/music_cover/drZnBOxDNzaK3s5ZzZNDxdZ4HdXiaRbCwTkJktgC0JRUwJA6JAJAZ6g/600?n=1",
      "http://p.qpic.cn/music_cover/AhbCa0vazSRDjEJhYwthgjxuuCvKe2gibhbfdQrrrcLaOFjFFiceBNpw/600?n=1",
      "http://p.qpic.cn/music_cover/0YKXV0pAP6fzSlwyxGcKKdYYDFZkhQSNM9KeEibFajvgp3tnlvdpAlg/600?n=1"
    ]},
          type: 'Costar96'
        }],     
      }
    },
    created () {
        this 
    },
    methods: {
        obtain_data(val){
            this.list = val;
            console.log(this.list)
        },
        change_fater(data){
            this.showmodal = data;
            console.log(this.showmodal)
        },
    }
}
</script>

<style>
    .main_aside{
        display: flex;
        width:100%;
        text-align: left;
    }
    /* 左边的项目目录位置 */
    .main_aside_left{
        width:27%;
        height:100%;
    }
    .main_aside_left table{
        width:100%;
    }
    .main_aside_left th{
        width:33%;
        text-align: center;
        font-size: 14px;
    }
    .table_session{
        font-weight: 700;
        background: lightblue;
    }
    .main_aside_left td{
        font-size: 12px;
    }
    /* 右边的主要的table部分 */
    .main_aside_right{
        overflow: hidden;
        width:100%;
        background: #ccc;
    }
    /* el-menu{
        text-align: left;
    } */
    .main_aside_right_top{
        display:flex;
        

    }
    .main_aside_right_top ul{
        float:left;
    }
    .main_aside_right_top ul li{
        width:30%;
        float:left;
        margin-right: 5px;
    }
    .main_aside_right_top ul li b{
        margin-bottom: 15px;
        display: inline-block;
    }
    .main_aside_right_top_img{
        display: inline-block;
        width:100%;
        height:100%;
    }   
    .main_aside_right_top_img b{
        float:left;
    }
    .main_aside_right_top_img img{
        width: 75px;
        height: 100px;
        border: 1px solid #fff;
    }
    .main_aside_right_top_notes{
        display:flex;
    }
    .main_aside_right_top_buttons{
        width:10%;
        height:5%;
    }
    .main_aside_right_top_buttons button{
        width:100%;
        background: #fff;
        margin-bottom: 5px;
        border-radius: 5px;
        color:#ccc;
        overflow: hidden;/*超出部分隐藏*/
        white-space: nowrap;/*不换行*/
        text-overflow:ellipsis;/*超出部分文字以...显示*/
    }
    .main_aside_right_table{
        height:100%;
        /* background: lightblue; */
    }
    /* element中的css样式，未在本页面中显示 */
   .el-table__body{
       width:100% !important
   }
</style>