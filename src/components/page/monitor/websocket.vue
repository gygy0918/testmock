
<template>
    <div class="post-list">
        <div>
            websockettest
        </div>
        <!--<author v-if="authorId" :id="authorId"></author>-->
    </div>
</template>

<script>
// Component def
    export default {
        // Local state
        data: () => ({
            data: [],
            loading: 0,
            authorId: null,
        }),
        // Apollo GraphQL

        created(){
//            debugger;
//            let ws = new WebSocket("ws://127.0.0.1:2000");//连接服务器
//            ws.onopen = function(event){
//                alert("已经与服务器建立了连接rn当前连接状态："+this.readyState);
//            };
//            ws.onmessage = function(event){
//                alert("接收到服务器发送的数据：rn"+event.data);
////                ws.send(event.data);
//            };
//            ws.onclose = function(event){
//                alert("已经与服务器断开连接rn当前连接状态："+this.readyState);
//            };
//let lightId=9;
//            this.$ajax(
//                {
//                    method: 'get', //请求方式
//                    url: 'http://10.103.241.154:8080/lightInfo/page',
//                    params:{
//                        page:1,
//                        size:5
//                    },
//                }).then((res)=>{
//                console.log('结果',res)
//            })
////发送请求
//            var goEasy = new GoEasy({
//                appkey: "BS-6d10683de85143f488ca00f6ea1c04b7",
////                onConnected: function () {
////                    alert("成功连接GoEasy。");
////                },
//            });
//            goEasy.subscribe({
//                channel: "light_info",
//                onMessage: function (message) {
////                    debugger;
////                    alert("Channel:" + message.channel + " content:" + message.content);
////                    结果message.content
//                    console.log( '888888',message.content)
//                    message.content.map((item)=>{
//                        let position=[]
//                        if(item.longitude&&item.latitude){
//                            position.push(item.longitude);
//                            position.push(item.latitude);
//                            item.position=position;
//                        }
//                        console.log('test', res.results);
//                        this.data=res;
//                    })
//                }
//            });
//            let res={
//                "results": [
//                    {
//                        "lightId": "0",
//                        "lightNumber": "10",
//                        "lightName": "灯10",
//                        "location": "主楼",
//                        "state": "1",
//                        "voltage": 210,
//                        "electricity": 1.84,
//                        "power": 385.83,
//                        "longitude": 116.358017,
//                        "latitude": 39.961335,
//                        "createTime": "2018-01-19 16:27:00",
//                        "lastUpdate": "2018-01-19 19:44:05"
//                    },
//                    {
//                        "lightId": "1",
//                        "lightNumber": "01",
//                        "lightName": "灯1",
//                        "location": "教三周边",
//                        "state": "1",
//                        "voltage": 201,
//                        "electricity": 1.36,
//                        "power": 273.02,
//                        "longitude": 116.356348,
//                        "latitude": 39.960368,
//                        "createTime": "2018-01-19 13:13:06",
//                        "lastUpdate": "2018-01-19 19:44:06"
//                    },
//                    {
//                        "lightId": "2",
//                        "lightNumber": "02",
//                        "lightName": "灯2",
//                        "location": "教三周边",
//                        "state": "1",
//                        "voltage": 205,
//                        "electricity": 1.6,
//                        "power": 328.01,
//                        "longitude": 116.35645,
//                        "latitude": 39.960405,
//                        "createTime": "2018-01-19 15:56:18",
//                        "lastUpdate": "2018-01-19 19:44:06"
//                    },
//                    {
//                        "lightId": "3",
//                        "lightNumber": "03",
//                        "lightName": "灯3",
//                        "location": "教三周边",
//                        "state": "1",
//                        "voltage": 220,
//                        "electricity": 1.5,
//                        "power": 330,
//                        "longitude": 116.35645,
//                        "latitude": 39.960319,
//                        "createTime": "2018-01-19 16:26:59",
//                        "lastUpdate": "2018-01-20 18:18:02"
//                    }]
//            };
            //处理经纬度字符串
//            res.results.map((item)=>{
//                let position=[]
//                if(item.longitude&&item.latitude){
//                    position.push(item.longitude);
//                    position.push(item.latitude);
//                    item.position=position;
//                }
//                console.log('test', res.results);
//                this.data=res;
//            })


        }
    };
</script>
