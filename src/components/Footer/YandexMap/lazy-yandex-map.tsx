import { motion } from 'framer-motion'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import styles from './yandex-map.module.css'

const YandexMap = lazy(async () => import('./yandex-map'))

export function LazyYandexMap() {
	const [showMap, setShowMap] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setShowMap(true)
				observer.disconnect()
			}
		}, {
			rootMargin: '200px',
		})

		if (ref.current)
			observer.observe(ref.current)

		return () => observer.disconnect()
	}, [])

	return (
		<div ref={ref} className={styles.map}>
			<Suspense fallback={<div className="skeleton">Загрузка карты...</div>}>
				{showMap && (
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
					>
						<YandexMap />
					</motion.div>
				)}
			</Suspense>
		</div>
	)
}
