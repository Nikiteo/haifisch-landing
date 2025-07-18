import { t } from 'i18next'

import { hero } from '@/assets'
import { AboutTitle, Container } from '@/components'

import styles from './index.module.css'

function About() {
	return (
		<Container id="about">
			<div className={styles.textContainer}>
				<div className={styles.decorativeBox} />
				<AboutTitle />
			</div>
			<div className={styles.imageWrapper}>
				<img loading="lazy" src={hero} alt={t('main.image-alt')} className={styles.image} />
			</div>
		</Container>
	)
}

export default About
