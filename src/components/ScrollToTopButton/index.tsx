import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './index.module.css'

export function ScrollToTopButton() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 400)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.6 }}
					animate={{
						opacity: 1,
						scale: [1, 1.08, 1],
					}}
					exit={{ opacity: 0, scale: 0.6 }}
					transition={{
						duration: 0.6,
						ease: 'easeInOut',
					}}
					className={styles.button}
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					aria-label="Наверх"
				>
					<motion.svg
						viewBox="0 0 100 100"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.icon}
						initial={{ y: 0 }}
						animate={{ y: [0, -4, 0] }}
						transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
					>
						<path
							d="M20 80 C35 20, 65 20, 80 80"
							stroke="currentColor"
							strokeWidth="4"
							fill="none"
							strokeLinecap="round"
						/>
						<path
							d="M30 80 C45 40, 55 40, 70 80"
							stroke="currentColor"
							strokeWidth="6"
							fill="none"
							strokeLinecap="round"
						/>
					</motion.svg>
				</motion.button>
			)}
		</AnimatePresence>
	)
}
