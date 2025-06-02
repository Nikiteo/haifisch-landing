import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ru from './locales/ru.json'

void i18n.use(initReactI18next).init({
	fallbackLng: 'ru',
	lng: 'ru',
	debug: false,
	resources: {
		ru: {
			translation: ru,
		},
	},
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
