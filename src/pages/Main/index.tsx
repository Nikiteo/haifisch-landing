import { t } from 'i18next'

import { Button, Header, MainImage, MainTitle } from '@/components'

import { useMediaQuery } from '@/hooks/use-media-query'
import styles from './index.module.css'

function MainPage() {
	const isDesktop = useMediaQuery('(min-width: 640px)')

	const Content = (
		<>
			<MainTitle />
			{!isDesktop && <MainImage />}
			<p className={styles.description}>{t('main.text')}</p>
			<Button variant="primary" className={styles.button}>
				{t('button.catalog')}
			</Button>
		</>
	)

	return (
		<>
			<Header />
			<main id="main" className={styles.main}>
				{isDesktop
					? (
							<div className={styles.container}>
								<div className={styles.content}>{Content}</div>
								<MainImage />
							</div>
						)
					: (
							<div className={styles.content}>{Content}</div>
						)}
			</main>
		</>
	)
}

export default MainPage
