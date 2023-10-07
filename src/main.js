import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL = process.env.VUE_APP_REMOTE_API;

createApp(App).use(store).use(router).mount('#app')



/*

TO DOS:

Add Update Stats Implementation

Add AddPlayer Implementation

Add Schedule Implementation

*/