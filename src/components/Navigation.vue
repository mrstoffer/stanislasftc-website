<template>
  <!-- <header :class="[section]">
    <nav>
      <div class="navbar left">
        <router-link @click="changeSection('main')" class="title mainlogo" to="/">FTC Stanislascollege</router-link>
        <router-link @click="changeSection('stt')" class="title sttlogo" to="/stt"><img src="../assets/flag.png"/> #18710 Stanislas Tech Team</router-link>
        <router-link @click="changeSection('sta')" class="title stalogo" to="/sta">#18859 Stanislas Tech Academy</router-link>
      </div>
      <div v-if="section === 'main'" class="navbar right" :class="[section+'nav']">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/news">News</router-link>
      </div>
      <div v-else class="navbar right" :class="[section+'nav']">
        <router-link :to="'/' + section">Home</router-link>
        <router-link :to="'/' + section + '/about'">About</router-link>
      </div>
    </nav>
  </header> -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark border-bottom border-5 border-primary py-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo-westplantsoen.png" alt="" height="50">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Onze teams
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link class="dropdown-item ftc" to="/">Main site</router-link></li>
            <li><router-link class="dropdown-item stt" to="/">Stanislas Tech Team</router-link></li>
            <li><router-link class="dropdown-item sta" to="/">Stanislas Tech Academy</router-link></li>
          </ul>
        </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Over ons</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/news">Nieuws</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';

export default {
    setup() {
        const store = useStore()

        const section = computed(() => store.state.displaySection)

        const changeSection = (s) => {
          store.commit('setSection', s)
        }

        return {
            section,
            changeSection,
        }
    }
}
</script>


<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media (min-width: 992px) {
  .border-primary .active, .border-primary .nav-link:hover {
    background-color: var(--bs-primary);
  }
  .navbar {
    padding-top: 0;
    padding-bottom: 0;
  }
  .nav-link {
    padding-top: 100%;
    padding-bottom: 100%;
  }
}

.active.ftc {
  background-color: var(--bs-primary) !important;
}

.stt:active, .stt.active {
  background-color: var(--bs-stt) !important;
}

.sta:active, .sta.active {
  background-color: var(--bs-sta) !important;
}

.dropdown-menu{
  position:absolute;
  z-index: -1;
}

.navbar .navbar-nav>li>a {
  padding: 15px;
  margin-bottom: -2px;
}
.navbar .navbar-brand {
  padding-top: 0px;
}

/* header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #1a1a1a;
  margin: 0;
  border-bottom: 5px solid;
  z-index: 1000;
}

.main {
  border-color: #009aa6;
}

.stt {
  border-color: #e57626ff;
}

.sta {
  border-color: #4285f4;
}

nav {
  text-align: center;
}

nav div {
  padding: 10px;
  padding-left: 0px;
  font-size: 0px;
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

.navbar.right.mainnav a:hover, .navbar.right.mainnav .router-link-active {
  background-color: #009aa6;
}

.navbar.right.sttnav a:hover, .navbar.right.sttnav .router-link-active {
  background-color: #e57626ff;
}

.navbar.right.stanav a:hover, .navbar.right.stanav .router-link-active {
  background-color: #4285f4;
}

.title {
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
  padding: 10px;
  background-color: #e57626ff;
  margin: 0;
}

.sttlogo {
  background-color: #e57626ff;
}

.stalogo {
  background-color: #4285f4;
}

.mainlogo {
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
