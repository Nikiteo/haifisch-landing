export function getShortProductName(name: string): string {
	if (name.toLocaleLowerCase().includes('мыльниц')) {
		if (name.toLocaleLowerCase().includes('со сливом'))
			return 'Мыльница со сливом'
		if (name.toLocaleLowerCase().includes('листок'))
			return 'Мыльница "Листок"'
		return 'Мыльница'
	}
	if (name.toLocaleLowerCase().includes('поднос'))
		return 'Декоративный поднос'
	if (name.toLocaleLowerCase().includes('подставка')) {
		if (name.toLocaleLowerCase().includes('для телефона'))
			return 'Подставка для телефона'
		return 'Декоративный поднос'
	}
	if (name.toLocaleLowerCase().includes('подсвечник'))
		return 'Подсвечник'
	if (name.toLocaleLowerCase().includes('менажниц'))
		return 'Менажница'
	if (name.toLocaleLowerCase().includes('держатель'))
		return 'Держатель для бумажных полотенец'
	if (name.toLocaleLowerCase().includes('стакан'))
		return 'Стакан для зубных щёток'
	if (name.toLocaleLowerCase().includes('чаша'))
		return 'Декоративная чаша \"Ладья\"'
	if (name.toLocaleLowerCase().includes('кашпо'))
		return 'Кашпо'
	return name
}
