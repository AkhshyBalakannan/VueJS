<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // title: "MINI PROJECT",
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: lightblue;
  text-align: center;
  padding: 0px 20px;
  margin: 0px 0px;
}
</style>
