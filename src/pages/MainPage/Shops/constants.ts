import { t } from 'i18next'

import { market, marketLogo, ozon, ozonLogo } from '@/assets'

interface IShops {
	background: string
	logo: string
	alt: string
	link: string
	backgroundPosition: string
	type: 'market' | 'ozon'
}

export const SHOPS: IShops[] = [
	{
		background: market,
		logo: marketLogo,
		alt: t('logo.marker-alt'),
		link: 'https://market.yandex.ru/store--haifisch?businessId=6328344',
		backgroundPosition: '100% 25%',
		type: 'market',
	},
	{
		background: ozon,
		logo: ozonLogo,
		alt: t('logo.ozon-alt'),
		link: 'https://www.ozon.ru/seller/haifisch-150026/products/?miniapp=seller_150026',
		backgroundPosition: '100%',
		type: 'ozon',
	},
]
