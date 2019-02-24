import Vue from 'vue'
import console from './console.vue'
import router from './router'

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    render: h => h(console)
}).$mount('#console')