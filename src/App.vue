<template>
  <Navigation />
  <router-view/>
  <Footer />
</template>

<script>
import Navigation from "./components/Navigation.vue"
import Footer from './components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer
  },
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Verdana, Geneva, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  color: black;
  height: 100%;
}

.page {
  padding-top: 60px;
}

.btn-outline-light:hover {
  color: var(--bs-dark) !important;
}

/* header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #1a1a1a;
  margin: 0;
  border-bottom: 5px solid;
  border-color: #e57626ff;
  z-index: 1000;
}

nav {
  text-align: center;
}

nav div {
  padding: 10px;
  padding-left: 0px;
  font-size: 0px;
  float: center;
  text-align:center;
  margin: 0 auto !important; 
  display:inline-block
}

nav div a {
  padding: 10px;
  transition: background-color 0.5s;
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
  text-decoration: none;
}

nav div a:hover, nav div .router-link-active {
  background-color: #e57626ff;
}

.title {
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
  padding: 10px;
  background-color: #e57626ff;
  margin: 0;
}

.stt {
  background-color: #e57626ff;
}

.sta {
  background-color: #4285f4;
}

.stanislas {
  background-color: #009aa6;
}

.divider {
  color: #FFF;
  font-weight: bold;
  padding: 10px;
  margin: 0;
}

.title img {
  width: 16px;
  height: calc(600px / 56.25);
  margin: 0;
}

.left {
  float: left;
}

.right {
  float: right;
}

li.selected {
  font-size: 16px;
  padding: 10px;
  background-color: #AE0202;
  font-weight: bold;
} */
</style>
