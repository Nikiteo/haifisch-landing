import { t } from 'i18next'
import { catalog } from '@/assets'
import { Categories, Container } from '@/components'
import styles from './index.module.css'

function Catalog() {
	return (
		<Container id="catalog">
			<div className={styles.wrapper}>
				<div className={styles.box} />
				<div className={styles.container}>
					<h2 className={styles.title}>{t('button.catalog')}</h2>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.imageBox}>
					<img loading="lazy" src={catalog} alt={t('main.image-alt')} className={styles.image} />
				</div>
				<Categories />
			</div>
		</Container>
	)
}

export default Catalog
