import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Cg from '../00_config/config.json';

import translationEN from './locales/en/translation.json';
import translationEU from './locales/eu/translation.json';
import translationES from './locales/es/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  eu: {
    translation: translationEU
  },
  es: {
    translation: translationES
  }
};

i18n
  //.use(reactI18nextModule) // passes i18n down to react-i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources,
    lng: Cg.I18n.lng,   //lenguaje a utilizar. Para cambiarlo dinámicamente, usar el metodo changeLanguage("nombre_definido_en_resources")

    // keySeparator: true, // we do not use keys in form messages.welcome

    fallbackLng: "es",
    debug: true,   //It logs to console all the states of i18nxt. Comment it in Production
    
    // have a common namespace used around the full app
    ns: ["translation"],
    defaultNS: "translation",

    interpolation: {
      escapeValue: false, // react already does escaping
      formatSeparator: ",",
    },
    
  });

export default i18n;