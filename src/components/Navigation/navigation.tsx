import { motion } from 'framer-motion'
import { t } from 'i18next'
import { memo } from 'react'

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
		<nav>
			<motion.ul
				initial={isVertical ? 'hidden' : false}
				animate={isVertical ? 'show' : false}
				variants={isVertical ? variants : undefined}
				className={`${styles.nav} ${isVertical ? styles.vertical : styles.horizontal} ${className ?? ''}`}
			>
				<motion.li variants={itemVariants} className={styles.hide}>
					<NavItem targetId="main" onClick={onItemClick}>
						{t('main.nav')}
					</NavItem>
				</motion.li>
				<motion.li variants={itemVariants}>
					<NavItem targetId="about" onClick={onItemClick}>
						{t('menu.about')}
					</NavItem>
				</motion.li>
				<motion.li variants={itemVariants}>
					<NavItem targetId="catalog" onClick={onItemClick}>
						{t('button.catalog')}
					</NavItem>
				</motion.li>
				<motion.li variants={itemVariants}>
					<NavItem targetId="shops" onClick={onItemClick}>
						{t('menu.shops')}
					</NavItem>
				</motion.li>
				<motion.li variants={itemVariants} className={styles.hide}>
					<NavItem targetId="contacts" onClick={onItemClick}>
						{t('menu.contacts')}
					</NavItem>
				</motion.li>
			</motion.ul>
		</nav>
	)
})
