import './assets/css/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.min.css'

import fr from './locales/fr.json'
import en from './locales/en.json'

const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language.slice(0, 2)
const defaultLang = savedLang || (browserLang === 'en' ? 'en' : 'fr')

const i18n = createI18n({
  legacy: false,
  locale: defaultLang,
  fallbackLocale: 'fr',
  messages: { fr, en },
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
