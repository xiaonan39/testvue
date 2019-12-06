<template>
    <div class = "scan">
        <div class = "scan_video">
            <div class = "scan_video_preview">
                <b>Preview</b>
                <div class = "scan_video_preview_img" ref = "video">

                </div>
            </div>
            <div class = "scan_video_message">
                <b>Picture Message</b>
                <div class = "scan_video_message_infor">
                    信息
                </div>
                <div class = "scan_video_message_btn">
                    <button class = "start" @click="startvideo">start</button>
                    <button class = "end">end</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"scan",
        data:function(){
            return{

            }
        },
        methods: {
            startvideo(){   
                let video = this.$refs.video//获取要放视频的video标签节点
            if (navigator.mediaDevices.getUserMedia === undefined) { //判断当前设备是否有摄像设备
                navigator.mediaDevices.getUserMedia = function (constraints) {
                // 首先获取现存的getUserMedia(如果存在)
                var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia
                // 有些浏览器不支持，会返回错误信息
                // 保持接口一致
                if (!getUserMedia) {
                    return Promise.reject(new Error('getUserMedia is not implemented in this browser'))
                }
                // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
                return new Promise(function (resolve, reject) {
                    getUserMedia.call(navigator, constraints, resolve, reject)
                })
                }
            }
            var constraints = { audio: false, video:true }
            navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                console.log(stream)
                // 旧的浏览器可能没有srcObject
               /*  if ('srcObject' in video) {
                    video.srcObject = stream

                } else {
                // 避免在新的浏览器中使用它，因为它正在被弃用。
                    video.src = window.URL.createObjectURL(stream)
                } */
                video.onloadedmetadata = function (e) {
                    console.log("dakasgsfdgsfdi")

                    video.play() //打开摄像头
                    console.log("dakai")
                }
            }).catch(err => {
                console.log("报错123",err)
            })
            }
        }
    }
</script>

<style scoped>
    .scan{
        background:#f2f0f5;
        width: 90%;
    }
    .scan_video{
        margin:10px 0 0 10px;
        background:#fff;
        border:1px solid #333;
        display: flex;
    }
    .scan_video b{
        height:50px;
        line-height: 50px;
    }
    .scan_video_preview{
        width:50%;
        display: flex;
        flex-direction: column;
    }   
    .scan_video_preview_img{
        height:400px;
        width:500px;
        border:1px solid #ccc;
    }
    .scan_video_message{
        display: flex;
        flex-direction: column;
    }
    .scan_video_message_infor{
        width:400px;
        height:75%;
        background: #ccc;
        overflow: auto;
    }
    .scan_video_message_btn{
        margin-top :10px;
    }
    .end{
        margin-left:15px;
    }
</style>