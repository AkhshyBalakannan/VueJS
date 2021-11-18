<template>
  <div>
    <navbar></navbar>
    <app-todo></app-todo>
  </div>
</template>

<script>
import todoApp from "./components/todo.vue";

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    "app-todo": todoApp,
  },
};
</script>

<style>
</style>
