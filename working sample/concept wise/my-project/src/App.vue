<template>
  <div>
    <app-header :title="title"></app-header>
    <app-body :theme="theme" @changetheme="changeTheme($event)"></app-body>
    <app-footer :year="year"></app-footer>
  </div>
</template>

<script>
import Body from "./components/body.vue";

export default {
  components: {
    "app-body": Body,
  },
  name: "app",
  data() {
    return {
      year: 2021,
      title: "MINI PROJECT",
      theme: false,
    };
  },
  methods: {
    changeTheme(args) {
      this.theme = !this.theme;
      console.log(args);
    },
  },
};
</script>

<style>
</style>
