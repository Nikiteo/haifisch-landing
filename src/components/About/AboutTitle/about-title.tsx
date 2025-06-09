import { t } from 'i18next'

import styles from './about-title.module.css'

export function AboutTitle() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{t('hero.heading')}</h2>
			<h2 className={styles.subtitle}>{t('hero.inner-heading')}</h2>
			<h2 className={`${styles.subtitle} ${styles.right}`}>
				{t('hero.inner-heading-last')}
			</h2>
			<p className={styles.description}>{t('hero.text')}</p>
		</div>
	)
}
