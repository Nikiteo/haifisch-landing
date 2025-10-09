import { t } from 'i18next'

import { useCallback } from 'react'

import { Button, Header, MainImage, MainTitle } from '@/components'
import { scrollToId } from '@/hooks'
import { useMediaQuery } from '@/hooks/use-media-query'
import styles from './index.module.css'

function Main() {
	const isDesktop = useMediaQuery('(min-width: 640px)')

	const handleCatalogClick = useCallback(() => {
		scrollToId('catalog')
	}, [])

	const Content = (
		<>
			<MainTitle />
			{!isDesktop && <MainImage />}
			<p className={styles.description}>{t('main.text')}</p>
			<Button variant="primary" className={styles.button} onClick={handleCatalogClick}>
				{t('button.catalog')}
			</Button>
			{/* <div className={styles.buttons}>
				<Button variant="primary" className={styles.button} onClick={handleCatalogClick}>
					{t('button.catalog')}
				</Button>
				<Button
					href="https://t.me/haifisch_store_bot"
					target="_blank"
					rel="noopener noreferrer"
					variant="outline"
					className={styles.pdfButton}
					as="a"
				>
					{t('button.pdf')}
				</Button>
			</div> */}

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

export default Main
