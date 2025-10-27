import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import ScrollReveal from 'scrollreveal'

const app = createApp(App)

app.config.globalProperties.$sr = ScrollReveal()

app.mount('#app')
