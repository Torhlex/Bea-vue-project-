<template>
  <div class="hello">
    <!-- <div class="home"> -->
    <!-- <img
        class="logo"
        src="img/BfreeLogo.png"
        onClick="location.href='LandingPage.html'"
        alt="BfreeLogo"
      /> -->
    <!-- <img
        class="logo"
        src="img/BfreeLogo.png"
        onClick="location.href='index.html'"
        alt="BfreeLogo"
        width="160"
        height="70"
      /> -->
    <div class="parent">
      <div class="flex flex-col justify-center items-center mt-12">
        <h1 class="text-white text-3xl md:leading-snug md:text-5xl">
          Welcome to Bfree <br />
          Escalation App <br />
          (BEA)
        </h1>
        <p class="mt-3 text-white leading-7 md:text-lg">
          BEA is for easy access to feedback from<br />
          technical the AMS to the <br />
          team in real time.
        </p>
      </div>
      <div class="flex justify-center items-center">
        <div class="btn-col">
          <button onClick="location.href='Login.html'">
            Get started<i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home {
  /* background-image: url(./img/bggg.jpeg); */
  background: white;
  background-size: cover;
  text-align: center;
  width: 100%;
  height: 100vh;
}

.parent {
  background-size: cover;
  background-position: center center !important;
  background-attachment: fixed;
  top: 20%;
  left: 36%;
  position: absolute;
}
.logo {
  /* width: 180px; */
  display: flex;
  justify-content: start;
  margin: 20px;
}

img {
  cursor: pointer;
}

h1 {
  color: rgb(0, 0, 0);
  /* position: absolute; */
  /* width: 554px; */
  height: 237px;
  left: 477px;
  top: 231px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 550;
  font-size: 50px;
  line-height: 65px;
  text-align: center;
}
p {
  margin-top: 10px;
  height: 130px;
  left: 488px;
  /* top: 498px; */
  color: rgb(61, 60, 60);
  font-family: "Open Sans";
  font-style: normal;
  /* font-weight: 400; */
  font-size: 20px;
  /* line-height: 46px; */
  text-align: center;
}
button {
  border: none;
  border-radius: 8px;
  font-weight: bold;
  padding: 14px 40px;
  background-color: rgba(75, 136, 216, 0.974);
  /* margin: 5px; */
  margin-left: 100px;
  color: #fff;
  margin-top: 0;
  display: inline;
  font-size: 15px;
  cursor: pointer;
  outline: none;
}
button:hover {
  background-color: rgba(52, 100, 163, 0.974);
  color: #fff;
}
.btn-col i {
  font-size: 20px;
  margin-left: 12px;
  justify-items: center;
  /* padding: 5px; */
  left: 8px;
  border-radius: 5px;
}
</style>
