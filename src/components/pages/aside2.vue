<template>
    <div class = "main_aside">
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理shenmde</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
        
        <div class = "main_aside_right">
            <h5>右边的</h5>
            <div class = "main_aside_right_top">
                <!-- <div class = "main_aside_right_top_img">
                    <b>Timepoints:</b>
                    <img src = "" >
                </div> -->
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
            <div class = "main_aside_right_bottom">
                <Etable/>
            </div>
        </div>             
    </div>
</template>
    
<script>
import Etable from '@/components/pages/table.vue';


export default {
    name:"main_aside",
    components: {
        Etable,
    },
    data() {
        return {
            tabPosition: 'left'
        };
    }

}
</script>

<style>
    .main_aside{
        display: flex;
        width:100%;
        text-align: left;
    }
    .tac{
        width:30%;
        display: flex;
        height:100%;
    }
    .tac h5{
        font-size: 1rem;
    }
    .main_aside_left{
        width:30%;
    }
    .main_aside_right{
        width:100%;
        background: #ccc;
    }
    el-menu{
        text-align: left;
    }
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
        min-width: 75px;
        min-height: 100px;
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
    .main_aside_right_bottom{
        height:100%;
    }
    /* element中的css样式，未在本页面中显示 */
    .el-table__body{
        width:100% !important
    }
</style>