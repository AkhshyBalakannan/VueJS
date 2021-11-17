import Vue from 'vue'
import App from './App.vue'
import Footer from "./components/footer.vue"
import Header from "./components/header.vue"
import VueResouce from 'vue-resource'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

Vue.use(VueResouce)

Vue.directive('theme', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
    el.style.color = "white";
  }
})

Vue.filter('toUppercase', function (value) {
  return value.toUpperCase();
})

new Vue({
  el: '#app',
  render: h => h(App)
})
