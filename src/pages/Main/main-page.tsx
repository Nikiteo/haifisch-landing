import { t } from 'i18next'

import { Button, Header, MainImage, MainTitle } from '@/components'

import styles from './main.module.css'

const MainPage: React.FC = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.content}>
						<MainTitle />
						<p className={styles.description}>{t('main.text')}</p>
						<Button variant="primary" className={styles.button}>{t('button.catalog')}</Button>
					</div>
					<MainImage />
				</div>
			</main>
		</>
	)
}

export default MainPage
