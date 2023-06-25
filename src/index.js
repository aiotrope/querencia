import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

//import './utils/i18n'
import common_en from './translations/en/common.json'
import common_fi from './translations/fi/common.json'

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'fi',
    //debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { common: common_en },
      fi: { common: common_fi },
    },
  })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)

reportWebVitals()
