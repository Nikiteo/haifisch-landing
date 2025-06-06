import type { ResponseCategory, ResponseOffers, YmlCatalog } from './catalog'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'
import { XMLParser } from 'fast-xml-parser'
import fetch from 'node-fetch'

const XML_URL
  = 'https://market-idx-pub.s3.yandex.net/businesses-EB05E51D6B4DBD5A15A9.xml'

const ALLOWED_CATEGORY_NAMES = ['Все товары', 'Подносы', 'Кашпо для цветов', 'Менажницы', 'Подставки сервировочные', 'Держатели кухонные', 'Мыльницы', 'Стаканы для ванной комнаты', 'Держатели для телефонов ручные', 'Блюда декоративные', 'Подносы', 'Подсвечники']

async function main() {
	const response = await fetch(XML_URL)

	if (!response.ok) {
		throw new Error(`Ошибка загрузки XML: ${response.statusText}`)
	}

	const xml = await response.text()

	const parser = new XMLParser({
		ignoreAttributes: false,
		attributeNamePrefix: '@_',
	})

	// eslint-disable-next-line ts/no-unsafe-assignment
	const parsed: YmlCatalog = parser.parse(xml)

	const categoriesRaw = parsed.yml_catalog.shop.categories.category
	const offersRaw = parsed.yml_catalog.shop.offers.offer

	const categories = Array.isArray(categoriesRaw) ? categoriesRaw : [categoriesRaw]
	const offers = Array.isArray(offersRaw) ? offersRaw : [offersRaw]

	const allowedCategory = categories
		.filter(c => ALLOWED_CATEGORY_NAMES.includes(c['#text']))
		.sort((a, b) => {
			if (a['#text'] === 'Все товары')
				return -1
			if (b['#text'] === 'Все товары')
				return 1
			return a['#text'].localeCompare(b['#text'], 'ru')
		})

	const allowedCategoryIds = new Set(
		allowedCategory.map(c => c['@_id']),
	)

	const filteredOffers = offers.filter(offer =>
		allowedCategoryIds.has(offer.categoryId.toString()),
	)

	const responseCategory: ResponseCategory[] = allowedCategory.map(c => ({
		id: c['@_id'],
		title: c['#text'],
	}))

	const responseOffers: ResponseOffers[] = filteredOffers.map(offer => ({
		name: offer.name,
		categoryId: offer.categoryId,
		picture: offer.picture,
		price: offer.price,
		url: offer.url,
		available: offer['@_available'],
	}))

	const responseJson = {
		categories: responseCategory,
		offers: responseOffers,
	}

	writeFileSync(
		resolve('./src/assets/catalog.json'),
		JSON.stringify(responseJson, null, '\t'),
		'utf-8',
	)

	console.log(`Готово! Сохранено ${filteredOffers.length} товаров `)
}

main().catch((err: unknown) => {
	if (err instanceof Error) {
		console.error('Ошибка:', err.message)
	}
	else {
		console.error('Неизвестная ошибка')
	}
	process.exit(1)
})
