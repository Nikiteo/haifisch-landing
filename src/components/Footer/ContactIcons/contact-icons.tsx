import { CONTACT_ICONS } from '../constants'
import styles from './contact-icons.module.css'

export function ContactIcons() {
	return (
		<div className={styles.iconLinks}>
			{CONTACT_ICONS.map(icon => (
				<a
					key={icon.href}
					href={icon.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={icon.icon} className={styles.icon} alt="Icon" loading="lazy" />
				</a>
			))}
		</div>

	)
}
