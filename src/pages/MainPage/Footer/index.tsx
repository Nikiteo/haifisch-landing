import { t } from 'i18next'

import { ContactIcons, Contacts, Copyrights, YandexMap } from '@/components'
import styles from './index.module.css'

function Footer() {
	return (
		<footer id="contacts" className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.block}>
					<div className={styles.linksContainer}>
						<h3 className={styles.title}>{t('footer.title')}</h3>
						<Contacts />
						<ContactIcons />
					</div>
					<YandexMap />
				</div>
				<Copyrights />
			</div>
		</footer>

	)
}

export default Footer
