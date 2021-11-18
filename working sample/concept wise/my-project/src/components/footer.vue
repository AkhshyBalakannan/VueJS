<template>
  <div id="footer" :class="{ themefooter: footertheme }">
    <p>Copyrights @ {{ year }} {{ company }}</p>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  props: {
    year: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // year: 2021,
      company: "MINIPROJECT",
      footertheme: false,
    };
  },
  created() {
    bus.$on("ebchangetheme", (data) => {
      this.footertheme = !this.footertheme;
    });
  },
};
</script>

<style>
#footer {
  background-color: darkblue;
  color: lightblue;
  text-align: center;
  padding: 0px 20px;
  margin: 0px 0px;
}
.themefooter {
  background-color: lightblue;
  color: darkblue;
}
</style>
