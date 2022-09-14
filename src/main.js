import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

import 'bootstrap'
import 'admin-lte'
// import overlayscrollbars from 'overlayscrollbars'

createApp(App).use(router).mount('#app')
