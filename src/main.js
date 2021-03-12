import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router";
import TypeNav from '@/components/TypeNav'
import store from '@/store'
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
