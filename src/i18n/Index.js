import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from './locales/Default.EN.json'
import vn from './locales/Default.VN.json'

const resources = {
    en: {
        translation: en
    },
    vn: {
        translation: vn
    }
}

i18n
    .use(detector)
    //.use(backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        react: {
            useSuspense: false
        },
        lng: "vn",

        fallbackLng: "en", // use en if detected lng is not available

        saveMissing: true, // send not translated keys to endpoint

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;