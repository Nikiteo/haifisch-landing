import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './index.module.css'

export function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => setIsVisible(window.scrollY > 400)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.3 }}
					onClick={scrollToTop}
					className={styles.button}
					aria-label="Наверх"
					type="button"
				>
					<span className={styles.arrow} />
				</motion.button>
			)}
		</AnimatePresence>
	)
}
