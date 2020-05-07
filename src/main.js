import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick' //300毫秒延迟
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图
import 'swiper/css/swiper.css'
import 'assets/style/reset.css'  //样式初始化
import 'assets/style/border.css' //移动端1px
import 'assets/style/font/iconfont.css'
Vue.use(VueAwesomeSwiper);


fastClick.attach(document.body);//使用fastClick

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
