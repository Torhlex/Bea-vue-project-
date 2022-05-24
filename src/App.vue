<template>
  <div id="app">
    <nav>
      <div class="Logo">
        <img
          class="logo"
          src="./assets/BfreeLogo.png"
          onClick="location.href='/LandingPage.vue'"
          alt="BfreeLogo"
          width="130"
          height="50"
        />
      </div>
      <div class="TopNaav">
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "app",
  Components: {
    LandingPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

/* .logo {
  display: flex;
  justify-content: start;
} */

img {
  cursor: pointer;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
