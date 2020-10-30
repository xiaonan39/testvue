<template>
    <div class="soltChild">
        <p @click = "clickFather">若如初见为谁而归</p>
        <!-- 此处的template中不能直接写#header，会报错 -->
        <table :data="data" >
            <template name="footer">
                <slot name="footer" v-for="item in data" :item="item"></slot>
            </template>
            <template >
                <slot name="default" :row="row" :index="index" ></slot>
            </template>
            <!-- 下方的template中写name="footer"无用，父组件中不会显示出来，需要在slot标签中写 -->
            <!-- <template name="footer">
                <slot name="footer"></slot>
            </template> -->
        </table>
    </div>
</template>

<script>
    export default{
        name:'solt-child',
        props: {
            object:{type:Object},
        },
        data(){
            return {
                desc:"",
                row:null,
                index:0,
                data:[{id:"0",name:"夜雨声烦",role:"剑客"},
                {id:"1",name:"石不转",role:"牧师"},
                {id:"2",name:"索科萨尔",role:"术士"},
                {id:"3",name:"沐雨橙风",role:"枪炮师"},
                {id:"4",name:"一叶知秋",role:"战斗法师"}]
            }
        },
        methods: {
            clickFather(){
                console.log(this.object)
            },
            clickFather(){
                console.log("22222222")
            }
        }
    }
</script>

<style scoped>
.soltChild{
    background:cyan;
}
</style>