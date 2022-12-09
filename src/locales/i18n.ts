import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import UniversalCookie from "universal-cookie";
import translationEN from "./en/translation.json";
import translationVI from "./vi/translation.json";

const cookies = new UniversalCookie();

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: false,
  lng: cookies.get("lang") || "en",
});

export default i18n;
