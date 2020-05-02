import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { I18NEXT_RESOURCES, LANGUAGES } from 'appConstants'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: I18NEXT_RESOURCES,
    fallbackLng: LANGUAGES.UK,
    debug: true,
  })
