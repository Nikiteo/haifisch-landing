import { call, mail, telegram, vk } from '@/assets'

export const CONTACT_LINKS = [
	{
		text: 'г. Москва, ул.Артюхиной, д. 4',
		href: 'https://yandex.ru/maps/-/CHvwMO~c',
	},
	{
		text: '+7 985 162 73 94',
		href: 'tel:+79851627394',
	},
	{
		text: 'haifisch-store@yandex.ru',
		href: 'mailto:haifisch-store@yandex.ru',
	},
]

export const CONTACT_ICONS = [
	{
		icon: vk,
		href: 'https://vk.com/haifisch_factory',
	},
	{
		icon: telegram,
		href: 'https://t.me/haifisch_stone',
	},
	{
		icon: mail,
		href: 'mailto:haifisch-store@yandex.ru',
	},
	{
		icon: call,
		href: 'tel:+79851627394',
	},
]
