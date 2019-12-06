<template>
    <div class = "el-aside" >
        <div class = "aside_coat">
            <div class = "el-aside_twonav">
                <div class = "el-aside_twonav_select">
                    <div class = "el-aside_twonav_select_scan">
                        <span>Scan profile</span>
                        <!-- <el-select class = "folder" @change="floder_click"  placeholder="请选择">
                            <el-option
                                v-for="(item,floder_index) in floder"
                                :key="floder_index"
                                :value="floder_index">
                                {{item}}{{floder_index}}
                            </el-option>
                        </el-select> -->
                        <select class = "floder" @change="floder_click"> 
                            <option v-for="(item,floder_index) in floder" :key="floder_index" :value ="floder_index" >{{item}}--{{floder_index}}</option>
                        </select>
                    </div>
                    <div class = "el-aside_twonav_select_date">
                        <span>Date</span>
                        <!-- <el-select class = "file" 
                        @change="file_click"
                        filterable placeholder="请选择">
                            <el-option
                                v-for="(item,file_index) in file"
                                :key="file_index"
                                :value="file_index">
                            </el-option>
                            {{item}}
                        </el-select> -->
                        <select class = "file" @change="file_click">
                            <option :value = "file_index" v-for="(item,file_index) in file" :key="file_index">{{item}}--{{file_index}}</option>
                       </select>
                    </div>
                </div>
                <div class = "el_aside_twonav_table">
                    <table v-for="(item,index) in select['table']" :key="index+100">
                        <tr>
                            <th v-for="(item1,key,th_index) in item['th']" :key="th_index">{{item1}}</th>
                        </tr>
                        <tr v-for="(item2,key,td_index) in item['td']" :key="td_index">
                            <td >{{item2.date}}</td>
                            <td @click="obtain_data(list)">{{item2.Id}}</td>
                            <td>{{item2.type}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class = "el-aside_right">  
                <div class = "el-aside_right_top">
                    <ul>
                        <li>
                            <div class = "el-aside_right_top_img">
                                <b>Timepoints:</b>
                                <img src = "" >
                            </div>
                        </li>
                        <li>
                            <b>Barcode:</b>
                            <span>{{son_hover_data}}</span>                            
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
                    <div class = "el-aside_right_top_notes" >
                        <b>Notes:</b>
                        <img style="width:100px;height:100px;float:right;" src = "" >
                    </div>
                    <div class = "el-aside_right_top_buttons">
                        <button> Open Full Results</button>
                        <button> Save Report…</button>
                        <button> Export clone list…</button>
                    </div>
                </div>
                <div class = "el-aside_right_table">
                    {{showmodal}}
                    <Etable :list="letter" :showmodal="showmodal" @change_modal="change_aside" @td_hover="aside_hover"
                    />  
                </div>
            </div>   
            <Detail v-show="showmodal" :showmodal="showmodal" @change_detail="change_aside"/>  
        </div>
    </div>
</template>

<script>
    import Etable from '@/components/pages/table.vue';
    import Api from '@/common/api/api.js';
    import jsondata from '@/common/api/data2.js';
    import Detail from '@/components/pages/details.vue';

export default {
    name:"el-aside",
    components: {
        Etable,Detail
    },
    data() {
      return {
<<<<<<< HEAD
        list:null,   //总的数据
        letter:null,   //传递给详情table的变量
        showmodal:false,   //控制modal显示的开关
        son_hover_data:null,
        floder:null,    //存放类似文件夹的数据；
        floder_value:null,  //文件夹传递给文件的变量
        file:null,        //存放类似文件的数据；
        file_value:null,   //文件传递给table的变量
        select:{
            "table": [
            {
                "th":["date","Id","type"],
                "td":[
                {"date":"2019-10-28","Id":"123","type":"96孔板"},
                {"date":"2019-10-28","Id":"1234","type":"96孔板"},
                {"date":"2019-10-28","Id":"12345","type":"96孔板"}
                ]
            },
            {
                "th":["date","Id","type"],
                "td":[
                {"date":"2019-10-29","Id":"111","type":"96孔板"},
                {"date":"2019-10-29","Id":"1222","type":"96孔板"},
                {"date":"2019-10-29","Id":"1333","type":"96孔板"}
                ]
            },
            {
                "th":["date","Id","type"],
                "td":[
                {"date":"2019-10-30","Id":"2111","type":"96孔板"},
                {"date":"2019-10-30","Id":"2222","type":"96孔板"},{"date":"2019-10-30","Id":"12345","type":"96孔板"}
                ]
            },
            {
                "th":["date","Id","type"],
                "td":[
                {"date":"2019-10-31","Id":"32333","type":"96孔板"},
                {"date":"2019-10-31","Id":"3222","type":"96孔板"},
                {"date":"2019-10-31","Id":"34444","type":"96孔板"}
                ]
            },
            ]
        }, 
      }
    },
    created () {
        this.initdata();
    },
    methods: {
        initdata(){
            console.log("ahadf");
            /* 在public目录中添加了data.js作为假数据，记得删除 */
            /* this.$axios.get('').then((data)=>{
                this.list = jsondata.data.list;
                console.log(this.list)
            }) */ 
            setTimeout(()=>{
                this.list = jsondata;
                console.log(this.list);
                this.renderfloder();
            },500)
        },
        /* 传递给子页面table的变量 */
        obtain_data(val){
            this.letter = val;
            var arr = Object.keys(this.letter);

            console.log(arr);
        },
        /* 打开modal页面的开关 */
        change_aside(data){
            this.showmodal = !this.showmodal;
            console.log(this.showmodal)
        },
        /* 划过图片时显示的简略信息 */
        aside_hover(data){
            this.son_hover_data = data?data['100000']['110000']:"";
            console.log(this.son_hover_data);
        },
        /* 选择框的渲染 */
        renderfloder(){
            this.floder=this.list["100000"];
            console.log(this.list['110100'])
            this.renderfile(110100) 
        },
        floder_click(eve){
            this.floder_value =eve.target.value;
            this.renderfile(this.floder_value) ;
        },
        renderfile(value){
            this.file = this.list[value];
            console.log(this.file);
        },
        file_click(eve){
            this.file_value = eve.target.value;
            console.log(this.file_value);
        },
=======
        tableData: [{
          date: '2019-10-17',
          name: 'shengtong',
          address: 'Coming Costar96'
        }, {
          date: '2019-10-18',
          name: 'shengtong',
          address: 'Coming Costar96'
        }, {
          date: '2019-10-197',
          name: 'shengtong',
          address: 'Coming Costar96'
        }, {
          date: '2019-10-117',
          name: 'shengtong',
          address: 'Coming Costar96'
        }],
        currentRow: null
      }
    },
    mounted() {
        
    },
    watch: {
        data(){
          this.getData()  
        }
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      getData(){
          let api = ''
          let model ={
              data: '',
              name:""
          }
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        console.log(val)
        this.data = val.data
      },
      getName(val){

      }
>>>>>>> master
    }
}
</script>

<style>
    .el-aside{
        overflow: hidden;
        background: #f2f0f5;
        width:90%;
    }
    .aside_coat{
        margin:10px 0 0 10px;
        display: flex;
        text-align: left;
        height: 100%;
        padding:30px 0 30px;
    }
    /* ------------------------左边的项目目录位置 */
    .el-aside_twonav{
        flex-direction: column;
        background: #fff;
        display: flex;
        overflow: auto;
        width:25%;
        height:100%;
    }
    /* ------------------------>选择框 */
    .el-aside_twonav_select{
        margin: 10px 0 0 10px;
        display: flex;
        flex-direction: column;
    }
    .el-aside_twonav_select_scan{
        margin-bottom: 5px;
    }
    .el-aside_twonav_select span{
        float: left;
        width:35%;
        font-size: 14px;
    }
<<<<<<< HEAD
    .el-scrollbar{
        background: #fff;
    }
    select{
        display: inline-block;
        width:60%;
    }
    select input{
=======
    .main_aside_right{
        display: flex;
    flex-direction: column;
>>>>>>> master
        width:100%;
    }
    /* -------------------->选择框的下拉框 */
    .el-aside_twonav_select .el-select-dropdown{
        border:1px solid #ccc;
    }
    /* -------------------------------------->项目列表表格 */
    .el_aside_twonav_table{
        overflow:auto;
    }
    .el_aside_twonav_table table{
        margin-top:10px;
        width:98%;
        overflow:auto;
        border-collapse: collapse;
    }
    .el_aside_twonav_table th{
        background: #0096fa;
        width:33%;
        text-align: center;
        font-size: 14px;
    }
    .el-aside_twonav_table_session{
        font-weight: 700;
        background: lightblue;
    }
    .el-aside_twonav td{
        width:33%;
        text-align: center;
        font-size: 12px;
        border:1px solid #ccc;
    }
    /* ------------------->右边的主要的table部分 */
    .el-aside_right{
        width:74%;
        background: #ccc;
    }
    .el-aside_right_top{
        display:flex;
    }
    .el-aside_right_top ul{
        float:left;
    }
    .el-aside_right_top ul li{
        width:30%;
        float:left;
        margin-right: 5px;
        display: flex;
    }
    .el-aside_right_top ul li b{
        margin-bottom: 15px;
        display: inline-block;
    }
    .el-aside_right_top_img{
        display: inline-block;
        width:100%;
        height:100%;
    }   
    .el-aside_right_top_img b{
        float:left;
    }
    .el-aside_right_top_img img{
        width: 75px;
        height: 100px;
        border: 1px solid #fff;
    }
    .el-aside_right_top_notes{
        display:flex;
    }
    .el-aside_right_top_buttons{
        width:10%;
        height:5%;
    }
    .el-aside_right_top_buttons button{
        width:100%;
        background: #fff;
        margin-bottom: 5px;
        border-radius: 5px;
        color:#ccc;
        overflow: hidden;/*超出部分隐藏*/
        white-space: nowrap;/*不换行*/
        text-overflow:ellipsis;/*超出部分文字以...显示*/
    }
    .el-aside_right_table{
        overflow: auto;
    }
    /* element中的css样式，未在本页面中显示 */
   .el-table__body{
       width:100% !important
   }
</style>