import React, { memo, useCallback } from 'react'

import styles from './navigation.module.css'

interface NavItemProps {
	targetId: string
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

export const NavItem = memo(({ targetId, children, className, onClick }: NavItemProps) => {
	const handleClick = useCallback(() => {
		document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
		onClick?.()
	}, [targetId, onClick])

	return (
		<li tabIndex={0} className={`${className ?? ''}`}>
			<button type="button" onClick={handleClick} className={styles.navItem}>
				{children}
			</button>
		</li>
	)
})
