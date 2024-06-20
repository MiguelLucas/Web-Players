import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import quasarUserOptions from './plugins/quasar'

const app = createApp(App)

app.use(quasarUserOptions)
app.mount('#app')
