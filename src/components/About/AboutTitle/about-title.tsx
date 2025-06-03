import { t } from 'i18next'

import styles from './about-title.module.css'

export function AboutTitle() {
	return (
		<div className={styles.container}>
			<hgroup>
				<h3 className={styles.title}>{t('hero.heading')}</h3>
				<h3 className={styles.subtitle}>{t('hero.inner-heading')}</h3>
				<h3 className={`${styles.subtitle} ${styles.right}`}>
					{t('hero.inner-heading-last')}
				</h3>
			</hgroup>
			<p className={styles.description}>{t('hero.text')}</p>
		</div>
	)
}
