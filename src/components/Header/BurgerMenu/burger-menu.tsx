import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
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
				aria-label={t('button.burger-aria-open')}
			>
				<HamburgerMenuIcon tabIndex={0} className={styles.icon} />
			</button>
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							className={styles.menu}
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						>
							<button
								type="button"
								className={styles.burgerButton}
								onClick={toggleMenu}
								aria-label={t('button.burger-aria-close')}
							>
								<Cross1Icon tabIndex={0} className={styles.closeIcon} />
							</button>
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
