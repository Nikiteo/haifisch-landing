import { useEffect, useState } from 'react'
import { DrawLogo } from '@/components'
import styles from './index.module.css'

export function FullPageLoader() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setVisible(true)
		}, 300)

		return () => clearTimeout(timeout)
	}, [])

	return (
		<div className={styles.overlay}>
			{visible && <DrawLogo />}
		</div>
	)
}
