import { t } from 'i18next'
import { memo, useMemo } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router'
import { catalogData } from '@/assets'
import { Button } from '@/components'
import styles from './index.module.css'

export const Offers = memo(() => {
	const [searchParams] = useSearchParams()
	const location = useLocation()

	const selectedCategory = searchParams.get('category') ?? '90401'

	const filteredOffers = useMemo(() => {
		if (selectedCategory === '90401')
			return catalogData.offers
		return catalogData.offers.filter(item => String(item.categoryId) === selectedCategory)
	}, [selectedCategory])

	const isFullCatalogPage = location.pathname === '/catalog'
	const visibleOffers = isFullCatalogPage ? filteredOffers : filteredOffers.slice(0, 12)

	return (
		<div id="offers" className={styles.catalogWrapper}>
			<ul className={styles.catalog}>
				{visibleOffers.map(item => (
					<li key={item.url} className={styles.offer}>
						<img loading="lazy" src={item.picture} alt={item.name} className={styles.offerImage} />
						<h5 className={styles.offerName}>{item.shortName}</h5>
						<Button
							as="a"
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							variant="outline"
							size="small"
							className={styles.btn}
						>
							{t('button.buy')}
						</Button>
					</li>
				))}
			</ul>

			{!isFullCatalogPage && (
				<Link to={`/catalog${location.search}`} className={styles.link}>
					<Button variant="primary" size="large" className={styles.allBtn}>
						{t('button.all')}
					</Button>
				</Link>
			)}
		</div>
	)
})
