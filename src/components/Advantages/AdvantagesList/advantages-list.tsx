import { t } from 'i18next'
import styles from './advantages-list.module.css'
import { ADVANTAGES } from './constants'

export function AdvantagesList() {
	return (
		<ul className={styles.list}>
			{ADVANTAGES.map(({ number, titleKey, textKey }) => (
				<li key={number} className={styles.item}>
					<span className={styles.number}>
						{number}
						/
					</span>
					<div className={styles.itemHeader}>
						<span className={styles.itemTitle}>{t(titleKey)}</span>
						<p className={styles.itemText}>{t(textKey)}</p>
					</div>
				</li>
			))}
		</ul>
	)
}
