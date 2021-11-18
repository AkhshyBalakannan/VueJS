import Vue from 'vue'
import App from './App.vue'
import Footer from "./components/footer.vue"
import Header from "./components/header.vue"
import VueResouce from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

Vue.use(VueResouce)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

Vue.directive('theme', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
    el.style.color = "white";
  }
})

// Vue.filter('toUppercase', function (value) {
//   return value.toUpperCase();
// })

// The above line of code is commented to see the mixin functionality working please dont delete code

new Vue({
  el: '#app',
  render: h => h(App)
})
