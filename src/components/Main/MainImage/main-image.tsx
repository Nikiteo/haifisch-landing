import { t } from 'i18next'

import { table } from '@/assets'

import styles from './main-image.module.css'

export function MainImage() {
	return (
		<div className={styles.imageWrapper}>
			<img src={table} alt={t('main.image-alt')} fetchPriority="high" className={styles.heroImage} />
		</div>
	)
}
