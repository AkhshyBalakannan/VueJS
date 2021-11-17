<template>
  <div>
    <slot name="heading"></slot>
    <h2 v-rainbow>I am happy to</h2>
    <slot name="note"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random.toString().slice(2, 8);
        console.log(el.style.color);
      },
    },
  },
};
</script>

<style>
</style>
