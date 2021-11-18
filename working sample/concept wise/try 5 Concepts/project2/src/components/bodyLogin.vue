<template>
  <div style="align-item: center">
    <form>
      <input type="text" placeholder="username" v-model="username" />
      <input type="password" placeholder="password" v-model="password" />
      <input type="checkbox" v-model="remember" />
      <button type="submit" @click.prevent="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      remember: false,
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.$emit("login");
      if (!this.remember) {
        this.username = "";
        this.password = "";
      }
      console.log(this.username);
      console.log(this.password);
    },
  },
};
</script>

<style>
</style>
