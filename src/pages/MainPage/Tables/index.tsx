import { t } from 'i18next'
import { tableDark, tableLight } from '@/assets'
import { Container } from '@/components'
import styles from './index.module.css'

function Tables() {
	return (
		<Container>
			<div className={styles.textContainer}>
				<div className={styles.decorativeBox} />
				<div className={styles.container}>
					<div>
						<h3 className={styles.title}>{t('light.title')}</h3>
						<h3 className={styles.subtitle}>{t('light.subtitle')}</h3>
					</div>
					<p className={styles.description}>
						{t('light.text')}
						<a className={styles.link} href="https://market.yandex.ru/card/stol-zhurnalnyy-iz-dekorativnogo-mramora-haifisch-s-metallicheskim-podstolyem-belyy/4669050676?businessId=6328344&clid=6328344&model_id=4669046033&distr_type=8&pp=605" target="_blank" rel="noopener noreferrer" aria-label={t('aria.call-icon')}>
							{t('yandex.title')}
						</a>
					</p>
				</div>
			</div>
			<div className={styles.imageWrapper}>
				<img loading="lazy" src={tableLight} alt={t('main.image-alt')} className={styles.imageCircle} />
				<img loading="lazy" src={tableDark} alt={t('main.image-alt')} className={styles.image} />
			</div>
		</Container>
	)
}

export default Tables
