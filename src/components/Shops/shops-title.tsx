import { t } from 'i18next'

import styles from './shops-title.module.css'

export function ShopsTitle() {
	return (
		<div className={styles.container}>
			<div>
				<h3 className={styles.title}>{t('shops.heading')}</h3>
				<h3 className={styles.subtitle}>{t('shops.inner-heading')}</h3>
			</div>
			<p className={styles.description}>
				{t('shops.text')}
				<a className={styles.link} href="tel:+79851627394" aria-label={t('aria.call-icon')}>
					{t('shops.tel')}
				</a>
			</p>
		</div>
	)
}
