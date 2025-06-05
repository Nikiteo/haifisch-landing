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
	type: 'market' | 'ozon'
}

export function Card({ image, alt, logo, link, position, type }: Readonly<CardProps>) {
	return (
		<div
			className={styles.card}
			style={
				{
					'--card-bg-image': `url(${image})`,
					'--card-bg-position': position,
				} as React.CSSProperties
			}
		>
			<img src={logo} alt={alt} className={type === 'ozon' ? styles.ozonLogo : styles.logo} loading="lazy" />
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
}
