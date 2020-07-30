<template>
        <div class = "scan">
            <div class = "scan_video">
                <div class = "scan_video_preview">
                    <b>Preview</b>
                    <video class = "scan_video_preview_img" ref = "video" autoplay>
    
                    </video>
                </div>
                <div class = "scan_video_message">
                    <b>Picture Message</b>
                    <canvas class = "scan_video_message_infor">
                        信息
                    </canvas>
                    <div class = "scan_video_message_btn">
                        <button class = "start" @click="startvideo">start</button>
                        <button class = "screenshot" @click="reCamera">screenshot</button>
                        <button class = "end" @click="closeCamera">end</button>
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
                    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMeddia || navigator.msGetUserMedia;
                    let that=this;
                    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({
                        video: true,
                        audio: true
                    }).then(function(stream) {
                        that.stream=stream;
                        that.cameraState=true;
                        that.stream = typeof stream.stop === 'function' ? stream : stream.getTracks()[1];
                        var video=$("video")[0];
                        var canvas=$("canvas")[0];
                        video.srcObject  = stream;
                        canvas.srcObject  = stream;
                        // canvas.play();
                        video.play();
                        }).catch(function(err) {
                            console.log(err);
                        })
                    }
                    },
                    //关闭摄像头
                    closeCamera(){
                        this.cameraState=false;
                        this.stream && this.stream.stop();
                    },
                    
                    //点击拍摄或集鸽拍摄
                    reCamera(foot_ring_sn){
                        var smallCanvas=$("canvas")[0];
                        var smallContext=smallCanvas.getContext("2d");
                        let smallVideo=$("video")[0];
                        smallContext.drawImage(smallVideo, 0, 0, 270, 200);
                        //拍好的图片显示
                        smallCanvas.toDataURL('image/png').split(",")[1]
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
            text-align: center;
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
        .screenshot{
            margin:0 15px;
        }
    </style> 