<template>
    <div >
        <div id="control" >
            开关
            <el-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949">
            </el-switch>
           <p style="margin-top: 20px;">亮度控制</p>
            <div class="block" style="width: 500px">
                <el-slider
                    v-model="value8"
                    :step="0.1"
                    :max="1"
                    show-input>
                </el-slider>
            </div>
        </div>
        <div id="container" style="float: left;width:800px; height:800px;margin:10px">室外</div>
        <div id="outer-box" style="margin-left: 620px;">
            <div id="eventInfo">事件信息</div>
        </div>
        <div id="panel">
            <div id="intro">
                <h5>事件监听</h5>
            </div>
            <ul id="my-list" ></ul>
        </div>
    </div>
</template>
<script src="http://webapi.amap.com/maps?v=1.3&key=70d7bf19a3d97be874adc1b3b76a07a8"></script>
<script src="http://webapi.amap.com/ui/1.0/main.js?v=1.0.11"></script>
<script>
    import AMap from 'AMap'
    export default {
        data(){
            return{
                value1: true,
                value2: true,
              value8: 0
            }

        },
        created(){
            var datainfo=[];
            this.$ajax(
                {
                    method: 'get', //请求方式
                    url: 'http://10.103.241.154:8080/lightInfo/page',
                    params:{
                        page:1,
                        size:10
                    },
                }).then((res)=>{
//                console.log('结果',res.data.data.results)
                datainfo=res.data.data.results;
                datainfo.map((item)=>{
                    let positions=[]
                    if(item.longitude&&item.latitude){
                        positions.push(item.longitude);
                        positions.push(item.latitude);
                        item.positions=positions;
                    }
//                this.datainfo=datainfo;
                    console.log('page',datainfo)
                    window.test=datainfo;
                })

            });
        },
        mounted: function () {
            this.$options.methods.inital.bind(this)();
//            var goEasy = new GoEasy({
//                appkey: "BS-6d10683de85143f488ca00f6ea1c04b7",
////                onConnected: function () {
////                    alert("成功连接GoEasy。");
////                },
//            });
//            window.ss=goEasy;
//            var datainfo = new Array(10);
//            var obj={};
//           ss.subscribe({
//                channel: "light_info",
//                onMessage: function (message) {
//                    obj=message.content;
//                   let id=JSON.parse(obj).lightId;
////                    console.log('message',message.content.lightId
//                    datainfo[id]=JSON.parse(obj);
//                    console.log('实时数组拼接',datainfo);
//                    window.test=datainfo;
//                }
//            });
        },

        methods: {
            inital: function () {
//                console.log('参数',data);
                //初始化地图对象，加载地图
                var clickListener,map = new AMap.Map("container", {
                    resizeEnable: true,
                    zoom: 16,
                });

                AMapUI.loadUI(['misc/MarkerList', 'overlay/SvgMarker', 'overlay/SimpleInfoWindow'],
                    function(MarkerList, SvgMarker, SimpleInfoWindow){
                        if (!SvgMarker.supportSvg) {
                            //当前环境并不支持SVG，此时SvgMarker会回退到父类，即SimpleMarker
                            alert('当前环境不支持SVG');
                        }
                        var markerList = new MarkerList({
                            //关联的map对象
                            map: map,
                            //列表的dom容器的id
                            listContainer: 'my-list',
                            //需要监听的列表节点事件
                            listElementEvents: ['click'],
                            //需要监听的marker事件
                            markerEvents: ['click', 'mouseout'],
                            //需要监听的infoWindow事件
                            infoWindowEvents: ['click', 'mouseover', 'mouseout'],
                            //返回数据项的Id
                            getDataId: function(dataItem, index) {
                                //index表示该数据项在数组中的索引位置，从0开始，如果确实没有id，可以返回index代替
                                console.log('check',dataItem.lightId)
                                return dataItem.index;
                            },
                            //返回数据项的位置信息，需要是AMap.LngLat实例，或者是经纬度数组，比如[116.789806, 39.904989]
                            getPosition: function(dataItem) {
                                return dataItem.positions;
                            },
                            //返回数据项对应的Marker
                            getMarker: function(dataItem, context, recycledMarker) {
                                var label = dataItem.lightId;
                                var flag=dataItem.state;
                                //存在可回收利用的marker
                                if (recycledMarker) {
                                    //直接更新内容返回
                                    recycledMarker.setIconLabel(label);
                                    return recycledMarker;
                                }
                                //返回一个新的Marker
                                return new SvgMarker(
                                    new SvgMarker.Shape.TriangleFlagPin({
                                        height: 30,
                                        strokeWidth: 1,
                                        strokeColor: '#ccc',
                                        fillColor: flag?'green':'red'
                                    }), {
//                                  iconLabel: label,
                                        containerClassNames: 'my-svg-marker',
                                        showPositionPoint: true
                                    })
                            },
                            //返回数据项对应的列表节点
                            getListElement: function(dataItem, context, recycledListElement) {

                                var tpl1= '<p><%- dataItem.location %><br/>楼层平面图：<a src="../../assets/logo.png" ></a></p>';
                                var tpl2 = '<div style="font-size:12px;overflow-y: scroll;"><%- dataItem.location %>室外</img>' +
                                    '<p>当前电压<%- dataItem.voltage %>V</p>' +
                                    '<p>当前电流<%- dataItem.electricity%>A</p>'+
                                    '<p>当前功率<%- dataItem.power%>W</p>'
                                     +
                                    '</div><br/>';
                                var tpl=flag?tpl1:tpl2
                                var content = MarkerList.utils.template(tpl, {
                                    dataItem: dataItem,
                                    dataIndex: context.index
                                });

                                if (recycledListElement) {
                                    //存在可回收利用的listElement, 直接更新内容返回
                                    recycledListElement.innerHTML = content;
                                    return recycledListElement;
                                }

                                //返回一段html，MarkerList将利用此html构建一个新的dom节点
                                return '<li>' + content + '</li>';
                            },
                            getInfoWindow: function(dataItem, context, recycledInfoWindow) {

                                if (recycledInfoWindow) {
                                    //存在可回收利用的infoWindow, 直接更新内容返回
                                    recycledInfoWindow.setInfoTitle(dataItem.lightName);
                                    recycledInfoWindow.setInfoBody(dataItem.state?'当前状态：正常':'当前状态：危险');
                                    return recycledInfoWindow;
                                }

                                //返回一个新的InfoWindow
                                return new SimpleInfoWindow({
                                    offset: new AMap.Pixel(0, -31),
                                    infoTitle: dataItem.lightName,
//                                    infoBody:  dataItem.state?'当前状态：正常':'当前状态：危险'
//                                    infoBody:  '电压：'+dataItem.voltage
                                    
                                });
                            }
                        })//对象创建完毕
                        markerList.on('listElementClick listElementMouseenter listElementMouseleave ' +'markerClick markerMouseover'+
                            'infoWindowClick infoWindowMouseover infoWindowMouseout',
                            function(event, record) {
                                console.log('事件信息event',event,'record',record)
                                console.log('record',record.listElement)
                                var $ = MarkerList.utils.$,
                                    template = MarkerList.utils.template;

//                                $('#eventInfo').html(template('<%- record.data.lightName+record.data.lightId%>' +
//                                    '<div class="eventType">电压：<%-record.data.voltage%></div>'+
//                                    '<div class="eventType">电流：<%-record.data.electricity%></div>'+
//                                    '<div class="eventType">功率：<%-record.data.power %></div>', {
//                                    event: event,
//                                    record: record
//                                }));
                            });
                        markerList.on('markerClick markerMouseover ',function (event, record) {
                            var pre=record.listElement;
                            pre.style.background='red';
                        })
//                  markerList.on('markerMouseout ',function (event, record) {
//                      record.listElement.style.background='';
//                  })
                        //监听选中改变
                        markerList.on('selectedChanged', function(event, info) {
                            info.selected.listElement.style.background='';
                            console.log('****event',event,'info', info);
                        });
                        var flag=0;
                        //构建一个数据项数组，数据项本身没有格式要求，但需要支持下述的getDataId和getPosition
//                        var data1 = [{
//                            id: '123',
//                            position: [116.358017, 39.961335],
//                            desc: '井盖_1',
//                            status:0,
//                            power:'30%',
//                            way:'WIFI',
//                            ower:'北京市国税局'
//                        }, {
//                            id: '234',
//                            position: [116.356348, 39.960368],
//                            desc: '井盖_2',
//                            status:1,
//                            power:'80%',
//                            way:'WIFI',
//                            ower:'北京房管局'
//                        }, {
//                            id: '345',
//                            position: [116.35645, 39.960405],
//                            desc: '井盖_3',
//                            status:1,
//                            power:'60%',
//                            way:'4G',
//                            ower:'北京水利'
//                        }];
                        //展示该数据
//                        var getdata=this.getdata();
//                            console.log('实时改变test',getdata)
                        var goEasy = new GoEasy({
                            appkey: "BS-6d10683de85143f488ca00f6ea1c04b7",
//                onConnected: function () {
//                    alert("成功连接GoEasy。");
//                },
                        });
                        window.ss=goEasy;
                        var datainfo = new Array(10);
                        var obj={};
                        ss.subscribe({
                            channel: "light_info",
                            onMessage: function (message) {
                                obj=message.content;
                                let id=JSON.parse(obj).lightId;
//                    console.log('message',message.content.lightId
                                datainfo[id]=JSON.parse(obj);
                                console.log('实时数组拼接',datainfo);
                                datainfo.map((item)=>{
                                    console.log('item',item.lightId)

                                });
                                setTimeout(()=>{markerList.render(datainfo)}, 10000);
//                                markerList.render(datainfo)
//                                console.log('window',window.test);
//                                var data=window.test ;
                            }
                        });

                        console.log('window.test',window.test)
//                        window.markerList=markerList;
                        markerList.render(window.test)
//                        window.setInterval()


                    })

            },//初始化完毕



        }


    }
</script>
<style>
    #panel{
       margin: 0 auto;
        overflow-y: scroll;
    }
    #eventInfo {
        position: absolute;
        z-index: 9999;
        right: 570px;
        top: 20px;
        background: #fff;
        border: 1px solid #ccc;
        padding: 7px;
        min-width: 100px;
        line-height: 170%;
    }

    .eventType {
        font-size: 120%;
        letter-spacing: 1px;
        color: red;
    }
    .active{background:yellow;}
    .my-svg-marker .amap-simple-marker-label {
        color: #fff;
        top: 10px;
        font-size: 20px;
    }
</style>
