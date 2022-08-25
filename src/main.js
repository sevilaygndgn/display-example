import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueTheMask)

new Vue({
  render: h => h(App),
}).$mount('#app')
