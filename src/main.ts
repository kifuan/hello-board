import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './stores'
import './style.css'

createApp(App).use(pinia).mount('#app')
