import { motion } from 'framer-motion'
import { t } from 'i18next'
import { memo } from 'react'

import { DrawLogo } from '@/components'
import { NAV_ITEMS } from './constants'
import { NavItem } from './navigation-item'
import styles from './navigation.module.css'

interface NavMenuProps {
	vertical?: boolean
	className?: string
	onItemClick?: () => void
}

const variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.07,
			delayChildren: 0.2,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

export const Navigation = memo(({ vertical = false, className, onItemClick }: NavMenuProps) => {
	const isVertical = vertical

	return (
		<nav aria-label={t('aria.nav-main')}>
			<motion.ul
				initial={isVertical ? 'hidden' : false}
				animate={isVertical ? 'show' : false}
				variants={isVertical ? variants : undefined}
				className={`${styles.nav} ${isVertical ? styles.vertical : styles.horizontal} ${className ?? ''}`}
			>
				{NAV_ITEMS.map(({ id, labelKey, hideOnDesktop }) => (
					<motion.li key={id} variants={itemVariants} className={hideOnDesktop ? styles.hide : undefined}>
						<NavItem targetId={id} onClick={onItemClick}>
							{t(labelKey)}
						</NavItem>
					</motion.li>
				))}
			</motion.ul>
			{isVertical && (
				<DrawLogo />
			)}
		</nav>
	)
})
