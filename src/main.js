import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick' //300毫秒延迟
import 'assets/style/reset.css'
import 'assets/style/border.css'

fastClick.attach(document.body);//使用fastClick

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
