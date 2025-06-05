import { t } from 'i18next'
import styles from './advantages-list.module.css'
import { ADVANTAGES } from './constants'

export function AdvantagesList() {
	return (
		<ul className={styles.list}>
			{ADVANTAGES.map(({ number, titleKey, textKey }) => (
				<li key={number} className={styles.item}>
					<span className={styles.number} aria-hidden="true">
						{number}
						/
					</span>
					<div className={styles.itemHeader}>
						<h4 className={styles.itemTitle}>{t(titleKey)}</h4>
						<p className={styles.itemText}>{t(textKey)}</p>
					</div>
				</li>
			))}
		</ul>
	)
}
