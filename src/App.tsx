import { lazy, Suspense } from 'react'

import MainPage from '@/pages/Main'

import './styles/global.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'

const AboutPage = lazy(async () => import('@/pages/About'))
const AdvantagesPage = lazy(async () => import('@/pages/Advantages'))
const ShopsPage = lazy(async () => import('@/pages/Shops'))
const FooterPage = lazy(async () => import('@/pages/Footer'))

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
