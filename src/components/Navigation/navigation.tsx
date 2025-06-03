import { t } from 'i18next'
import { memo } from 'react'

import { NavItem } from './navigation-item'
import styles from './navigation.module.css'

interface NavMenuProps {
	vertical?: boolean
	className?: string
	onItemClick?: () => void
}

export const Navigation = memo(({ vertical = false, className, onItemClick }: NavMenuProps) => (
	<nav>
		<ul
			className={`${styles.nav} ${vertical ? styles.vertical : styles.horizontal} ${className ?? ''}`}
		>
			<NavItem targetId="main" onClick={onItemClick} className={styles.hide}>
				{t('main.nav')}
			</NavItem>
			<NavItem targetId="about" onClick={onItemClick}>
				{t('menu.about')}
			</NavItem>
			<NavItem targetId="catalog" onClick={onItemClick}>
				{t('button.catalog')}
			</NavItem>
			<NavItem targetId="shops" onClick={onItemClick}>
				{t('menu.shops')}
			</NavItem>
			<NavItem targetId="contacts" onClick={onItemClick} className={styles.hide}>
				{t('menu.contacts')}
			</NavItem>
		</ul>
	</nav>
))
