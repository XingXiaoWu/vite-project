import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import '@/styles/index.scss'
import App from '@/App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

console.log(import.meta.env.BASE_URL)
console.log(process.env.NODE_ENV)
