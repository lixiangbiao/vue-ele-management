import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './login/login'
Vue.use(VueRouter)

const routes = [
    { path: '/ccc', name: 'login', component: login , meta: { title: 'console 登录' }}
]

export default new VueRouter({
    //mode: 'history',
    routes: routes
})