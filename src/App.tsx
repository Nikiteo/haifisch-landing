import { lazy, Suspense } from 'react'

import './styles/global.css'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'

const MainPage = lazy(async () => import('@/pages/Main/main-page'))
const AboutPage = lazy(async () => import('@/pages/About/about-page'))
const AdvantagesPage = lazy(async () => import('@/pages/Advantages/advantages-page'))
const ShopsPage = lazy(async () => import('@/pages/Shops/shops-page'))
const FooterPage = lazy(async () => import('@/pages/Footer/footer-page'))

export function App() {
	return (
		<Suspense>
			<MainPage />
			<AboutPage />
			<AdvantagesPage />
			<ShopsPage />
			<FooterPage />
		</Suspense>
	)
}
