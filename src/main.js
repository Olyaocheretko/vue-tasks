import Vue from 'vue'
import App from './App.vue'
import AppButton from './components/common/AppButton.vue'

Vue.config.productionTip = false
Vue.component('AppButton', AppButton)

Vue.component('AppPopUp', () => import('./components/common/AppPopUp.vue'))
Vue.component('LoginPopUp', () => import('./components/LoginPopUp.vue'))

new Vue({
  render: h => h(App),
}).$mount('#app')
