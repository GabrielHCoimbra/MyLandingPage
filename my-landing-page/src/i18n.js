import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';
import frTranslations from './locales/fr.json';
import esTranslations from './locales/es.json';

const resources = {
  en: { translation: enTranslations },
  pt: { translation: ptTranslations },
  fr: { translation: frTranslations },
  es: { translation: esTranslations },
};

// Detectar idioma salvo no localStorage ou usar navegador
const savedLanguage = localStorage.getItem('language');
const browserLanguage = navigator.language.split('-')[0];
const defaultLanguage = savedLanguage || (resources[browserLanguage] ? browserLanguage : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
