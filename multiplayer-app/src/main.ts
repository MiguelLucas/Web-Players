import { createApp } from 'vue'
import '@/styles/style.css'
import App from '@/App.vue'
import quasarUserOptions from '@/plugins/quasar'
import router from '@/routes';

const app = createApp(App)

app.use(quasarUserOptions)
app.use(router);
app.mount('#app')
