import React, { memo, useCallback } from 'react'

import styles from './navigation.module.css'

interface NavItemProps {
	targetId: string
	children: React.ReactNode
	onClick?: () => void
}

export const NavItem = memo(({ targetId, children, onClick }: NavItemProps) => {
	const handleClick = useCallback(() => {
		document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
		onClick?.()
	}, [targetId, onClick])

	return (
		<button type="button" onClick={handleClick} className={styles.navItem} tabIndex={0}>
			{children}
		</button>
	)
})
