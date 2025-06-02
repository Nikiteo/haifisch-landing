import { t } from 'i18next'

import styles from './shops-title.module.css'

export const ShopsTitle: React.FC = () => {
	return (
		<div className={styles.container}>
			<hgroup>
				<h3 className={styles.title}>{t('shops.heading')}</h3>
				<h3 className={styles.subtitle}>{t('shops.inner-heading')}</h3>
			</hgroup>
			<p className={styles.description}>
				{t('shops.text')}
				<a className={styles.link} href="tel:+79851627394">
					{t('shops.tel')}
				</a>
			</p>
		</div>
	)
}
