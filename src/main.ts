import './assets/css/main.css'

import { createApp, watch } from 'vue'
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
  messages: {
    fr,
    en,
  },
})

function updatePageTitle() {
  const currentRoute = router.currentRoute.value
  const titleKey = currentRoute.meta.titleKey as string | undefined

  if (titleKey) {
    document.title = `${i18n.global.t(titleKey)} | Naoufal Ayache`
  } else {
    document.title = 'Naoufal Ayache'
  }
}

router.afterEach(() => {
  updatePageTitle()
})

watch(
  () => i18n.global.locale.value,
  () => {
    updatePageTitle()
  },
)

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
