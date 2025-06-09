import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router'
import { catalogData } from '@/assets'
import { scrollToId } from '@/hooks'
import styles from './index.module.css'

export const Categories = memo(() => {
	const [searchParams, setSearchParams] = useSearchParams()
	const selectedId = searchParams.get('category') ?? '90401'

	const handleClick = useCallback((id: string) => {
		setSearchParams({ category: id }, { replace: true })
		scrollToId(id)
	}, [setSearchParams])

	return (
		<ul className={styles.categories}>
			{catalogData.categories.map(({ id, title }) => (
				<li
					key={id}
					className={styles.category}
					onClick={() => handleClick(id)}
				>
					<button
						type="button"
						className={`${styles.button} ${id === selectedId ? styles.active : ''}`}
						onClick={() => handleClick(id)}
					>
						{title}
					</button>
				</li>
			))}
		</ul>
	)
})
