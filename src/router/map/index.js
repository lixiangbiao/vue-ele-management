import Layout from '../../views/layout/aside/layoutAside.vue'
import HomeMain from '../../views/home/homeMain'
let routes =[
    {
        path: '/',
        //redirect: '/home',
    },
    {
        path: '/',
        iconCls: 'fa fa-dashboard',
        component: Layout,
        alone: true,
        children: [
            {
                path: '/home',
                iconCls: 'fa fa-dashboard',
                name: '主页',
                component: HomeMain,
                children: []
            }
        ]
    },
]

export default routes;