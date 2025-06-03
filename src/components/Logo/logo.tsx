import styles from './logo.module.css'

interface LogoProps {
	src: string
	alt: string
	className?: string
}

export function Logo({ src, alt, className }: Readonly<LogoProps>) {
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
