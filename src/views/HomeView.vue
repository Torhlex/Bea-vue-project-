<template>
  <div class="home">
    <!-- <img
      class="logo"
      src="img/BfreeLogo.png"
      onClick="location.href='index.html'"
      alt="BfreeLogo"
      width="160"
      height="70"
    /> -->
    <LandingPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";

export default {
  name: "HomeView",
  components: {
    LandingPage,
  },
};
</script>
