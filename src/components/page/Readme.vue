<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 楼层详细信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <!--<h3>README.md</h3>-->
            <div>
                方案一：
                <el-button type="text">1层</el-button>
                <el-button type="text">2层</el-button>
                <el-button type="text">3层</el-button>
                <el-button type="text">4层</el-button>
                <el-button type="text">5层</el-button>
                <el-button type="text">6层</el-button>
                <el-button type="text">7层</el-button>
                <el-button type="text">8层</el-button>
                <el-button type="text">9层</el-button>
                <br/>
                方案二：
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="1层" name="first">1层教室平面图
                        <el-carousel indicator-position="outside" >
                            <!--<el-carousel-item v-for="item in data" :key="item">-->
                            <el-carousel-item v-for="item in data" :key="item.id">
                                <table>
                                    <!--<tr><th>{{item.position}}</th></tr>-->
                                    <tr>
                                        <td ><div class="goodcicle"> </div></td>
                                        <td><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                        <td><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                    </tr>
                                    <tr>
                                        <td ><div class="goodcicle"> </div></td>
                                        <td><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                        <td><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                    </tr>
                                    <tr>
                                        <td ><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                        <td><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                    </tr>
                                    <tr>
                                        <td ><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                        <td><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                    </tr>
                                    <tr>
                                        <td ><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                        <td><div class="goodcicle"> </div></td>
                                        <td><div class="badcicle"> </div></td>
                                    </tr>
                                </table>
                            </el-carousel-item>
                        </el-carousel>
                    </el-tab-pane>
                    <el-tab-pane label="2层" name="second">2层教室平面图
                        <el-carousel indicator-position="outside">
                            <!--<el-carousel-item v-for="item in data" :key="item">-->
                            <el-carousel-item v-for="item in data" :key="item.id">
                            </el-carousel-item>
                        </el-carousel>
                    </el-tab-pane>
                    <el-tab-pane label="3层" name="third">3层教室平面图
                        <el-carousel indicator-position="outside">
                            <!--<el-carousel-item v-for="item in data" :key="item">-->
                            <el-carousel-item v-for="item in data" :key="item.id">
                                <h3>{{ item.desc}}</h3>

                                <!--<el-tag style="background: yellow">标签一</el-tag>-->
                                <!--<el-tag type="success">标签二</el-tag>-->
                                <!--<el-tag type="info">标签三</el-tag>-->
                                <!--<el-tag type="warning">标签四</el-tag>-->
                                <!--<el-tag type="danger">标签五</el-tag>-->
                            </el-carousel-item>
                        </el-carousel>
                    </el-tab-pane>
                    <el-tab-pane label="4层" name="fourth">4层教室平面图</el-tab-pane>
                    <el-tab-pane label="5层" name="lll">5层教室平面图</el-tab-pane>
                    <el-tab-pane label="6层" name="ttt">6层教室平面图</el-tab-pane>
                    <el-tab-pane label="7层" name="sss">7层教室平面图</el-tab-pane>
                    <el-tab-pane label="8层" name="mmm">8层教室平面图</el-tab-pane>
                    <el-tab-pane label="9层" name="ppp">9层教室平面图</el-tab-pane>
                </el-tabs>
            </div>
            <!--<article>-->
                <!--<h1>manage-system</h1>-->
                <!--<p>基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案</p>-->
                <!--<h2>前言</h2>-->
                <!--<p>之前在公司用了Vue + Element组件库做了个后台管理系统，基本很多组件可以直接引用组件库的，但是也有一些需求无法满足。像图片裁剪上传、富文本编辑器、图表等这些在后台管理系统中很常见的功能，就需要引用其他的组件才能完成。从寻找组件，到使用组件的过程中，遇到了很多问题，也积累了宝贵的经验。所以我就把开发这个后台管理系统的经验，总结成这个后台管理系统解决方案。</p>-->
                <!--<p>该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。</p>-->
                <!--<h2>功能</h2>-->
                <!--<el-checkbox disabled checked>Element UI</el-checkbox>-->
                <!--<br>-->
                <!--<el-checkbox disabled checked>登录/注销</el-checkbox>-->
                <!--<br>-->
                <!--<el-checkbox disabled checked>表格</el-checkbox>-->
                <!--<br>-->
                <!--<el-checkbox disabled checked>表单</el-checkbox>-->
                <!--<br>-->
                <!--<el-checkbox disabled checked>图表</el-checkbox>-->
                <!--<br>-->
                <!--<el-checkbox disabled checked>富文本编辑器</el-checkbox>-->
                <!--<br>-->
                <!--<el-checkbox disabled checked>markdown编辑器</el-checkbox>-->
                <!--<br>-->
                <!--<el-checkbox disabled checked>图片拖拽/裁剪上传</el-checkbox>-->
                <!--<br>-->
                <!--<el-checkbox disabled checked>支持切换主题色</el-checkbox>-->
                <!--<br>-->
                <!--<el-checkbox disabled checked>列表拖拽排序</el-checkbox>-->
                <!--<br>-->
            <!--</article>-->
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tag: '灯1'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    tag: '灯2'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    tag: '灯3'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '灯4'
                }],
                activeName: 'second',
                //每个教室灯的信息
                data:[
                    {
                        id: '123',
                        position:'灯一' ,
                        desc: '111',
                        power:'30%',
                        dataList:[{name:'灯1',status:0},{name:'灯2',status:0},{name:'灯2',status:0},{name:'灯3',status:0},{name:'灯4',status:0},{name:'灯5',status:0},{name:'灯6',status:0},{name:'灯7',status:0},{name:'灯8',status:0}],
                        way:'WIFI',
                        ower:'北京市国税局',
                        url:'../../assets/logo.png'
                    }, {
                        id: '234',
                        position: '灯二',
                        desc: '112',
                        status:1,
                        power:'80%',
                        way:'WIFI',
                        ower:'北京房管局',
                        url:'../../assets/logo.png'
                    }, {
                        id: '345',
                        position:'灯三',
                        desc: '113',
                        status:1,
                        power:'60%',
                        way:'4G',
                        ower:'北京水利',
                        url:'../../assets/logo.png'
                    }],
            }
        },
        created(){
//通过点击楼层数返回相应的楼层教室
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    .ms-doc{
        width:100%;
        max-width: 900px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
    .el-carousel__item  {
        color: black;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0 auto;
        width: 500px
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel{
        width: 500px;
        margin: 0 auto;
    }
    /*table{*/
        /*margin:0 auto;*/
        /*width: 400px;*/
    /*}*/
    el-table{
        width: 200px;
        height: 200px;
    }
    .goodcicle{
        width: 48px;
        height: 48px;
        background: yellow;
        border-radius: 24px;
        margin: 5px;
    }
    .badcicle{
        width: 48px;
        height: 48px;
        background: grey;
        border-radius: 24px;
        margin: 5px;
    }
</style>
