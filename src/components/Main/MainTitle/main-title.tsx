import styles from './main-title.module.css'

export function MainTitle() {
	return (
		<h1 className={styles.title}>
			изделия
			<span className={styles.right}>
				<span className={styles.for}>из</span>
				{' '}
				декоративного мрамора
			</span>
		</h1>
	)
}
