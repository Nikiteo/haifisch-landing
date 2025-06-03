import { useMediaQuery } from '@/hooks/use-media-query'
import { CONTACT_LINKS as BASE_CONTACT_LINKS } from '../constants'
import styles from './contacts.module.css'

function getShortText(text: string): string {
	if (text.includes('Москва'))
		return `Адрес: ${text}`
	if (text.includes('+7'))
		return `Телефон: ${text}`
	if (text.includes('@'))
		return `Почта: ${text}`
	return text
}

export function Contacts() {
	const isDesktop = useMediaQuery('(min-width: 640px)')

	const CONTACT_LINKS = BASE_CONTACT_LINKS.map(link => ({
		...link,
		text: isDesktop ? getShortText(link.text) : link.text,
	}))

	return (
		<div className={styles.links}>
			{CONTACT_LINKS.map(link => (
				<a
					key={link.href}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.link}
				>
					{link.text}
				</a>
			))}
		</div>
	)
}
