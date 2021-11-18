<template>
  <div>
    <app-header>
      <h1 slot="heading">Hello from Project 2</h1>
      <h3 slot="note">welcome here</h3>
    </app-header>
    <component v-bind:is="component" @login="change"></component>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Body from "./components/body.vue";
import Login from "./components/bodyLogin.vue";

export default {
  components: {
    "app-body": Body,
    "app-body-login": Login,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      component: "app-body-login",
    };
  },
  methods: {
    change() {
      this.component = "app-body";
    },
  },
  filters: {
    toUppercase: function (value) {
      return value.toUpperCase();
    },
  },
  created() {
    this.$http.get("https://dummyjson.com/products/1").then((data) => {
      console.log(data.body);
    });
  },
};
</script>

<style>
</style>
