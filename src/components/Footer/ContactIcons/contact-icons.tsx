import { t } from 'i18next'
import { CONTACT_ICONS } from '../constants'
import styles from './contact-icons.module.css'

export function ContactIcons() {
	return (
		<div className={styles.iconLinks}>
			{CONTACT_ICONS.map(({ icon: Icon, href, labelkey }) => (
				<a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={t(labelkey)}>
					<Icon className={styles.icon} />
				</a>
			))}
		</div>

	)
}
