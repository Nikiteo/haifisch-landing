import styles from './logo.module.css'

interface LogoProps {
	src: string
	alt: string
	className?: string
}

export const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
	return (
		<a
			href="https://haifisch.ru"
			target="_blank"
			rel="noopener noreferrer"
			className={`${styles.logo} ${className ?? ''} `}
		>
			<img loading="lazy" src={src} alt={alt} />
		</a>
	)
}
