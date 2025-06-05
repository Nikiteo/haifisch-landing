import { motion } from 'framer-motion'
import styles from './container.module.css'

interface ContainerProps {
	id?: string
	className?: string
}

export function Container({ id, className, children }: ContainerProps & React.PropsWithChildren) {
	return (
		<section id={id} className={`${styles.section} ${className ?? ''}`}>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				style={{ position: 'relative', zIndex: 1 }}
			>
				<div className={styles.container}>{children}</div>
			</motion.div>
		</section>
	)
}
