import Vue from 'vue'
import App from './App.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
