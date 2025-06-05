import styles from './index.module.css'

export function FullPageLoader() {
	return (
		<div className={styles.overlay}>
			<svg
				viewBox="0 0 500 500"
				className={styles.logo}
			>
				<path
					d="M100 450 Q250 -100 400 450"
					className={styles.strokePath}
				/>
				<path
					d="M170 410 Q250 270 330 410"
					className={styles.strokePath}
				/>
			</svg>
		</div>
	)
}
