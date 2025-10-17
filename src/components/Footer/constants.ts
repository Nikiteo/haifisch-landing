import { call as CallIcon, mail as MailIcon, pint as PintIcon, tg as TelegramIcon, vk as VkIcon } from '@/assets'

export const CONTACT_LINKS = [
	{
		text: 'г. Москва, ул.Артюхиной, д. 4',
		href: 'https://yandex.ru/maps/-/CHvwMO~c',
	},
	{
		text: '+7 (985) 162 73 94',
		href: 'tel:+79851627394',
	},
	{
		text: 'haifisch-store@yandex.ru',
		href: 'mailto:haifisch-store@yandex.ru',
	},
]

export const CONTACT_ICONS = [
	{
		icon: VkIcon,
		href: 'https://vk.com/haifisch_factory',
		labelkey: 'aria.vk-icon',
	},
	{
		icon: TelegramIcon,
		href: 'https://t.me/haifisch_stone',
		labelkey: 'aria.tg-icon',
	},
	{
		icon: MailIcon,
		href: 'mailto:haifisch-store@yandex.ru',
		labelkey: 'aria.mail-icon',
	},
	{
		icon: CallIcon,
		href: 'tel:+79851627394',
		labelkey: 'aria.call-icon',
	},
	{
		icon: PintIcon,
		href: 'https://ru.pinterest.com/haifisch_stone/',
		labelkey: 'aria.pint-icon',
	},
]
