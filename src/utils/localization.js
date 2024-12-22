export function localizeDate(date) {
	return new Intl.DateTimeFormat('ru-RU', {
		hour: '2-digit',
		minute: '2-digit',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).format(new Date(date));
}
