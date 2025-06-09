import { t } from 'i18next'
import { useCallback } from 'react'

import { logo } from '@/assets'
import { Button, Logo, Navigation } from '@/components'

import { scrollToId } from '@/hooks'
import { BurgerMenu } from './BurgerMenu/burger-menu'
import styles from './header.module.css'

export function Header() {
	const handleContactClick = useCallback(() => {
		scrollToId('contacts')
	}, [])

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Logo src={logo} alt={t('logo.alt')} />
				<Navigation />
				<BurgerMenu />
				<Button
					aria-label={t('menu.contacts')}
					className={styles.hideButton}
					variant="outline"
					onClick={handleContactClick}
				>
					{t('button.contact')}
				</Button>
			</div>
		</header>
	)
}
