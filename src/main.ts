import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import '@/styles/index.scss'
import router from '@/router/index'
import App from './App.vue'
import { createPinia } from 'pinia'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.mount('#app')

console.log(import.meta.env.BASE_URL)
console.log(process.env.NODE_ENV)
