import { Card, Container, ShopsTitle } from '@/components'

import { SHOPS } from './constants'
import styles from './index.module.css'

function ShopsPage() {
	return (
		<Container id="shops">
			<div className={styles.textContainer}>
				<div className={styles.decorativeBox} />
				<ShopsTitle />
			</div>
			<div className={styles.shopsWrapper}>
				{SHOPS.map(shop => (
					<Card
						key={shop.link}
						image={shop.background}
						alt={shop.alt}
						logo={shop.logo}
						link={shop.link}
						type={shop.type}
						position={shop.backgroundPosition}
					/>
				))}
			</div>
		</Container>
	)
}

export default ShopsPage
