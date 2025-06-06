import { lazy, Suspense } from 'react'

import { FullPageLoader } from '@/components'

import Main from '@/pages/MainPage/Main'
import './styles/global.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'

const About = lazy(async () => import('@/pages/MainPage/About'))
const Catalog = lazy(async () => import('@/pages/MainPage/Catalog'))
const Advantages = lazy(async () => import('@/pages/MainPage/Advantages'))
const Shops = lazy(async () => import('@/pages/MainPage/Shops'))
const Footer = lazy(async () => import('@/pages/MainPage/Footer'))

export function App() {
	return (
		<Suspense fallback={<FullPageLoader />}>
			<Main />
			<About />
			<Catalog />
			<Advantages />
			<Shops />
			<Footer />
		</Suspense>
	)
}
