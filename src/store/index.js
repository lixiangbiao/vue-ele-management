import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout/index'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tabindex:0
    },
    getters:{
        isCollapse:state => state.layout.isCollapse,
    },
    modules:{
        layout
    },
    mutations: {
        add:state=>{
            state.tabindex = state.tabindex+1
        }
    },
    actions: {

    }
})

export default store