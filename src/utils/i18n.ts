import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import transEn from "../locale/En.json";
import transAr from "../locale/Ar.json";

const resources = {
  en: {
    translation: transEn
  },
  ar: {
    translation: transAr
}
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "ar",
    lng: "ar",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

// Set document direction based on language
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

// Set initial direction
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = i18n.language;

export default i18n;