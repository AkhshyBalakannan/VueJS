<template>
  <div v-theme="'black'">
    <h3>Hello Mr.anonymous</h3>
    <p>Successfully logined using the dynamic component</p>
    <p>Want to add a blog ?</p>
    <form>
      <input type="text" placeholder="Title" v-model.lazy="blog.title" />
      <textarea
        cols="30"
        rows="10"
        placeholder="Add your blog content"
        v-model="blog.content"
      ></textarea>
      <button type="submit" @click.prevent="post">POST</button>
    </form>
    <div>
      <p>Title : {{ blog.title | toUppercase }}</p>
      <p>your blog content:</p>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      blog: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    post() {
      this.$http
        .post("https://dummyjson.com/products/add", {
          id: 101,
          title: this.blog.title,
          content: this.blog.content,
        })
        .then(function (data) {
          console.log(data);
        });
    },
  },
};
</script>

<style>
</style>
