import styles from './advantages-list.module.css'
import { advantages } from './constants'

export function AdvantagesList() {
	return (
		<ul className={styles.list}>
			{advantages.map(item => (
				<li key={item.number} className={styles.item}>
					<span className={styles.number}>
						{item.number}
						/
					</span>
					<div className={styles.itemHeader}>
						<span className={styles.itemTitle}>{item.title}</span>
						<p className={styles.itemText}>{item.text}</p>
					</div>
				</li>
			))}
		</ul>
	)
}
