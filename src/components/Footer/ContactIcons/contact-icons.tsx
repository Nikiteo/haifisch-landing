import { CONTACT_ICONS } from '../constants'
import styles from './contact-icons.module.css'

export function ContactIcons() {
	return (
		<div className={styles.iconLinks}>
			{CONTACT_ICONS.map(({ icon: Icon, href }) => (
				<a key={href} href={href} target="_blank" rel="noopener noreferrer">
					<Icon className={styles.icon} />
				</a>
			))}
		</div>

	)
}
