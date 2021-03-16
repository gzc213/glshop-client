import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router";
import TypeNav from '@/components/TypeNav'
import '@/mock/mackServer'
import store from '@/store'
import 'swiper/css/swiper.css'
import SlideShow from '@/components/SlideShow'
Vue.component(TypeNav.name,TypeNav)
Vue.component(SlideShow.name,SlideShow)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
