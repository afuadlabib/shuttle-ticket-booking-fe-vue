import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import vue3GoogleLogin from 'vue3-google-login';

const GOOGLE_CLIENT_ID = '475430016883-qk8nbrvsh30djurto2bfb15a81q8g317.apps.googleusercontent.com'

const app = createApp(App)
const pinia = createPinia()

app.use(vue3GoogleLogin, {
  clientId:
  GOOGLE_CLIENT_ID
});

pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(router)

app.mount('#app')
