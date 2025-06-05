import { AnimatePresence, motion } from 'framer-motion'
import { t } from 'i18next'
import { useCallback, useEffect, useState } from 'react'

import { Navigation } from '@/components'

import styles from './burger-menu.module.css'

export function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<div className={styles.burgerContainer}>
			<button
				type="button"
				className={styles.burgerButton}
				onClick={toggleMenu}
				aria-label={isOpen ? t('button.burger-aria-close') : t('button.burger-aria-open')}
			>
				<div className={styles.iconWrapper}>
					<span className={`${styles.line} ${isOpen && styles.line1Open}`} />
					<span className={`${styles.line} ${isOpen && styles.line2Open}`} />
				</div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							className={styles.menu}
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							exit={{ y: '100%' }}
							transition={{ duration: 0.45, ease: 'easeInOut' }}
						>
							<Navigation vertical onItemClick={toggleMenu} />
						</motion.div>

						<motion.div
							className={styles.overlay}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={toggleMenu}
						/>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}
