import { t } from 'i18next'

import { main } from '@/assets'

import styles from './main-image.module.css'

export function MainImage() {
	return (
		<div className={styles.imageWrapper}>
			<img src={main} alt={t('main.image-alt')} loading="lazy" className={styles.heroImage} />
		</div>
	)
}
