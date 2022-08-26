import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../sass/main.scss'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Vue3Autocounter from 'vue3-autocounter';

library.add(faEnvelope);
library.add(faInstagram);
library.add(faTiktok);
library.add(faGithub);

createApp(App).use(store).use(router).use(VueAxios, axios).component("font-awesome-icon", FontAwesomeIcon).component('vue3-autocounter', Vue3Autocounter).mount('#app')
