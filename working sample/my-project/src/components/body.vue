<template>
  <div id="body" :class="{ theme: theme }">
    <h1>Body Heading</h1>
    <button @click="toggleTheme">change Theme</button>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor
      alias exercitationem mollitia. Possimus error obcaecati tempora magnam
      voluptates ut sit, beatae debitis! Fugit voluptatibus libero animi
      doloribus repellat error? Nisi itaque harum rerum obcaecati. Commodi,
      officiis. Eius deserunt optio numquam inventore voluptatem fugiat odio
      accusamus non, dignissimos perferendis, adipisci explicabo architecto!
      Necessitatibus voluptas id voluptatibus sint corporis optio hic? Itaque,
      enim et. Officiis nisi sint alias rerum fugit eligendi fugiat quae
      voluptatibus, atque similique labore laborum unde earum! Modi minima saepe
      quod ab voluptates nemo quasi ipsam tempora iusto! Numquam a fugiat
      debitis ab reiciendis dolore modi tenetur fuga, aut molestias delectus.
      Animi iste quam reiciendis accusantium recusandae, veniam sequi debitis
      vitae, alias obcaecati, voluptas neque ad atque eveniet! Vero numquam non
      architecto doloribus dicta at, vitae soluta dolore itaque modi rerum
      distinctio ab vel odit sit nulla praesentium autem illum officiis mollitia
      in consequatur. Sit consequuntur aperiam eveniet!
    </p>
    <button @click="ebToggleTheme">Change footer Theme using Event Bus</button>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  props: {
    theme: {
      type: Boolean,
      required: true,
    },
  },
  name: "app",
  data() {
    return {
      msg: "from BODY message",
      // theme: false,
    };
  },
  methods: {
    toggleTheme() {
      // this.theme = !this.theme; // locally changing things
      this.$emit("changetheme", this.msg);
    },
    ebToggleTheme() {
      // eb stands for Event Bus
      bus.$emit("ebchangetheme", "payload");
    },
  },
};
</script>

<style>
#body {
  padding: 0px 50px;
}
.theme {
  background-color: rgb(37, 37, 37);
  color: white;
}
</style>
