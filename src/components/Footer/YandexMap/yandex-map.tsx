import type { YMapLocationRequest } from 'ymaps3'
import {
	reactify,
	YMap,
	YMapDefaultFeaturesLayer,
	YMapDefaultMarker,
	YMapDefaultSchemeLayer,
} from '@/lib/ymaps'

import styles from './yandex-map.module.css'

const LOCATION: YMapLocationRequest = {
	center: [37.736375, 55.703545],
	zoom: 17,
}

export function YandexMap() {
	return (
		<div className={styles.map}>
			<YMap location={reactify.useDefault(LOCATION)}>
				<YMapDefaultSchemeLayer />
				<YMapDefaultFeaturesLayer />
				<YMapDefaultMarker
					coordinates={reactify.useDefault([37.736375, 55.703545])}
					draggable={false}
					title="Haifisch"
					subtitle="Товары для интерьеров"
					iconName="malls"
					size="normal"
				/>
			</YMap>
		</div>
	)
}
