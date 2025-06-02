import { t } from 'i18next'

import React from 'react'

import { Button } from '@/components'
import styles from './card.module.css'

interface CardProps {
	image: string
	alt: string
	logo: string
	link: string
	position: string
}

export const Card: React.FC<CardProps> = ({ image, alt, logo, link, position }) => (
	<div
		className={styles.card}
		style={
			{
				'--card-bg-image': `url(${image})`,
				'--card-bg-position': position,
			} as React.CSSProperties
		}
	>
		<img src={logo} alt={alt} className={link.includes('ozon') ? styles.ozonLogo : styles.logo} loading="lazy" />
		<Button
			variant="primary"
			size="large"
			className={styles.button}
			as="a"
			href={link}
			target="_blank"
			rel="noopener noreferrer"
		>
			{t('button.shops')}
		</Button>
	</div>
)
