import { createApp } from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import {store} from "./store/store";
// import Select2 from 'vue3-select2-component';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import axios from "axios";
import VueAxios from "vue-axios";
import axios from "axios";
// import {BootstrapVueIcons} from 'bootstrap-vue'
const app = createApp(App)
// eslint-disable-next-line vue/multi-word-component-names
// app.component('Select2', Select2)
app.use(Vuex)
// app.use(axios)
app.use(VueAxios, axios)
app.use(store)
// app.use(BootstrapVueIcons)
app.mount('#app')
