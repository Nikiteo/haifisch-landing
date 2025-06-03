import styles from './container.module.css'

interface ContainerProps {
	id: string
	className?: string
}

export function Container({ id, className, children }: ContainerProps & React.PropsWithChildren) {
	return (
		<section id={id} className={`${styles.section} ${className ?? ''}`}>
			<div className={styles.container}>{children}</div>
		</section>
	)
}
