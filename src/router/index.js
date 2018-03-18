import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/personList',
                    component: resolve => require(['../components/page/person/PersonList.vue'], resolve)
                },
                {
                    path: '/PersonalInfo',
                    component: resolve => require(['../components/page/person/PersonalInfo.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/newWarehouse',
                    component: resolve => require(['../components/page/warehouse/newWarehouse.vue'], resolve)
                },
                {
                    path: '/WarehouseList',
                    component: resolve => require(['../components/page/warehouse/WarehouseList.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/inWarehousesList',
                    component: resolve => require(['../components/page/warehouse/inWarehousesList.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/outWarehousesList',
                    component: resolve => require(['../components/page/warehouse/outWarehousesList.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/websocket',
                        component: resolve => require(['../components/page/monitor/websocket.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
{
    path: '/test',
        component: resolve => require(['../components/page/test.vue'], resolve)   // vue-schart组件
},
{
    path: '/loginLog',
        component: resolve => require(['../components/page/log/loginLog.vue'], resolve)   // vue-schart组件
},
{
    path: '/operationLog',
        component: resolve => require(['../components/page/log/operationLog.vue'], resolve)   // vue-schart组件
},
{
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/role',
                        component: resolve => require(['../components/page/permission/role.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/permission',
                        component: resolve => require(['../components/page/permission/permission.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/lamp',
                        component: resolve => require(['../components/page/monitor/lamp.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/login/Login.vue'], resolve)
        },
    ]
})
