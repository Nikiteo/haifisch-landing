import { lazy, Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'

import { FullPageLoader, Header } from '@/components'
import Main from '@/pages/MainPage/Main'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/400.css'
import './styles/global.css'

const About = lazy(async () => import('@/pages/MainPage/About'))
const Catalog = lazy(async () => import('@/pages/MainPage/Catalog'))
const Tables = lazy(async () => import('@/pages/MainPage/Tables'))
const Advantages = lazy(async () => import('@/pages/MainPage/Advantages'))
const Shops = lazy(async () => import('@/pages/MainPage/Shops'))
const Footer = lazy(async () => import('@/pages/MainPage/Footer'))

export function App() {
	return (
		<Suspense fallback={<FullPageLoader />}>
			<Routes>
				<Route
					path="/"
					element={(
						<>
							<Main />
							<About />
							<Catalog />
							<Tables />
							<Advantages />
							<Shops />
							<Footer />
						</>
					)}
				/>
				<Route
					path="/catalog"
					element={(
						<>
							<Header />
							<Catalog withMargin />
						</>
					)}
				/>
			</Routes>
		</Suspense>
	)
}
