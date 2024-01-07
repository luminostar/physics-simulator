// import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
import "../node_modules/bootstrap/dist/css/bootstrap.css";
app.mount('#app')
import "../node_modules/bootstrap/dist/js/bootstrap.js";
