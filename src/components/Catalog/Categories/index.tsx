import { catalogData } from '@/assets'
import styles from './index.module.css'

export function Categories() {
	return (
		<ul className={styles.categories}>
			{catalogData.categories.map(({ id, title }) => (
				<li key={id} className={styles.category}>
					{title}
				</li>
			))}
		</ul>
	)
}
