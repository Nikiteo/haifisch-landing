import styles from './container.module.css'

interface ContainerProps {
	id: string
	className?: string
}

export const Container: React.FC<ContainerProps & React.PropsWithChildren> = ({ id, className, children }) => {
	return (
		<section id={id} className={`${styles.section} ${className ?? ''}`}>
			<div className={styles.container}>{children}</div>
		</section>
	)
}
