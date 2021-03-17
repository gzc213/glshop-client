import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router";
import TypeNav from '@/components/TypeNav'
import '@/mock/mackServer'
import store from '@/store'
import 'swiper/css/swiper.css'
import SlideShow from '@/components/SlideShow'

// import '@/api'
Vue.component(TypeNav.name,TypeNav)
Vue.component(SlideShow.name,SlideShow)
Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this // 安装全局事件总线
  },
  render: h => h(App),
  store,
  router
}).$mount('#app')
