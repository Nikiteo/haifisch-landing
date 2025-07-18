import { t } from 'i18next'
import { circle, green } from '@/assets'
import { AdvantagesList, Container } from '@/components'
import styles from './index.module.css'

function Advantages() {
	return (
		<Container>
			<div className={styles.relativeWrapper}>
				<div className={styles.textContainer}>
					<div className={styles.box}>
						<h3 className={styles.title}>{t('advantages.title')}</h3>
					</div>
					<div className={styles.container}>
						<p className={styles.description}>{t('advantages.description')}</p>
					</div>
				</div>
				<div className={styles.content}>
					<AdvantagesList />
				</div>
				<div className={styles.images}>
					<img loading="lazy" src={green} alt={t('main.image-alt')} className={styles.image} />
					<img loading="lazy" src={circle} alt={t('main.image-alt')} className={styles.imageRight} />
				</div>
			</div>
		</Container>
	)
}

export default Advantages
