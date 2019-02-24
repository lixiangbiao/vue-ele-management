import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import HomeMain from '@/views/home/homeMain'

const enter =()=>import('@/views/storage/enter');
const cut =()=>import('@/views/storage/cut');
const division =()=>import('@/views/storage/division');
const balance =()=>import('@/views/storage/balance');

const depository =()=>import('@/views/product/depository');
const cost =()=>import('@/views/product/cost');
const plist =()=>import('@/views/product/plist');

const statement =()=>import('@/views/order/statement');
const olist =()=>import('@/views/order/olist');
const attach =()=>import('@/views/order/attach');

const cmessage =()=>import('@/views/customer/cmessage');
const market =()=>import('@/views/customer/market');
const corder =()=>import('@/views/customer/corder');
const relation =()=>import('@/views/customer/relation');

const emessage =()=>import('@/views/employee/emessage');
const jurisdiction =()=>import('@/views/employee/jurisdiction');
const newadd =()=>import('@/views/employee/newadd');
const performance =()=>import('@/views/employee/performance');

const setting =()=>import('@/views/set/setting');

//import RouterMaps from './map/index'
Vue.use(Router)

// const routers = new Router({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes: RouterMaps
// }) 
const defaultRouter = [{
    path: '/',
    redirect: '/home',
},
{
    path: '/',
    iconCls: 'fa fa-dashboard',
    component: Layout,
    alone: true,
    name: '管理首页',
    target: '/home',
    children: [
        {
            path: '/home',
            iconCls: 'fa fa-dashboard',
            name: '管理首页',
            component: HomeMain,
            children: []
        }
    ]
},
{
    path: '/',
    iconCls: 'fa fa-dashboard',
    component: Layout,
    alone: false,
    name: '仓库管理',
    target: '/storage',
    children: [
        { path: '/enter', name: '入库单', component: enter, },
        { path: '/cut', name: '出库单', component: cut, },
        { path: '/division', name: '存库分配', component: division, },
        { path: '/balance', name: '库存余额', component: balance, }
    ]
},
{
    path: '/',
    iconCls: 'fa fa-dashboard',
    component: Layout,
    alone: false,
    name: '产品管理',
    target: '/product',
    children: [
        { path: '/depository', name: '产品库存', component: depository, },
        { path: '/cost', name: '产品成本', component: cost, },
        { path: '/plist', name: '产品列表', component: plist, },
    ]
},
{
    path: '/',
    iconCls: 'fa fa-dashboard',
    component: Layout,
    alone: false,
    name: '订单管理',
    target: '/order',
    children: [
        { path: '/statement', name: '订单报表', component: statement, },
        { path: '/olist', name: '订单列表', component: olist, },
        { path: '/attach', name: '订单归属', component: attach, },
    ]
},
{
    path: '/',
    iconCls: 'fa fa-dashboard',
    component: Layout,
    alone: false,
    name: '客户管理',
    target: '/customer',
    children: [
        { path: '/cmessage', name: '客户信息', component: cmessage, },
        { path: '/market', name: '客户销售', component: market, },
        { path: '/corder', name: '客户订单', component: corder, },
        { path: '/relation', name: '客户关系', component: relation, },
    ]
},
{
    path: '/',
    iconCls: 'fa fa-dashboard',
    component: Layout,
    alone: false,
    name: '员工管理',
    target: '/employee',
    children: [
        { path: '/emessage', name: '员工信息', component: emessage, },
        { path: '/jurisdiction', name: '员工权限', component: jurisdiction, },
        { path: '/newadd', name: '新员工入职', component: newadd, },
        { path: '/performance', name: '员工业绩', component: performance, },
    ]
},
{
    path: '/',
    iconCls: 'fa fa-dashboard',
    component: Layout,
    alone: true,
    name: '系统设置',
    target: '/setting',
    children: [
        {
            path: '/setting',
            iconCls: 'fa fa-dashboard',
            name: '系统设置',
            component: setting,
            children: []
        }
    ]
},]
const routers = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: defaultRouter
})

routers.beforeEach((to, from, next) => {
    next()
})
export default routers