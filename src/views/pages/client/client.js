import Vue from 'vue'
import client from './client.vue'
import router from './router'

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    render: h => h(client)
}).$mount('#client')