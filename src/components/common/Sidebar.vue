<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '自述'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '用户管理',
                        subs: [
                            {
                                index: 'personlist',
                                title: '用户列表'
                            },
                            {
                                index: 'personalinfo',
                                title: '个人信息'
                            },

                            {
                                index: 'test',
                                title: 'graphql测试'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '3',
                        title: '权限管理',
                        subs: [
                            {
                                index: 'role',
                                title: '角色管理'
                            },
                            {
                                index: 'permission',
                                title: '权限管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '4',
                        title: '仓库管理',
                        subs: [
                            {
                                index: 'warehouselist',
                                title: '仓库列表'
                            },
                            {
                                index: 'newwarehouse',
                                title: '新增入库'
                            },
                            {
                                index: 'inWarehousesList',
                                title: '入库信息列表'
                            },
                            {
                                index: 'outWarehousesList',
                                title: '出库信息列表'
                            }
//                            {
//                                index: 'markdown',
//                                title: 'markdown'
//                            },
//                            {
//                                index: 'upload',
//                                title: '文件上传'
//                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '6',
                        title: '监控管理',
                        subs: [
                            {
                                index: 'lamp',
                                title: '监控信息'
                            },
                            {
                                index: 'websocket',
                                title: '监控数据测试'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '7',
                        title: '日志管理',
                        subs: [
                            {
                                index: 'loginLog',
                                title: '用户登录日志'
                            },
                            {
                                index: 'operationLog',
                                title: '操作日志'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'basecharts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '拖拽'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
