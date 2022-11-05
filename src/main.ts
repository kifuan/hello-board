import App from './App.vue'
import router from './router'
import { pinia } from './stores'
import './style.css'

createApp(App).use(router).use(pinia).mount('#app')
