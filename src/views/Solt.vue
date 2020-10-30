<template>
    <div class="solt">
        <span>回首</span>
        
        
        <!--v-slot绑定一个slot的命名name，并且绑定子组件设置的参数，default为默认的slot命名，子组件用v-bind绑定数据  -->
        <solt-child :object="object" >

            <span></span>
            <!-- 此处可以写为#header -->
            <!-- <template #default="{row:image}">
                童话
                <div>{{image}}</div>
            </template> -->

            <!-- <template>
                里的
            </template> -->

            <template #footer>
                故事都是骗人的1112222
            </template>
        </solt-child>
    </div>
</template>

<script>
import soltChild from '@/components/pages/soltChild'; 
export default{
    name:'solt',
    components: {
        soltChild
    },
    data(){
        return {
            object:{"first":{"id":'0',"name":"夜雨声烦","role":"剑客"},
            "second":{"id":'1',"name":"沐雨橙风","role":"枪炮师"},
            "third":{"id":'2',"name":"石不转","role":"牧师"},
            "fourth":{"id":'3',"name":"索克萨尔","role":"术士"},
            "fifth":{"id":'4',"name":"一叶知秋","role":"战斗法师"},},
            arr:"童话"
        }
    }
}
</script>


<style>

</style>