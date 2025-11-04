import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import bg from "./bg.json";

// Get saved language from localStorage or detect browser language
const savedLanguage = localStorage.getItem('language');
const browserLanguage = navigator.language.split('-')[0];
const defaultLanguage = savedLanguage || (browserLanguage === 'bg' ? 'bg' : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bg: { translation: bg },
    },
<<<<<<< HEAD
    lng: "en", // default language
=======
    lng: defaultLanguage,
>>>>>>> 1b8b581a65503c2a0f01cdaf5a5d4fa501b87aa7
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
