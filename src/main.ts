import { marked } from 'marked'
import App from './App.vue'
import { router } from './router'
import { pinia } from './stores'
import { emojiRenderer as renderer } from './util/emoji-renderer'
import './style.css'

marked.use({ renderer })

createApp(App).use(router).use(pinia).mount('#app')
