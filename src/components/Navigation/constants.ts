interface INavItems {
	id: string
	labelKey: string
	hideOnDesktop?: boolean
}

export const NAV_ITEMS: INavItems[] = [
	{ id: 'main', labelKey: 'main.nav', hideOnDesktop: true },
	{ id: 'about', labelKey: 'menu.about' },
	{ id: 'catalog', labelKey: 'button.catalog' },
	{ id: 'shops', labelKey: 'menu.shops' },
	{ id: 'contacts', labelKey: 'menu.contacts', hideOnDesktop: true },
] as const
