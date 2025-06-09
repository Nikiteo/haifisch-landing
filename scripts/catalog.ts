export interface YmlCatalog {
	yml_catalog: {
		shop: {
			name: string
			company: string
			url: string
			categories: {
				category: Category[] | Category
			}
			offers: {
				offer: Offer[] | Offer
			}
		}
	}
}

export interface Category {
	'@_id': string
	'@_parentId'?: string
	'#text': string
}

export interface Offer {
	'@_id': string
	'@_available': string // "true" | "false"
	'name': string
	'categoryId': string
	'picture': string
	'price': string
	'oldprice'?: string
	'currencyId': string
	'url': string
	'vendor': string
	'description'?: string
	'param'?: Param[] | Param
}

export interface Param {
	'@_name': string
	'#text': string
}

export interface ResponseCategory {
	id: string
	title: string
}

export interface ResponseOffers {
	name: string
	shortName: string
	categoryId: string
	picture: string
	price: string
	url: string
	available: string
}
