import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')